import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { Boundary } from "../../-private/common/boundary";
import * as Classes from "../../-private/common/classes";
import { action, computed } from '@ember-decorators/object';
import Ember from 'ember';
interface IResizeEntry {
  contentRect: DOMRectReadOnly;
  target: Element;
}
enum OverflowDirection {
  NONE,
  GROW,
  SHRINK,
}
export default class OverflowList extends Component {
  layout = layout;
  breadCrumbItemClick!: (event: any) => void
  items: Array<object> = [];
  direction: OverflowDirection = OverflowDirection.NONE;
  className?: string;
  breadcrumb?: Array<object>;
  START: Boundary = Boundary.START;
  END: Boundary = Boundary.END;
  lastOverflowCount: number = 0;
  overflow: any[] = [];
  visible: Array<object> = this.items || [];
  orderedItems: Array<object> = [];
  minVisibleItems: number = 0;
  collapseFrom!: string;
  CollapseFrom: any = Boundary.START;
  isOpen: boolean = false;
  OVERFLOW_LIST: string = Classes.OVERFLOW_LIST + ' ' + Classes.BREADCRUMBS;
  spacer: Element | null = null;
  private previousWidths = new Map<Element, number>();
  BREADCRUMBS_COLLAPSED: string = Classes.BREADCRUMBS_COLLAPSED;
  POPOVER_ARROW: string = Classes.POPOVER_ARROW;
  MENU: string = Classes.MENU;
  MENU_ITEM: string = Classes.MENU_ITEM;
  POPOVER_DISMISS: string = Classes.POPOVER_DISMISS;
  DISABLED: string = Classes.DISABLED;
  TEXT_OVERFLOW_ELLIPSIS: string = Classes.TEXT_OVERFLOW_ELLIPSIS;
  FILL: string = Classes.FILL;
  OVERFLOW_LIST_SPACER: string = Classes.OVERFLOW_LIST_SPACER;
  breadId: string = '';

  init() {
    super.init();
    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
  }

  didReceiveAttrs() {
    if (this.get('collapseFrom') == 'END') {
      this.set('CollapseFrom', Boundary.END);
      this.repartition(true);

    }
    else {
      this.set('CollapseFrom', Boundary.START);
      this.repartition(true);

    }
  }

  didInsertElement() {
    this._super(...arguments);
    this.set('breadId', 'breadId' + this.elementId)
    this.set('spacer', this.element.querySelector(`.${Classes.OVERFLOW_LIST_SPACER}`));
    this.repartition(false);
  }

  async didUpdate() {
    if (this.direction != 0)
      this.repartition(false);
    if (this.isOpen) { //set popover arrow positions
      var docOver: any = await document.querySelector('.overflow-list-popper');
      var bread: any = await document.getElementById(this.breadId);
      if (docOver && bread && this.CollapseFrom != this.END) {
        const left = bread.getBoundingClientRect().left - docOver.getBoundingClientRect().left;
        docOver.style.setProperty('left', left - 4 + "px", "important");
      }
      else {
        if ((docOver.getBoundingClientRect().left > docOver.getBoundingClientRect().width) || ((docOver.getBoundingClientRect().left + docOver.getBoundingClientRect().width) > bread.getBoundingClientRect().right)) {
          const right = docOver.getBoundingClientRect().right - bread.getBoundingClientRect().right;
          docOver.style.setProperty('left', -(right - 4) + "px", "important");
          var arrowPos: any = document.querySelector('.' + this.POPOVER_ARROW);
          arrowPos.style.right = "1px";
        }
        else {
          const left = bread.getBoundingClientRect().left - docOver.getBoundingClientRect().left;
          docOver.style.setProperty('left', left - 4 + "px", "important");
          var arrowPos: any = document.querySelector('.' + this.POPOVER_ARROW);
          arrowPos.style.left = "1px";
        }
      }
    }
  }

  async didRender() {
    super.init();
    Ember.run.next(this, this.detachClickHandler);
  }

