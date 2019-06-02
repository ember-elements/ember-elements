import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsCoreDrawer extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-drawer.js
  isOpenDrawer: boolean = false;
  vertical: boolean = false;
  size!: string | number;
  autoFocus: boolean = true;
  enforceFocus: boolean = true;
  hasBackdrop: boolean = true;
  usePortal: boolean = true;
  canOutsideClickClose: boolean = true;
  canEscapeKeyClose: boolean = true;
  isLeft: boolean = false;
  @action
  openDrawerComponent() {
    this.set('isOpenDrawer', true);
  }
  @action
  selectSize(e: any) {
    this.set('size', e.target.value);
  }
  @action
  onChangeVertical() {
    this.toggleProperty('vertical');
  }
  @action
  onautoFocus() {
    this.toggleProperty('autoFocus');

  }
  @action
  onenforceFocus() {
    this.toggleProperty('enforceFocus');
  }
  @action
  onhasBackdrop() {
    this.toggleProperty('hasBackdrop');
  }
  @action
  onusePortal() {
    this.toggleProperty('usePortal');

  }
  @action
  oncanOutsideClickClose() {
    this.toggleProperty('canOutsideClickClose');
  }
  @action
  oncanEscapeKeyClose() {
    this.toggleProperty('canEscapeKeyClose');
  }
  @action
  onisLeft() {
    this.toggleProperty('isLeft');
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/drawer': DocsCoreDrawer;
  }
}
