import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { set } from '@ember/object';

export default class DocsCoreOverlay extends Controller.extend( {
  // anything which *must* be merged to prototype here
} ) {
  // BEGIN-SNIPPET docs-example-basic-overlay.js

  isOpen: boolean = false;
  hasBackdrop: boolean = true;
  autoFocus: boolean = true;
  enforceFocus: boolean = true;
  canEscapeKeyClose: boolean = true;
  usePortal: boolean = true;
  canOutsideClickClose: boolean = true;
  useTallContent: boolean = false;

  @action
  onOverlayToggle() {
    set( this, 'isOpen', !this.isOpen );
  }

  @action
  onClose() {
    set( this, 'isOpen', false );
  }
  // END-SNIPPET

  @action
  handleClose() {
    set( this, 'isOpen', false );
    set( this, 'useTallContent', false );
  }
  @action
  focusButton() {
    ( document.querySelector( '.focus-button' ) as HTMLElement ).focus();
  }
  @action
  toggleScrollButton() {
    set( this, 'useTallContent', !this.useTallContent );

  }
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
    else if ( type == "hasBackdrop" ) {
      set( this, 'hasBackdrop', !this.hasBackdrop );
    }

  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/overlay': DocsCoreOverlay;
  }
}
