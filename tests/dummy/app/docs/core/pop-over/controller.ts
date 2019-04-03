import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCorePopOver extends Controller {
  // normal class body definition here
  placement: string = 'auto';
  arrow: boolean = true;
  canOutsideClickClose: boolean = true;
  canEscapeKeyClose:boolean=true;
  open:boolean=false;
  @action
  OnMouseEnter() {
    var doc = document.querySelector('.docs-popover-example-scroll');
    if (doc) {
      var scrolldiv: any = document.querySelector('#pop-over-doc-scroll');
      scrolldiv.scrollTop = doc.getBoundingClientRect().height / 4;
      scrolldiv.scrollLeft = doc.getBoundingClientRect().width / 4;
    }
  }
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
  onClose(){
    this.set('open',false);
  }
  
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/pop-over': DocsCorePopOver;
  }
}
