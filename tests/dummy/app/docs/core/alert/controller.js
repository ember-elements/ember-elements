import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreAlert extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // BEGIN-SNIPPET docs-example-basic-alert.js

  isOpenError = false;
  isOpen = false;
  canEscapeKeyCancel = false;
  canOutsideClickCancel = false;

  @action
  handleErrorOpen() {
    this.set('isOpenError', true);
  }

  @action
  handleErrorClose() {
    this.set('isOpenError', false);

  }

  @action
  handleMoveOpen() {
    this.set('isOpen', true);

  }

  @action
  handleMoveCancel() {
    this.set('isOpen', false);
  }

  @action
  handleMoveConfirm() {
    this.set('isOpen', false);
  }

  // END-SNIPPET

  @action
  onPropsChangeEvent(type: string) {
    if (type == "canEscapeKeyCancel")
      this.set('canEscapeKeyCancel', !this.canEscapeKeyCancel);
    else
      this.set('canOutsideClickCancel', !this.canOutsideClickCancel);
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/alert': DocsCoreAlert;
  }
}
