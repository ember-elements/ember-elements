import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { Alignment } from '../../-private/common/alignment';
import * as Keys from '../../-private/common/keys';
import { tagName, classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

@tagName('a')
@classNames(Classes.BUTTON)
export default class AnchorButton extends Component {
  layout = layout;

  active?: boolean;

  alignText?: Alignment;

  disabled?: boolean;

  intent?: Intent;

  minimal?: boolean;

  large?: boolean;

  small?: boolean;

  fill?: boolean;

  iconSize?: number;

  @computed('intent')
  get intentStyle() {
    return this.intent ? Classes.intentClass(this.intent) : Classes.intentClass('none');
  }

  @computed('alignText')
  get alignTextClass() {
    return Classes.alignmentClass(this.alignText as Alignment);
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  /** Set -1 for disabled tab other case 0 */
  tabIndex: number = 0;

  href: string | undefined = this.disabled ? undefined : this.href;

  isActive: boolean = false;

  icon?: string;

  rightIcon?: string;

  marginRight!: any;
  marginRightChange: number = -1;
  marginLeft!: any;
  marginLeftChange: number = 0;
  DEFAULT_MARGIN_RIGHT: number = 0;
  DEFAULT_SMALL_MARGIN_LEFT: number = -7;
  DEFAULT_LARGE_MARGIN_LEFT: number = -10;
  role: string = "button";

  BUTTON_TEXT: string = Classes.BUTTON_TEXT;

  onClick!: (event: any) => void;
  onKeyDown!: (event: any) => void;
  onKeyUp!: (event: any) => void;

  private currentKeyDown = null;

  classNameBindings = [`active:${Classes.ACTIVE}`, `isActive:${Classes.ACTIVE}`, `disabled:${Classes.DISABLED}`, `intentStyle`, `minimal:${Classes.MINIMAL}`, `large:${Classes.LARGE}`, `small:${Classes.SMALL}`, `fill:${Classes.FILL}`, `alignTextClass`];
  attributeBindings = ['disabled:disabled', `inlineStyle:style`, 'type:type', `role`, `href:href`, `tabIndex:tabIndex`, `target:target`];

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('tabIndex', this.disabled ? -1 : 0);
  }

  didRender() {
    this.updateMargin();
  }

  click(event: any) {
    if (this.disabled)
      return;
    if (get(this, 'onClick'))
      get(this, 'onClick')(event);
  }

  keyDown(e: any) {
    if (Keys.isKeyboardClick(e.which)) {
      e.preventDefault();
      if (e.which !== this.currentKeyDown) {
        this.set('isActive', true);
      }
    }

    this.currentKeyDown = e.which;

    if (get(this, 'onKeyDown'))
      get(this, 'onKeyDown')(e);

    if (get(this, 'onClick'))
      get(this, 'onClick')(event);

  }

  keyUp(e: any) {
    if (Keys.isKeyboardClick(e.which)) {
      this.set('isActive', false);
    }

    this.currentKeyDown = null;

    if (get(this, 'onKeyUp'))
      get(this, 'onKeyUp')(e);
  }

  private updateMargin() {
    if (this.element && (this.icon || this.rightIcon)) {
      var getCurrentComp: any = document.getElementById(this.elementId);
      var textSpanTag = getCurrentComp.querySelector('.' + this.BUTTON_TEXT);
      if (this.icon) {
        if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginRightChange != this.DEFAULT_MARGIN_RIGHT) {
          this.set('marginRight', htmlSafe(`margin-right:${this.DEFAULT_MARGIN_RIGHT}`));
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
          this.set('marginLeft', htmlSafe(`margin-left:${this.DEFAULT_SMALL_MARGIN_LEFT}px`));
          this.set('marginLeftChange', this.DEFAULT_SMALL_MARGIN_LEFT);
        }
        else if (textSpanTag && textSpanTag.innerHTML.trim() == '' && this.marginLeftChange != this.DEFAULT_LARGE_MARGIN_LEFT && this.large && !this.icon) {
          this.set('marginLeft', htmlSafe(`margin-left:${this.DEFAULT_LARGE_MARGIN_LEFT}px`));
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
  // normal class body definition here
};
