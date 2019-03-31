import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
export default class DocsCoreButtonGroup extends Controller {
  // normal class body definition here
  fill: boolean = false;
  large: boolean = false;
  vertical: boolean = false;
  minimal: boolean = false;

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
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/button-group': DocsCoreButtonGroup;
  }
}
