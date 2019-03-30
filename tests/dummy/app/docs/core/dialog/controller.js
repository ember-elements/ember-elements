import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreDialog extends Controller{
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-dialog-box.js

  isOpenDialog: boolean = false;
  @action
  openDialogBox() {
    this.set('isOpenDialog', true);
  }
  @action
  save() {
    this.set('isOpenDialog', false);
  }
  @action
  cancel() {
    this.set('isOpenDialog', false);
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/dialog': DocsCoreDialog;
  }
}
