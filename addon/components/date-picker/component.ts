import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { get, set, computed, action } from '@ember/object';
import * as Classes from '../../-private/common/classes';
import { readOnly, alias } from '@ember/object/computed';
export default class DatePicker extends Component {
  layout = template;
  tagName = 'span';
  classNameBindings = [`POPOVER_TARGET`, `open:${Classes.POPOVER_OPEN}`];

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

  @computed('Format')
  get dateFormat() {
    return this.Format ? this.Format : 'DD/MM/YYYY';
  }

  TRANSITION_CONTAINER: string = Classes.TRANSITION_CONTAINER;
  POPOVER: string = Classes.POPOVER;
  POPOVER_CONTENT: string = Classes.POPOVER_CONTENT;
  DIVIDER: string = Classes.DIVIDER;
  POPOVER_TARGET = Classes.POPOVER_TARGET;

  _popperTarget: any;
  open: boolean = false;
  selected: Date = new Date();
  date: any;
  isDefaultOpen!: boolean;
  startYear!: number;
  endYear!: number;
  ESC: number = 27;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = Array(...Array(40)).map((_, i) => `${i + 1990}`);
  currentWindow: any;
  placement: string = get(this, 'placement') == undefined ? 'bottom' : get(this, 'placement');
  popperClass: string = 'popper';
  popOverArrow!: boolean;
  minimal: boolean = false;
  popperContainerId!: string;

  onClick!: (open: boolean) => void;
  onSelect!: (event: any) => void;

  init() {
    super.init();

    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
    if (get(this, 'date'))
      set(this, 'selected', new Date(get(this, 'date')));
  }

  didInsertElement() {
    set(this, '_popperTarget', this.element);
    set(this, 'popperContainerId', this.elementId + "popper-container");
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
    if (this.get('onClick')) {
      this.get('onClick')(this.open);
    }
    await this.toggleProperty('open');
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
