import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { tagName } from '@ember-decorators/component';
export interface IResizeEntry {
  contentRect: DOMRectReadOnly;
  target: Element;
}
export default class ResizeSensor extends Component {
  onResize!: (entries: IResizeEntry[]) => void;
  observeParents?: boolean;
  layout = layout;
  DomElement!: any;
  private observer = new ResizeObserver(entries => this.findResize(entries));
  
  findResize(entries: IResizeEntry[]) {
    if (this.get('onResize')) {
      this.get('onResize')(entries);
    }
  }
  
  public didInsertElement() {
    this.set('DomElement', this.$());
    this.observeElement();
  }

  didUpdate() {
    this.observeElement(this.get('observeParents'));
  }

  public willDestroyElement() {
    this.observer.disconnect();
  }
  
  private observeElement(force = false) {
    if (this.DomElement == this.element && !force) {
      // quit if given same element -- nothing to update (unless forced)
      return;
    } else {
      // clear observer list if new element
      this.set('DomElement', this.element)
      // remember element reference for next time
    }
    this.observer.observe(this.element);
    if (this.get('observeParents')) {
      let parent = this.element.parentElement;
      while (parent != null) {
        this.observer.observe(parent);
        parent = parent.parentElement;
      }
    }
  }
  // normal class body definition here
};
