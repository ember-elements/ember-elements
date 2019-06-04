import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { layout, classNames, className, attribute } from '@ember-decorators/component';
import * as Classes from '../../-private/common/classes';
import { readOnly } from '@ember-decorators/object/computed';
import { get } from '@ember/object';
import { computed, action } from '@ember-decorators/object';
import { Intent } from '../../-private/common/intent';
import Ember from 'ember';

@layout(template)
@classNames(Classes.TAG)
export default class Tag extends Component {
  @readOnly('bgColor') BgColor!: string;

  @readOnly('fgColor') FgColor!: string;
  style!: string;

  @attribute('style')

  @computed('BgColor')
  get bgcolorStyle() {
    return Ember.String.htmlSafe(`background:${this.BgColor};color:${this.FgColor};${this.style}`);
  }

  @readOnly('disabled') Disabled!: boolean;

  @readOnly('removable') Removable!: boolean;

  @readOnly('large') Large!: boolean;

  @readOnly('intent') Intent!: Intent;

  @className(Classes.ACTIVE)
  active: boolean = false;

  @className(Classes.FILL)
  fill: boolean = false;

  @className(Classes.LARGE)
  large: boolean = false;

  @className(Classes.MINIMAL)
  minimal: boolean = false;

  @className(Classes.INTERACTIVE)
  interactive: boolean = false;

  @className(Classes.ROUND)
  round: boolean = false;

  @className(Classes.DISABLED)
  disabled: boolean = false;

  @className
  @computed('Intent')
  get intentStyle() {
    return this.Intent ? Classes.intentClass(this.Intent) : ``;
  }

  @computed('Large')
  get removeIconSize() {
    return this.Large == true ? 20 : 16;
  }

  TEXT_OVERFLOW_ELLIPSIS_Fill: string = Classes.TEXT_OVERFLOW_ELLIPSIS + ' ' + Classes.FILL;
  TAG_REMOVE: string = Classes.TAG_REMOVE;
  onClick!: (event: MouseEvent) => void;
  onRemove!: (value: string, params: any, event: MouseEvent) => void;
  value!: string;
  params?: any;

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
  attributeBindings = [`data-tag-index`];
  // normal class body definition here
};
