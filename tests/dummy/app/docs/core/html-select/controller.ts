import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreHtmlSelect extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  OPTIONS: Array<object | string> = ["Choose an item...", {
    label: "One",
    value: 1
  }, {
      label: "Two",
      value: 2
    }, {
      label: "Three",
      value: 3
    }, {
      label: "Four",
      value: 4
    }];
  disabled = false;
  fill = false;
  large = false;
  minimal = false;
  isOpenIconDrawer = false;
  isOpenOptionDrawer = false;

  @action
  onChange(e: HTMLSelectElement) {
    console.log(e.target.value);
  }

  @action
  onPropsChange(type: string) {
    if (type == "disabled")
      this.set('disabled', !this.disabled);
    else if (type == "fill")
      this.set('fill', !this.fill);
    else if (type == "large")
      this.set('large', !this.large);
    else if (type == "minimal")
      this.set('minimal', !this.minimal);
  }

  @action
  openIconProps() {
    this.set('isOpenIconDrawer', true);
  }

  @action
  openOptionProps() {
    this.set('isOpenOptionDrawer', true);
  }

  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/html-select': DocsCoreHtmlSelect;
  }
}
