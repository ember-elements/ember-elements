import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { set } from '@ember/object';

export default class DocsCoreDialog extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-dialog.js

  isOpen: boolean = false;
  autoFocus: boolean = true;
  enforceFocus: boolean = true;
  canEscapeKeyClose: boolean = true;
  usePortal: boolean = true;
  canOutsideClickClose: boolean = true;

  @action
  onDialogToggle() {
    set( this, 'isOpen', !this.isOpen );
  }

  @action
  onClose() {
    set( this, 'isOpen', false );
  }
  // END-SNIPPET
  @action
  onPropsChangeEvent( type: string ) {
    if ( type == "autoFoucs" ) {
      set( this, 'autoFocus', !this.autoFocus );
    }
    else if ( type == "enforceFocus" ) {
      set( this, 'enforceFocus', !this.enforceFocus );
    }
    else if ( type == "usePortal" ) {
      set( this, 'usePortal', !this.usePortal );
    }
    else if ( type == "canOutsideClickClose" ) {
      set( this, 'canOutsideClickClose', !this.canOutsideClickClose );
    }
    else if ( type == "canOutsideClickClose" ) {
      set( this, 'canOutsideClickClose', !this.canOutsideClickClose );
    }
    else if ( type == "canEscapeKeyClose" ) {
      set( this, 'canEscapeKeyClose', !this.canEscapeKeyClose );
    }
  }


}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/dialog': DocsCoreDialog;
  }
}
