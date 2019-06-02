import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../../-private/common/classes';
import { Alignment } from '../../../-private/common/alignment';
import { readOnly } from '@ember/object/computed';
import { computed, action } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class RadioGroupRadio extends Component {
  layout = layout;
  tagName = 'label';
  attributeBindings = [`inlineStyle:style`];

  /**
    * Alignment of the indicator within container.
    * @default Alignment.LEFT
    */
  /** Alignment of the indicator within container. */
  @readOnly('alignIndicator') alignText?: Alignment;

  /** Whether the control is checked. */
  checked?: boolean;

  /** Whether the control is initially checked (uncontrolled mode). */
  defaultChecked?: boolean;

  /** Whether the control is non-interactive. */
  disabled?: boolean;

  /** Whether the control should appear as an inline element. */
  inline?: boolean;

  /**
   * Text label for the control.
   *
   * Use `children` or `labelElement` to supply HtmlElement content. This prop actually supports HtmlElement elements,
   * but TypeScript will throw an error because `HTMLAttributes` only allows strings.
   */
  label?: string;

  /**
   * HtmlElement Element label for the control.
   *
   * This prop is a workaround for TypeScript consumers as the type definition for `label` only
   * accepts strings. JavaScript consumers can provide a HtmlElement element directly to `label`.
   */

  labelElement?: HTMLElement | string;

  /** Whether this control should use large styles. */
  large?: boolean;

  /** Event handler invoked when input value is changed. */
  onChange!: (event: any) => void;

  CONTROL_INDICATOR: string = Classes.CONTROL_INDICATOR;
  CONTROL = Classes.CONTROL;
  RADIO = Classes.RADIO;

  @computed('alignText')
  get aligntextStyle() {
    return this.alignText ? Classes.alignmentClass(this.alignText) : Classes.ALIGN_LEFT;
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  didReceiveAttrs() {
    super.init();
    if (this.defaultChecked)
      this.set('checked', true);
  }

  style?: any;
  name?: string;

  classNameBindings = [`CONTROL`, `RADIO`, `disabled:${Classes.DISABLED}`, `inline:${Classes.INLINE}`, `large:${Classes.LARGE}`, 'aligntextStyle'];

  @action
  onChangeRadio(e: HTMLInputElement) {
    if (this.get('onChange'))
      this.get('onChange')(e);
  }
};

