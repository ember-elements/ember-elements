import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import Ember from 'ember';
import { get, computed } from '@ember/object';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { readOnly } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
export default class Button extends Component {
  layout = layout;
  tagName = 'button';

  @readOnly('disabled') Disabled?: boolean;

  @readOnly('iconSize') IconSize?: number;

  @readOnly('large') Large?: boolean;

  @readOnly('intent') Intents?: Intent;

  @computed('Intents')
  get intentStyle() {
    return this.Intents ? Classes.intentClass(this.Intents) : Classes.intentClass('none');
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  attributeBindings = ['disabled:Disabled', `inlineStyle:style`, 'type:type'];
  classNameBindings = [`BUTTON`, `active:${Classes.ACTIVE}`, `isActive:${Classes.ACTIVE}`, `Disabled:${Classes.DISABLED}`, `intentStyle`, `minimal:${Classes.MINIMAL}`, `Large:${Classes.LARGE}`, `small:${Classes.SMALL}`, `fill:${Classes.FILL}`, `alignTextClass`];

  BUTTON_TEXT = Classes.BUTTON_TEXT;
  BUTTON = Classes.BUTTON;

  style?: any;
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
    if (this.Disabled)
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
        if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginLeftChange != this.DEFAULT_SMALL_MARGIN_LEFT && !this.Large && !this.icon) {
          this.set('marginLeft', Ember.String.htmlSafe(`margin-left:${this.DEFAULT_SMALL_MARGIN_LEFT}px`));
          this.set('marginLeftChange', this.DEFAULT_SMALL_MARGIN_LEFT);
        }
        else if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginLeftChange != this.DEFAULT_LARGE_MARGIN_LEFT && this.Large && !this.icon) {
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