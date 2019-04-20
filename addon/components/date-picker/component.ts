import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { action, computed } from '@ember-decorators/object';
import { get, set } from '@ember/object';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { readOnly, alias } from '@ember-decorators/object/computed';
import * as Classes from '../../-private/common/classes';
@layout(template)
@tagName('span')
@classNames(Classes.POPOVER_TARGET)
export default class DatePicker extends Component {
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);

  @readOnly('open') Open?: boolean;

  @readOnly('format') Format!: string;

  @alias('InputGroupProps.class') IGCLASS?: string;

  @alias('InputGroupProps.style') IGSTYLE?: string;

  @alias('InputGroupProps.disabled') IGDISABLED?: boolean;

  @alias('InputGroupProps.intent') IGINTENT?: string;

  @alias('InputGroupProps.large') IGLARGE?: boolean;

  @alias('InputGroupProps.leftIcon') IGLEFTICON?: string;

  @alias('InputGroupProps.rightIcon') IGRIGHTICON?: string;

  @alias('InputGroupProps.iconSize') IGICONSIZE?: number;

  @alias('InputGroupProps.round') IGROUND?: boolean;

  @alias('InputGroupProps.small') IGSMALL?: boolean;

  @alias('InputGroupProps.placeholder') IGPLACEHOLDER?: string;


  @className(Classes.POPOVER_OPEN)
  open: boolean = false;

  @computed('Format')
  get dateFormat() {
    return this.Format ? this.Format : 'DD/MM/YYYY';
  }

  TRANSITION_CONTAINER: string = Classes.TRANSITION_CONTAINER;
  POPOVER: string = Classes.POPOVER;
  POPOVER_CONTENT: string = Classes.POPOVER_CONTENT;
  DIVIDER: string = Classes.DIVIDER;
  _popperTarget: any;
  onSelect!: (event: any) => void;
  selected: Date = new Date();
  date: any;
  isDefaultOpen!: boolean;
  startYear!: number;
  endYear!: number;
  ESC: number = 27;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = Array(...Array(40)).map((_, i) => `${i + 1990}`);
  currentWindow: any;
  placement: string = this.placement == undefined ? 'bottom' : this.placement;
  popperClass: string = 'popper';
  popOverArrow!: boolean;
  minimal: boolean = false;

  init() {
    super.init();

    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
    if (get(this, 'date'))
      set(this, 'selected', new Date(get(this, 'date')));
  }

  didInsertElement() {
    set(this, '_popperTarget', this.element);
    this.set('currentWindow', this.$(window));
  }

  async didReceiveAttrs() {
    await set(this, '_popperTarget', this.element);
    if (this.get('isDefaultOpen'))
      this.set('open', this.get('isDefaultOpen'));
    if (this.get('startYear') && !isNaN(this.get('startYear')) && this.get('endYear') && !isNaN(this.get('endYear'))) {
      let yearDiff = this.get('endYear') - this.get('startYear');
      if (yearDiff > 1) {
        this.years = Array(...Array(yearDiff)).map((_, i) => `${i + this.get('startYear')}`);
      }
    }
    if (this.get('minimal')) {
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

  @action
  changeCenter(unit: any, calendar: any, e: any) {
    let newCenter;
    if (unit === 'month')
      newCenter = new Date(calendar.center).setMonth(this.months.indexOf(e.target.value));
    else
      newCenter = new Date(calendar.center).setFullYear(e.target.value);
    calendar.actions.changeCenter(new Date(newCenter));
  }

  @action
  onselect() {
    this.set('date', this.selected);
    if (this.get('onSelect'))
      this.get('onSelect')(this.selected);
  }

  @action
  async togglePopover() {
    await this.toggleProperty('open');
  }


  detachClickHandler() {
    const method = this.get('open') ? 'on' : 'off';
    if (method == 'on') {
      this.currentWindow.on('click', this._closeOnClickOut);
      this.currentWindow.on('keyup', this._closeOnEsc);
    }
    else {
      this.currentWindow.off('click', this._closeOnClickOut);
      this.currentWindow.off('keyup', this._closeOnEsc);
    }
  }

  _closeOnClickOut(e: any) {
    const clickIsInside = document.querySelector('.' + this.TRANSITION_CONTAINER);
    const clickIsInsideFound = clickIsInside ? clickIsInside.contains(e.target) : false
    if (!clickIsInsideFound) { this._close(); }
  }

  _closeOnEsc(e: any) {
    if (e.keyCode === this.ESC) { this._close(); }
  }

  _close() {
    if (this.isDestroyed || this.isDestroying)
      return;
    set(this, 'open', false);
  }

};
