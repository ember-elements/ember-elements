import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action, computed } from '@ember-decorators/object';
import { get } from '@ember/object';
import { readOnly } from '@ember-decorators/object/computed';
import Ember from 'ember';
import { classNames, tagName, attribute, className } from '@ember-decorators/component';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
@tagName('div')
@classNames(Classes.INPUT_GROUP)
export default class InputGroup extends Component {
  layout = layout;

  @attribute('style') style: any = Ember.String.htmlSafe(this.style);

  @className(Classes.DISABLED)
  disabled: boolean = false;

  @className(Classes.SMALL)
  small: boolean = false;

  @readOnly('intent') Intents?: Intent;

  @className
  @computed('Intents')
  get intentStyle() {
    return this.Intents ? Classes.intentClass(this.Intents) : Classes.intentClass('none');
  }

  @className(Classes.MINIMAL)
  minimal: boolean = false;

  @className(Classes.LARGE)
  large: boolean = false;

  @className(Classes.ROUND)
  round: boolean = false;

  DEFAULT_RIGHT_ELEMENT_WIDTH: number = 10;
  rightElementWidthChange: number = this.DEFAULT_RIGHT_ELEMENT_WIDTH;
  rightElementWidth: any = Ember.String.htmlSafe('padding-right:' + this.DEFAULT_RIGHT_ELEMENT_WIDTH + 'px;');
  MINIMAL: string = (Classes.MINIMAL);
  INPUT: string = (Classes.INPUT);
  INPUT_ACTION: string = (Classes.INPUT_ACTION);
  placeholder: string = (this.placeholder == undefined ? 'Any text...' : this.placeholder);
  onClick!: (value: any, event: any) => void;
  onkeyUp!: (value: any, event: any) => void;
  onkeyDown!: (value: any, event: any) => void;
  onDoubleClick!: (value: any, event: any) => void;
  onBlur!: (value: any, event: any) => void;
  onChange!: (value: any, event: any) => void;
  rightIconClick!: (event: any) => void;
  leftIconClick!: (event: any) => void;

  didUpdate() {
    this.updateInputWidth();
  }

  didInsertElement() {
    this.updateInputWidth();
  }

  keyUp(event: any) {
    if (get(this, 'onkeyUp'))
      get(this, 'onkeyUp')(event.target.value, event);
  }

  click(event: any) {
    if (get(this, 'onClick'))
      get(this, 'onClick')(event.target.value, event);
  }

  doubleClick(event: any) {
    if (get(this, 'onDoubleClick'))
      get(this, 'onDoubleClick')(event.target.value, event);
  }

  focusOut(event: any) {
    if (get(this, 'onBlur'))
      get(this, 'onBlur')(event.target.value, event);
  }

  keyDown(event: any) {
    if (get(this, 'onkeyDown'))
      get(this, 'onkeyDown')(event.target.value, event);
  }

  @action
  onInputChange(event: any) {
    if (get(this, 'onChange'))
      get(this, 'onChange')(event.target.value, event);
  }

  @action
  righticonClick(e: any) {
    if (get(this, 'rightIconClick'))
      get(this, 'rightIconClick')(e);
  }

  @action
  lefticonClick(e: any) {
    if (get(this, 'leftIconClick'))
      get(this, 'leftIconClick')(e);
  }

  updateInputWidth() {
    var doc: any = this.element.querySelector('.' + this.INPUT_ACTION);
    if (this.element != null && doc) {
      const { clientWidth } = doc;
      // small threshold to prevent infinite loops
      if (Math.abs(clientWidth - this.rightElementWidthChange) > 2) {
        this.set('rightElementWidth', Ember.String.htmlSafe('padding-right:' + clientWidth + 'px;'));
        this.set('rightElementWidthChange', clientWidth);
      }
    } else {
      if (this.rightElementWidthChange != this.DEFAULT_RIGHT_ELEMENT_WIDTH) {
        this.set('rightElementWidth', Ember.String.htmlSafe('padding-right:' + this.DEFAULT_RIGHT_ELEMENT_WIDTH + 'px;'));
        this.set('rightElementWidthChange', this.DEFAULT_RIGHT_ELEMENT_WIDTH);
      }
    }
  }
};
