import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreTooltip extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-tooltip.js

  Content: string = `<em>This tooltip contains an <strong>em1</strong> tag.</em>`;
  lotsOfText: string = `<span>In facilisis scelerisque dui vel dignissim. Sed nunc orci.</span>`
  isOpen: boolean = false;
  @action
  onisOpen() {
    this.toggleProperty('isOpen');
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/tooltip': DocsCoreTooltip;
  }
}
