import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class DocsCorePopOver extends Controller {
  // normal class body definition here
  placement: string = 'auto';
  arrow: boolean = true;
  canOutsideClickClose: boolean = true;
  canEscapeKeyClose: boolean = true;
  open: boolean = false;
  @action
  selectPositon(e: any) {
    this.set('placement', e.target.value);
  }
  @action
  oncanOutsideClickClose() {
    this.set('canOutsideClickClose', !this.canOutsideClickClose);
  }
  @action
  oncanEscapeKeyClose() {
    this.set('canEscapeKeyClose', !this.canEscapeKeyClose);
  }
  @action
  onArrow() {
    this.set('arrow', !this.arrow);
  }
  @action
  onClose() {
    this.set('open', false);
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/pop-over': DocsCorePopOver;
  }
}
