import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreTabs extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  animate: boolean = false;
  vertical: boolean = false;
  renderActiveTabPanelOnly: boolean = false;
  @action
  onAnimate() {
    this.set('animate', !this.animate);
  }
  @action
  onVertical() {
    this.set('vertical', !this.vertical);
  }
  @action
  onActivePanel() {
    this.set('renderActiveTabPanelOnly', !this.renderActiveTabPanelOnly);
  }

  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/tabs': DocsCoreTabs;
  }
}
