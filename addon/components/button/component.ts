import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, attribute,layout, className} from '@ember-decorators/component';
import { readOnly, alias } from '@ember-decorators/object/computed';
import { get } from '@ember/object';
import * as Classes from "../../-private/common/classes";
@layout(template)
@tagName('button')
@classNames(Classes.BUTTON)
export default class Button extends Component {
  @attribute('style') style:string = Ember.String.htmlSafe(this.style);
  @alias(Classes.BUTTON_TEXT) BUTTON_TEXT:string;
  @readOnly('iconSize') IconSize: number;
  @className(Classes.ACTIVE)
  active:boolean = false;
  @className(Classes.DISABLED)
  disabled:boolean = false;
  @className(Classes.INTENT_PRIMARY)
  primary:boolean = false;
  @className(Classes.INTENT_SUCCESS)
  success:boolean = false;
  @className(Classes.INTENT_WARNING)
  warning:boolean = false;
  @className(Classes.INTENT_DANGER)
  danger:boolean = false;
  @className(Classes.MINIMAL)
  minimal:boolean = false;
  @className(Classes.LARGE)
  large:boolean = false;
  @className(Classes.SMALL)
  small:boolean = false;
  @className(Classes.FILL)
  fill:boolean = false;
  onClick!: (event: any) => void;
  click(event: any) {
    if (this.disabled)
      return;
    if (get(this, 'onClick'))
      get(this, 'onClick')(event);
  }
};