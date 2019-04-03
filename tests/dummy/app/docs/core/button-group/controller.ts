import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
export default class DocsCoreButtonGroup extends Controller {
  // normal class body definition here
  fill: boolean = false;
  large: boolean = false;
  vertical: boolean = false;
  minimal: boolean = false;
  alignText: string = 'center';
  leftActive: boolean = false;
  centerActive: boolean = true;
  rightActive: boolean = false;
  @action
  onChangeProps(type: string) {
    if (type == 'fill')
      this.set('fill', !this.fill);
    else if (type == 'large')
      this.set('large', !this.large);
    else if (type == 'vertical')
      this.set('vertical', !this.vertical);
    else if (type == 'minimal')
      this.set('minimal', !this.minimal);
  }
  @action
  onTextAlign(type: string) {
    if (type == 'left') {
      this.set('alignText', 'left');
      this.set('leftActive', true);
      this.set('rightActive', false);
      this.set('centerActive', false);
    }
    else if (type == "center") {
      this.set('alignText', 'center');
      this.set('leftActive', false);
      this.set('rightActive', false);
      this.set('centerActive', true);
    }
    else {
      this.set('alignText', 'right');
      this.set('leftActive', false);
      this.set('rightActive', true);
      this.set('centerActive', false);
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/button-group': DocsCoreButtonGroup;
  }
}
