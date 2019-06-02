import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { Alignment } from '../../-private/common/alignment';
import { readOnly } from '@ember/object/computed';
import { computed, action } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class Switch extends Component {
  layout = layout;
  tagName = 'label';

  /**Alignment of the indicator within container. */
  @readOnly('alignIndicator') alignText?: Alignment;


  /** Whether the control is checked. */
  checked?: boolean;

  /** Whether the control is initially checked (uncontrolled mode). */
  defaultChecked?: boolean;

  /** Whether the control is non-interactive. */
  disabled?: boolean;


  /** Whether to render the label and children on a single line. */
  inline?: boolean;

  /**Text to display inside the switch indicator when unchecked. */
  innerLabel?: string;

  /**Text to display inside the switch indicator when checked.
   *  If innerLabel is provided and this prop is omitted, then innerLabel will be used for both states. */
  innerLabelChecked?: string;

  /** Text label for the control. */
  label?: string;

  /**Html Element for check box instead of label. */
  labelElement?: string | HTMLElement;

  /**Whether this control should use large styles. */
  large?: boolean;

  /**Event handler invoked when input value is changed. It return two type of values 1. Action events and checked value*/
  onChange!: (event: any, checked: boolean | undefined) => void;

  /** Default alignment of content is at Left */
  @computed('alignText')
  get aligntextStyle() {
    return this.alignText ? Classes.alignmentClass(this.alignText) : Classes.ALIGN_LEFT;
  }

  /** Required class names are bind with ember @classNameBindings property.
   * TODO ember octane blueprint should used.
    */
  classNameBindings = [`CONTROL`, `SWITCH`, `disabled:${Classes.DISABLED}`, `inline:${Classes.INLINE}`, `large:${Classes.LARGE}`, 'aligntextStyle'];

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  /**External styles are rendered in @attributeBindings ember property */
  attributeBindings = [`inlineStyle:style`];

  CONTROL_INDICATOR: string = Classes.CONTROL_INDICATOR;
  CONTROL_INDICATOR_CHILD: string = Classes.CONTROL_INDICATOR_CHILD;
  SWITCH_INNER_TEXT: string = Classes.SWITCH_INNER_TEXT;
  CONTROL = Classes.CONTROL;
  SWITCH = Classes.SWITCH;


  didReceiveAttrs() {
    super.init();
    if (this.checked || this.defaultChecked)
      this.set('checked', true);
    else
      this.set('checked', false);
  }

  @action
  onChangeSwitch(e: HTMLInputElement) {
    this.set('checked', !this.checked)
    if (this.get('onChange'))
      this.get('onChange')(e, this.checked);
  }
};
