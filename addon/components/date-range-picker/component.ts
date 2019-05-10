import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { action, computed } from '@ember-decorators/object';
import { get, set } from '@ember/object';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { readOnly, alias } from '@ember-decorators/object/computed';
import moment from 'moment';
import * as Classes from '../../-private/common/classes';
@tagName('span')
@layout(template)
@classNames('date-range-pckr bp3-popover-target')
export default class DateRangePicker extends Component {
  @readOnly('format') Format?: string;

  @readOnly('open') Open?: boolean;

  @className(Classes.POPOVER_OPEN)
  open: boolean = false;

  @attribute('style') style: any = Ember.String.htmlSafe(this.style);

  @computed('Format')
  get dateFormat() {
    return this.Format ? this.Format : this.defaultFormat;
  }

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

  _popperTarget: any;
  TRANSITION_CONTAINER: string = Classes.TRANSITION_CONTAINER;
  POPOVER: string = Classes.POPOVER;
  POPOVER_CONTENT: string = Classes.POPOVER_CONTENT;
  DIVIDER: string = Classes.DIVIDER;
  MENUITEM: string = Classes.MENU_ITEM;
  FILL: string = Classes.FILL;
  TEXT_OVERFLOW_ELLIPSIS: string = Classes.TEXT_OVERFLOW_ELLIPSIS;
  POPOVERDISMISS: string = Classes.POPOVER_DISMISS
  MENU: string = Classes.MENU;
  onSelect!: (event: any) => void;
  date!: Date;
  range2!: Date;
  range1!: Date;
  isDefaultOpen!: boolean;
  defaultFormat: string = 'DD-MM-YYYY';
  ESC: number = 27;
  startYear!: number;
  endYear!: number;
  range: any;
  currentWindow: any;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = Array(...Array(40)).map((_, i) => `${i + 1990}`);
  placement: string = this.placement == undefined ? 'bottom' : this.placement;
  popperClass: string = 'popper';
  popOverArrow!: boolean;
  minimal: boolean = false;
  onClick!: (open: boolean) => void;
  popperContainerId!: string;

  init() {
    super.init();
    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
    if ((this.range.start).getMonth() == (this.range.end).getMonth() && (this.range.start).getFullYear() == (this.range.end).getFullYear()) {
      set(this, 'range2', new Date(this.range.start.getFullYear(), this.range.start.getMonth() + 1, this.range.start.getDate()));
    }
  }

  didInsertElement() {
    set(this, '_popperTarget', this.element);
    set(this, 'popperContainerId', this.elementId + "popper-container");
  }

  didRender() {
    Ember.run.next(this, this.detachClickHandler);
    let d = moment(this.range.start).format(this.dateFormat) + ' -- ' + moment(this.range.end).format(this.dateFormat);
    this.set('date', d);
  }

  async didReceiveAttrs() {
    await set(this, '_popperTarget', this.element);
    if (this.get('minimal')) {
      this.set('popOverArrow', false);
      this.set('popperClass', 'popper');
    }
    else {
      this.set('popperClass', 'popper popper-arrow-active');
      this.set('popOverArrow', true);
    }
    if (this.get('isDefaultOpen'))
      this.set('open', this.get('isDefaultOpen'));

    if (this.get('startYear') && !isNaN(this.get('startYear')) && this.get('endYear') && !isNaN(this.get('endYear'))) {
      let yearDiff = this.get('endYear') - this.get('startYear');
      if (yearDiff > 1) {
        this.years = Array(...Array(yearDiff)).map((_, i) => `${i + this.get('startYear')}`);
      }
    }
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
    if (this.range.start && this.range.end && this.get('onSelect')) {
      get(this, 'onSelect')(this.range);
    }
  }

  @action
  togglePopover() {
    if (this.get('onClick')) {
      this.get('onClick')(this.open);
    }
    this.toggleProperty('open');
  }

  @action
  past(data: string) {
    let today: Date = new Date();
    let past: any;
    switch (data) {
      case '1week':
        past = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        break;
      case '1month':
        past = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        break;
      case '3months':
        past = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
        break;
      case '6months':
        past = new Date(today.getFullYear(), today.getMonth() - 6, today.getDate());
        break;
      case '1year':
        past = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        break;
      case '2years':
        past = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
        break;
    }
    this.set('range', { start: past, end: today });
    set(this, 'range1', past);
    if (past.getMonth() == today.getMonth() && past.getFullYear() == today.getFullYear()) {
      set(this, 'range2', new Date(past.getFullYear(), past.getMonth() + 1, past.getDate()));
    } else
      this.set('range2', today);
    this.set('date', (moment(this.range.start).format(this.dateFormat) + ' -- ' + moment(this.range.end).format(this.dateFormat)));
    if (this.range.start && this.range.end && this.get('onSelect')) {
      get(this, 'onSelect')(this.range);
    }
  }

  detachClickHandler() {
    const method = this.get('open') ? 'on' : 'off';
    if (method == 'on') {
      window.addEventListener('click', this._closeOnClickOut);
      window.addEventListener('keyup', this._closeOnEsc);
    }
    else {
      window.removeEventListener('click', this._closeOnClickOut);
      window.removeEventListener('keyup', this._closeOnEsc);
    }
  }

  _closeOnClickOut(e: any) {
    const clickIsInside = document.querySelector('#' + this.popperContainerId);
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

