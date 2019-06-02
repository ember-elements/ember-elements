import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsCoreNavBar extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  align: string = "left";
  @action
  onAlignNavBar() {
    this.set('align', this.align == "left" ? "right" : "left");
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/nav-bar': DocsCoreNavBar;
  }
}
