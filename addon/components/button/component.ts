import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, attribute,layout, className} from '@ember-decorators/component';
import { readOnly, alias } from '@ember-decorators/object/computed';
import { get } from '@ember/object';
import * as Classes from "../../-private/common/classes";
import {Intent} from "../../-private/common/intent";
import { computed } from '@ember-decorators/object';

@layout(template)
@tagName('button')
@classNames(Classes.BUTTON)
export default class Button extends Component {
  @attribute('style') style:string = Ember.String.htmlSafe(this.style);
  @alias(Classes.BUTTON_TEXT) BUTTON_TEXT:string;
  @readOnly('iconSize') IconSize:number;
  @className(Classes.ACTIVE)
  active:boolean = false;
  @className(Classes.DISABLED)
  disabled:boolean = false;
  @readOnly('intent') Intents:Intent;
  danger:boolean = false;
  @className(Classes.MINIMAL)
  minimal:boolean = false;
  @className(Classes.LARGE)
  large:boolean = false;
  @className(Classes.SMALL)
  small:boolean = false;
  @className(Classes.FILL)
  fill:boolean = false;
  @className
  @computed('Intents')
  get intentStyle() {
    return this.Intents ? Classes.intentClass(this.Intents) : Classes.intentClass('none');
  }
  onClick!: (event: any) => void;
  click(event: any) {
    if (this.disabled)
      return;
    if (get(this, 'onClick'))
      get(this, 'onClick')(event);
  }
};