  private repartition(growing: boolean) {
    if (this.spacer == null) {
      return;
    }
    if (growing) {
      this.set('direction', OverflowDirection.GROW);
      this.set('lastOverflowCount', OverflowDirection.NONE ? this.overflow.length : this.lastOverflowCount)
      this.set('overflow', []);
      this.set('visible', this.items);
    }
    else if (this.spacer.getBoundingClientRect().width < 0.9) {
      if (this.visible.length <= this.minVisibleItems) {
        return null;
      }
      const collapseFromStart = this.CollapseFrom === Boundary.START;
      const visible = this.visible.slice();

      const next = collapseFromStart ? visible.shift() : visible.pop();
      if (next === undefined) {
        return null;
      }
      const overflow = collapseFromStart ? [...this.overflow, next] : [next, ...this.overflow];

      this.set('direction', this.direction === OverflowDirection.NONE ? OverflowDirection.SHRINK : this.direction);
      this.set('overflow', overflow);
      this.set('visible', visible);
    } else {
      // repartition complete!
      this.set('direction', OverflowDirection.NONE);

    }
    this.set('breadcrumb', this.visible.map(this.visibleItemRenderer));
    this.overflowRenderer();
  }
  
  private visibleItemRenderer = (props: any, index: number) => {
    const isCurrent = this.items[this.items.length - 1] === props;
    return { index: index, renderBreadcrumb: this.renderBreadcrumb(props, isCurrent) }
  };

  private overflowRenderer() {
    if (this.overflow.length) {
      this.set('orderedItems', this.overflow || [])
      if (this.CollapseFrom === Boundary.START) {
        this.set('orderedItems', this.overflow.slice().reverse());
      }
    }
    else {
      this.set('orderedItems', this.get('items') || [])
      if (this.CollapseFrom === Boundary.START) {
        this.set('orderedItems', this.get('items').slice().reverse());
      }
    }
  }

  private renderBreadcrumb(props: any, isCurrent: boolean) {
    var classes = Classes.BREADCRUMB + ' ' + this.className + ' ';
    if (isCurrent)
      classes += Classes.BREADCRUMB_CURRENT + ' ';
    if (props.disabled)
      classes += Classes.DISABLED;
    return { text: props.text, className: classes, href: props.href, isDisabled: props.disabled ? true : false, tabIndex: props.disabled ? "0" : '', target: props.target };
  }

  @action
  resize(entries: IResizeEntry[]) {
    const growing = entries.some(entry => {
      const previousWidth = this.previousWidths.get(entry.target) || 0;
      return entry.contentRect.width > previousWidth;
    });
    this.repartition(growing);
    entries.forEach(entry => this.previousWidths.set(entry.target, entry.contentRect.width));
  }

  @action
  breadcrumbOnClick(disabled: boolean, event: any) {
    if (disabled)
      return;
    if (this.get('breadCrumbItemClick'))
      this.get('breadCrumbItemClick')(event);

  }

  @action
  breadcrumbsPopOPen() {
    this.toggleProperty('isOpen');
  }

  detachClickHandler() {
    const method = this.get('isOpen') ? 'on' : 'off';

    if (method == 'on') {
      document.addEventListener('click', this._closeOnClickOut);
      document.addEventListener('keyup', this._closeOnEsc);
    }
    else {
      document.addEventListener('click', this._closeOnClickOut);
      document.addEventListener('keyup', this._closeOnEsc);
    }
  }
  
  async  _closeOnClickOut(e: any) {
    var popper: any = document.getElementsByClassName('overflow-list-popper');
    if (popper.length && !(popper[0].contains(e.target)) && !e.target.classList.contains(this.BREADCRUMBS_COLLAPSED)) {
      this._close();
    }
  }
  
  _closeOnEsc(e: any) {
    if (e.keyCode === 27) { this._close(); }
  }
  
  _close() {
    if (this.isDestroyed || this.isDestroying)
      return;
    this.set('isOpen', false);
  }
};
