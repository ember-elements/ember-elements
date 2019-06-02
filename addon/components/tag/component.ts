import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../-private/common/classes';
import { get, action, computed } from '@ember/object';
import { Intent } from '../../-private/common/intent';
import Ember from 'ember';
import { readOnly } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default class Tag extends Component {
  layout = template;
  classNameBindings = [`TAG`, `active:${Classes.ACTIVE}`, `fill:${Classes.FILL}`, `large:${Classes.LARGE}`, `minimal:${Classes.MINIMAL}`, `interactive:${Classes.INTERACTIVE}`, `round:${Classes.ROUND}`, `disabled:${Classes.DISABLED}`, `intentStyle`];
  attributeBindings = [`inlineStyle:style`];

  @readOnly('bgColor') BgColor!: string;

  @readOnly('fgColor') FgColor!: string;

  @computed('BgColor')
  get bgcolorStyle() {
    return Ember.String.htmlSafe(`background:${this.BgColor};color:${this.FgColor};${this.style}`);
  }

  @readOnly('disabled') Disabled!: boolean;

  @readOnly('removable') Removable!: boolean;

  @readOnly('large') Large!: boolean;

  @readOnly('intent') Intent!: Intent;

  @computed('Intent')
  get intentStyle() {
    return this.Intent ? Classes.intentClass(this.Intent) : ``;
  }

  @computed('Large')
  get removeIconSize() {
    return this.Large == true ? 20 : 16;
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }


  TAG = Classes.TAG;
  TEXT_OVERFLOW_ELLIPSIS_Fill: string = Classes.TEXT_OVERFLOW_ELLIPSIS + ' ' + Classes.FILL;
  TAG_REMOVE: string = Classes.TAG_REMOVE;

  style?: any;
  value!: string;
  params?: any;

  onClick!: (event: MouseEvent) => void;
  onRemove!: (value: string, params: any, event: MouseEvent) => void;

  click(event: any) {
    if (this.Disabled)
      return;
    if (get(this, 'onClick'))
      get(this, 'onClick')(event);
  }

  @action
  OnRemoving(e: MouseEvent) {
    if (this.Disabled)
      return;
    if (get(this, 'onRemove'))
      get(this, 'onRemove')(this.get('value'), this.get('params'), e);
  }
  // normal class body definition here
};
