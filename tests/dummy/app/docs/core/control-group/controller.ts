import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsCoreControlGroup extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  fill: boolean = false;
  vertical: boolean = false;
  style?: string = undefined;
  @action
  onChangeProps(value: string) {
    if (value == "fill") {
      this.set('fill', !this.fill);
      this.set('style', "flex-grow:1");
    }
    else {
      this.set('vertical', !this.vertical);
      this.set('style', undefined);
    }
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/control-group': DocsCoreControlGroup;
  }
}
