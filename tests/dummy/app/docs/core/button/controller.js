import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreButton extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-button.js
  @action
  onClickButton(event: object) { //mouse event action
    console.log('asdf')
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/button': DocsCoreButton;
  }
}
