import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { action } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { layout } from '@ember-decorators/component';
import * as Classes from "../../-private/common/classes";
@layout(template)
export default class Dialog extends Component {
  @readOnly('width') Width!: string;
  @readOnly('height') Height!: string;
  @readOnly('marginTop') Top!: string;
  @readOnly('marginLeft') Left!: string;
  @readOnly('marginRight') Right!: string;
  OVERLAY: string = Classes.OVERLAY;
  OVERLAY_OPEN: string = Classes.OVERLAY_OPEN;
  OVERLAY_SCROLL_CONTAINER: string = Classes.OVERLAY_SCROLL_CONTAINER;
  OVERLAY_BACKDROP: string = Classes.OVERLAY_BACKDROP;
  OVERLAY_CONTENT: string = Classes.OVERLAY_CONTENT;
  DIALOG: string = Classes.DIALOG;
  DIALOG_CONTAINER: string = Classes.DIALOG_CONTAINER;
  isoutClickCloseDialog!: boolean;
  isOpenDialog!: boolean;
  ESC: number = 27;
  dbId!: string;
  isEscapeToClose!: boolean;
  currentWindow: any;
  init() {
    super.init();
    this._closeOnEsc = this._closeOnEsc.bind(this);
    this.enforceFocusFun = this.enforceFocusFun.bind(this);
  }
  async didReceiveAttrs() {
    this.set('dbId', 'dialog_box_id_' + this.elementId);
    await this.set('isOpenDialog', this.get('isOpenDialog'));
    var doc: any = await document.querySelector('#dialog_box_id_' + this.elementId);
    if (this.isOpenDialog) {
      doc.style.width = this.Width;
      doc.style.height = this.Height;
      doc.style.marginTop = this.Top;
      doc.style.marginLeft = this.Left;
      doc.style.marginRight = this.Right;
    }
  }
  didRender() {
    if (this.get('isEscapeToClose'))
      this.currentWindow.on('keyup', this._closeOnEsc);
    if (this.isOpenDialog) {
      var focus: any = document.getElementById(this.dbId);
      if (focus) {
        focus.focus();
        document.addEventListener('focus', this.enforceFocusFun, true);
      }
    }
  }
  didInsertElement() {
    this.set('currentWindow', this.$(window));
  }
  @action
  outerClickCloseDialog() {
    if (this.isoutClickCloseDialog)
      this.set('isOpenDialog', false);
  }
  _closeOnEsc(e: any) {
    if (e.keyCode === this.ESC) { this.set('isOpenDialog', false); }
  }
  enforceFocusFun(e: any) {
    var focus: any = document.getElementById(this.dbId);
    if (focus != null && !focus.contains(e.target)) {
      focus.focus();
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
  // normal class body definition here
};
