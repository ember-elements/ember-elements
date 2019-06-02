import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsCoreCollapse extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  isOpen: boolean = false;
  keepChildrenMounted: boolean = false;

  @action
  onClickButton() { //mouse event action
    this.set('isOpen', !this.isOpen);
  }

  @action
  doFuction() {
    this.set('keepChildrenMounted', !this.keepChildrenMounted);
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/collapse': DocsCoreCollapse;
  }
}
