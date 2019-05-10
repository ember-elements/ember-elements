import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { action } from '@ember-decorators/object';
import { get, set } from '@ember/object';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { readOnly } from '@ember-decorators/object/computed';
import * as Classes from '../../-private/common/classes';
@layout(template)
@tagName('span')
@classNames(Classes.POPOVER_TARGET)
export default class PopOver extends Component {
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);

  @readOnly('open') Open!: boolean;

  @className(Classes.POPOVER_OPEN)
  open: boolean = false;

  _popperTarget: any;
  popelement: any;
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
  child: boolean = false;
  ESC: number = 27;
  hasParent: boolean = false;
  parent: boolean = false;
  isOutClickClose: boolean = this.isOutClickClose == undefined ? true : this.isOutClickClose;
  placement: string = this.placement == undefined ? 'bottom' : this.placement;
  popperClass: string = 'popper';
  iconSize?: number;
  popperContentId!: string;
  popperContainerId!: string;
  popperClientWidth!: number;
  popperClientHeight!: number;
  MAX_RE_RENDER_LIMIT: number = 30;
  START_RE_RENDER: number = 0;

  init() {
    super.init();
    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
  }

  didInsertElement() {
    set(this, '_popperTarget', this.element);
    set(this, 'popperContentId', this.elementId + "popper");
    set(this, 'popperContainerId', this.elementId + "popper-container");
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

  async didUpdate() {
    if (document.getElementById(this.popperContentId) && this.open && (this.START_RE_RENDER <= this.MAX_RE_RENDER_LIMIT)) {
      if (this.get('popperClientWidth') != (document.getElementById(this.popperContentId) as HTMLElement).clientWidth || this.get('popperClientHeight') != (document.getElementById(this.popperContentId) as HTMLElement).clientHeight) {
        set(this, 'popperClientWidth', (document.getElementById(this.popperContentId) as HTMLElement).clientWidth);
        set(this, 'popperClientHeight', (document.getElementById(this.popperContentId) as HTMLElement).clientHeight);
        await this.toggleProperty('open');
        this.toggleProperty('open');
        this.incrementProperty('START_RE_RENDER');
      }
    }
  }

  @action
  close() {
    if (get(this, 'popCloseClickFun'))
      get(this, 'popCloseClickFun')();
    this.set('open', false);
  }

  @action
  togglePopover() {
    this.toggleProperty('open');
    if (get(this, 'popOpenClickFun'))
      get(this, 'popOpenClickFun')();

    if (this.open && document.getElementById(this.popperContentId)) {
      set(this, 'START_RE_RENDER', 0);
      set(this, 'popperClientWidth', (document.getElementById(this.popperContentId) as HTMLElement).clientWidth);
      set(this, 'popperClientHeight', (document.getElementById(this.popperContentId) as HTMLElement).clientHeight);
    }
  }

  detachClickHandler() {
    const method = this.get('open') ? 'on' : 'off';
    this.set('popelement', document.querySelector('#' + this.popperContainerId));
    if (method == 'on') {
      window.addEventListener('click', this._closeOnClickOut);
      window.addEventListener('keyup', this._closeOnEsc);
    }
    else {
      window.removeEventListener('click', this._closeOnClickOut);
      window.removeEventListener('keyup', this._closeOnEsc);
    }
  }

  async  _closeOnClickOut(e: any) {
    const clickIsInside = await this.popelement.contains(e.target);
    if (!clickIsInside && !e.target.classList.contains(this.FILL)) { this._close(); }
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

};

