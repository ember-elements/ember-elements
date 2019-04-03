import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { action, computed } from '@ember-decorators/object';
import { get, getProperties, set } from '@ember/object';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { reads, readOnly } from '@ember-decorators/object/computed';
import * as Classes from "../../-private/common/classes";
@layout(template)
@tagName('span')
@classNames(Classes.POPOVER_TARGET)
export default class PopOver extends Component {
  _popperTarget: any;
  popelement: any;
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);
  @readOnly('open') Open!: boolean;
  @className(Classes.POPOVER_OPEN)
  open: boolean = false;
  currentWindow: any;
  ICON: string = Classes.ICON;
  TRANSITION_CONTAINER: string = Classes.TRANSITION_CONTAINER;
  POPOVER: string = Classes.POPOVER;
  POPOVER_CONTENT: string = Classes.POPOVER_CONTENT;
  POPOVER_CONTENT_SIZING: string = Classes.POPOVER_CONTENT_SIZING;
  FILL: string = Classes.FILL;
  popOverArrow!: boolean;
  arrow: boolean = true;
  canEscapeKeyClose: boolean = true;
  popCloseClickFun!: () => void;
  popOpenClickFun!: () => void;
  didInsertElement() {
    set(this, '_popperTarget', this.element);
    this.set('currentWindow', this.$(window));
  }
  child: boolean = false;
  ESC: number = 27;
  hasParent: boolean = false;
  parent: boolean = false;
  isOutClickClose: boolean = this.isOutClickClose == undefined ? true : this.isOutClickClose;
  placement: string = this.placement == undefined ? 'bottom' : this.placement;
  popperClass: string = "popper";
  init() {
    super.init();
    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
  }
  didReceiveAttrs() {
    super.init();
    if (this.get('arrow') == false) {
      this.set('popOverArrow', false);
      this.set('popperClass', 'popper');
    }
    else {
      this.set('popperClass', 'popper popper-arrow-active');
      this.set('popOverArrow', true);
    }
  }
  didRender() {
    Ember.run.next(this, this.detachClickHandler);
  }
  detachClickHandler() {
    const method = this.get('open') ? 'on' : 'off';
    this.set('popelement', $('.bp3-transition-container'));

    if (method == 'on') {
      this.currentWindow.on('click', this._closeOnClickOut);
      this.currentWindow.on('keyup', this._closeOnEsc);
    }
    else {
      this.currentWindow.off('click', this._closeOnClickOut);
      this.currentWindow.off('keyup', this._closeOnEsc);
    }
  }
  async  _closeOnClickOut(e: any) {
    const clickIsInside = await $(this.popelement[this.popelement.length - 1]).find(e.target).length > 0;
    if (!clickIsInside && !$(e.target).hasClass(this.FILL)) { this._close(); }
  }
  _closeOnEsc(e: any) {
    if (e.keyCode === this.ESC && this.get('canEscapeKeyClose')) { this._close(); }
  }
  _close() {
    if (this.isDestroyed || this.isDestroying)
      return;

    if (this.isOutClickClose == true)
      this.set('open', false);
  }
  @action
  close() {
    if (get(this, 'popCloseClickFun'))
      get(this, 'popCloseClickFun')();
    this.set('open', false);
  }
  @action
  togglePopover(e: any) {
    this.toggleProperty('open');
    if (get(this, 'popOpenClickFun'))
      get(this, 'popOpenClickFun')();
  }



};

