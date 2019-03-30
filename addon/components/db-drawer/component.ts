import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { action } from '@ember-decorators/object';
import { readOnly, alias } from '@ember-decorators/object/computed';
import { attribute, layout } from '@ember-decorators/component';
import Ember from 'ember';
import * as Classes from "../../-private/common/classes";
@layout(template)
export default class DbDrawer extends Component {
  @readOnly('backdropClassName') backdropClass!: string;
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);
  DRAWER:string=Classes.DRAWER +' '+ Classes.OVERLAY_CONTENT;
  PORTAL:string=Classes.PORTAL;
  OVERLAY_CONTENT:string=Classes.OVERLAY_CONTENT;
  OVERLAY:string=Classes.OVERLAY;
  OVERLAY_OPEN:string=Classes.OVERLAY_OPEN;
  OVERLAY_BACKDROP:string=Classes.OVERLAY_BACKDROP;
  OVERLAY_INLINE:string=Classes.OVERLAY_INLINE;
  drawerId: string = '';
  backDropId: string = '';
  portalClassName!: string;
  autoFocus: boolean = true;
  isOpen: boolean = false;
  size !: string | number;
  enforceFocus: boolean = true;
  hasBackdrop: boolean = true;
  canEscapeKeyClose: boolean = true;
  canOutsideClickClose: boolean = true;
  usePortal: boolean = true;
  isInterval: boolean = true;
  vertical: boolean = false;
  onClose!: (e: any) => void;
  isLeft: boolean = false;
  init() {
    super.init();
    this.enforceFocusFun = this.enforceFocusFun.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  didReceiveAttrs() {
    super.init();
    if (this.get('usePortal')) {
      this.set('portalClassName', this.get('portalClassName'));
    }
    this.set('isInterval', true);
  }
  didInsertElement() {
    super.init();
    this.set('drawerId', 'drawer' + this.elementId);
    this.set('backDropId', 'backDrop' + this.elementId);

  }
  didRender() {

    if (this.drawerId != '' && this.get('isOpen') && this.get('isInterval')) {
      var focus: any = document.getElementById(this.drawerId);
      this.findSize();
      if (focus && this.get('autoFocus')) {
        focus.focus();
      }
      if (focus && this.get('enforceFocus')) {
        document.addEventListener('focus', this.enforceFocusFun, true)
      }
      if (this.get('usePortal'))
        document.querySelectorAll('body')[0].classList.add('bp3-overlay-open');
      if (!this.get('hasBackdrop')) {
        var backDrop: any = document.querySelector('#' + this.backDropId + '.bp3-overlay-backdrop');
        backDrop.style.backgroundColor = 'inherit';
      }
      if (this.get('hasBackdrop')) {
        var backDrop: any = document.querySelector('#' + this.backDropId + '.bp3-overlay-backdrop');
        backDrop.style.backgroundColor = 'none';
      }
    }
    if (this.get('isOpen')) {
      document.addEventListener('keydown', this.handleKeyDown, true);
    }

    if (!this.get('isOpen') && this.get('usePortal')) {
      document.querySelectorAll('body')[0].classList.remove('bp3-overlay-open');
    }

  }
  findSize() {

    var styleType = 'width';
    if (this.get('vertical')) {
      styleType = 'height';
      document.querySelectorAll('#' + this.drawerId + '.bp3-drawer')[0].classList.add('bp3-vertical');
    }
    else {
      document.querySelectorAll('#' + this.drawerId + '.bp3-drawer')[0].classList.remove('bp3-vertical');
      if (this.isLeft) {
        document.querySelectorAll('#' + this.drawerId + '.bp3-drawer')[0].classList.add('left-drawer');
      }
      else {
        document.querySelectorAll('#' + this.drawerId + '.bp3-drawer')[0].classList.remove('left-drawer');
      }
    }
    document.querySelector('.bp3-drawer').setAttribute('tabindex', "0");
    var size: string | number = this.get('size');
    var sizeDrawer: any = document.querySelector('#' + this.drawerId);
    if (size == 'SIZE_SMALL') {
      sizeDrawer.style[styleType] = '360px';
    }
    else if (size == 'SIZE_STANDARD') {
      sizeDrawer.style[styleType] = '50% ';
    }
    else if (size == 'SIZE_LARGE') {
      sizeDrawer.style[styleType] = '90% ';
    }
    else if (!isNaN(size)) {
      sizeDrawer.style[styleType] = size + 'px';
    }
    else if (size != null) {
      sizeDrawer.style[styleType] = size;
    }
    else {
      sizeDrawer.style[styleType] = '50% ';
    }


  }
  enforceFocusFun(e: any) {
    if (!this.get('enforceFocus'))
      return;
    if (this.isDestroyed || this.isDestroying)
      return;
    var focus: any = document.getElementById(this.drawerId);
    if (focus != null && !focus.contains(e.target)) {
      focus.focus();
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
  handleKeyDown(e: any) {
    if (this.isDestroyed || this.isDestroying)
      return;
    if (e.keyCode == 27 && this.get('canEscapeKeyClose')) {
      this.set('isInterval', false);
      setTimeout(() => {
        this.set('isOpen', false);
      }, 101);
      if (this.get('onClose'))
        this.get('onClose')(e);
    }
  }
  @action
  async outerClickToClose(e: any) {
    if (!this.get('canOutsideClickClose'))
      return;
    this.set('isInterval', false);
    setTimeout(() => {
      this.set('isOpen', false);
    }, 200);
    if (this.get('onClose'))
      this.get('onClose')(e);
  }


};
