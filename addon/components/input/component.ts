import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { action, computed } from '@ember-decorators/object';
import { get, getProperties, set } from '@ember/object';
import { reads, readOnly, alias } from '@ember-decorators/object/computed';
import Ember from 'ember';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import * as Classes from "../../-private/common/classes";
import {Intent} from "../../-private/common/intent";
@layout(template)
@tagName('div')
@classNames(Classes.INPUT_GROUP)
export default class Input extends Component {
  onClick!: (value: string, event: any) => void;
  onkeyUp!: (value: string, event: any) => void;
  onkeyDown!: (value: string, event: any) => void;
  onDoubleClick!: (value: string, event: any) => void;
  onBlur!: (value: string, event: any) => void;
  rightIconClick!: (event: any) => void;
  leftIconClick!: (event: any) => void;
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);
  @readOnly('iconSize') IconSize!: number;
  @className(Classes.DISABLED)
  disabled: boolean = false;
  @readOnly('intent') Intents:Intent;
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
  @className(Classes.FILL)
  fill: boolean = false;
  INPUT_ACTION: string = (Classes.INPUT_ACTION);
  POPOVER_WRAPPER: string = (Classes.POPOVER_WRAPPER);
  POPOVER_TARGET: string = (Classes.POPOVER_TARGET);
  BUTTON: string = (Classes.BUTTON);
  MINIMAL: string = (Classes.MINIMAL);

  placeholder: string = (this.placeholder == undefined ? "Any text..." : this.placeholder);
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
  righticonClick(e: any) {
    if (get(this, 'rightIconClick'))
      get(this, 'rightIconClick')(e);
  }
  @action
  lefticonClick(e: any) {
    if (get(this, 'leftIconClick'))
      get(this, 'leftIconClick')(e);
  }
};
