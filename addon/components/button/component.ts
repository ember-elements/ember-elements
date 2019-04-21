import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, layout, className } from '@ember-decorators/component';
import { readOnly } from '@ember-decorators/object/computed';
import { get } from '@ember/object';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { computed } from '@ember-decorators/object';

@layout(template)
@tagName('button')
@classNames(Classes.BUTTON)
export default class Button extends Component {
  @readOnly('iconSize') IconSize?: number;

  @className(Classes.ACTIVE)
  active: boolean = false;

  @className(Classes.DISABLED)
  disabled: boolean = false;

  @readOnly('intent') Intents?: Intent;
  danger: boolean = false;

  @className(Classes.MINIMAL)
  minimal: boolean = false;

  @className(Classes.LARGE)
  large: boolean = false;

  @className(Classes.SMALL)
  small: boolean = false;

  @className(Classes.FILL)
  fill: boolean = false;

  @className
  @computed('Intents')
  get intentStyle() {
    return this.Intents ? Classes.intentClass(this.Intents) : Classes.intentClass('none');
  }
  style?: any = Ember.String.htmlSafe(this.style);
  attributeBindings = ['disabled:disabled', 'style:style'];
  BUTTON_TEXT: string = Classes.BUTTON_TEXT;
  marginRight?: any;
  marginRightChange?: number = -1;
  marginLeft?: any;
  icon?: string;
  rightIcon?: string;
  marginLeftChange?: number = 0;
  DEFAULT_MARGIN_RIGHT: number = 0;
  DEFAULT_SMALL_MARGIN_LEFT: number = -7;
  DEFAULT_LARGE_MARGIN_LEFT: number = -10;
  onClick!: (event: any) => void;

  didRender() {
    this.updateMargin();
  }

  click(event: any) {
    if (this.disabled)
      return;
    if (get(this, 'onClick'))
      get(this, 'onClick')(event);
  }

  updateMargin() {
    if (this.element && (this.icon || this.rightIcon)) {
      var getCurrentComp: any = document.getElementById(this.elementId);
      var textSpanTag = getCurrentComp.querySelector('.' + this.BUTTON_TEXT);
      if (this.icon) {
        if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginRightChange != this.DEFAULT_MARGIN_RIGHT) {
          this.set('marginRight', Ember.String.htmlSafe(`margin-right:${this.DEFAULT_MARGIN_RIGHT}`));
          this.set('marginRightChange', this.DEFAULT_MARGIN_RIGHT);
        }
        else {
          if (textSpanTag.innerHTML.trim() != '') {
            this.set('marginRightChange', -1);
            this.set('marginRight', undefined);
          }
        }
      }
      if (this.rightIcon) {
        if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginLeftChange != this.DEFAULT_SMALL_MARGIN_LEFT && !this.large && !this.icon) {
          this.set('marginLeft', Ember.String.htmlSafe(`margin-left:${this.DEFAULT_SMALL_MARGIN_LEFT}px`));
          this.set('marginLeftChange', this.DEFAULT_SMALL_MARGIN_LEFT);
        }
        else if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginLeftChange != this.DEFAULT_LARGE_MARGIN_LEFT && this.large && !this.icon) {
          this.set('marginLeft', Ember.String.htmlSafe(`margin-left:${this.DEFAULT_LARGE_MARGIN_LEFT}px`));
          this.set('marginLeftChange', this.DEFAULT_LARGE_MARGIN_LEFT);
        } else {
          if (textSpanTag.innerHTML.trim() != '') {
            this.set('marginLeftChange', 0);
            this.set('marginLeft', undefined);
          }
        }
      }
    }
  }
};