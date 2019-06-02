import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { Alignment } from '../../-private/common/alignment';
import { readOnly } from '@ember/object/computed';
import { computed, action } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class CheckBox extends Component {
  layout = layout;
  tagName = 'label';

  /** Whether this checkbox is initially indeterminate (uncontrolled mode). */
  defaultIndeterminate?: boolean;

  /**
   * Whether this checkbox is indeterminate, or "partially checked."
   * The checkbox will appear with a small dash instead of a tick to indicate that the value
   * is not exactly true or false.
  */
  indeterminate?: boolean;

  /** Whether to render the label and children on a single line. */
  inline?: boolean;

  /** Whether the control is checked. */
  checked?: boolean;

  /** Whether the control is initially checked (uncontrolled mode). */
  defaultChecked?: boolean;

  /** Whether the control is non-interactive. */
  disabled?: boolean;


  /** Text label for the control. */
  label?: string;

  /** Whether this control should use large styles. */
  large?: boolean;

  /** Check box id from user */
  checkBoxId?: string;

  /** Alignment of the indicator within container. */
  @readOnly('alignIndicator') alignText?: Alignment;

  @computed('alignText')
  get aligntextStyle() {
    return this.alignText ? Classes.alignmentClass(this.alignText) : '';
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  classNameBindings = [`CONTROL`, `CHECKBOX`, `disabled:${Classes.DISABLED}`, `inline:${Classes.INLINE}`, `large:${Classes.LARGE}`, 'aligntextStyle'];
  attributeBindings = ['inlineStyle:style'];

  CONTROL = Classes.CONTROL;
  CHECKBOX = Classes.CHECKBOX;
  CONTROL_INDICATOR = Classes.CONTROL_INDICATOR;

  onChange!: (event: any, checked: boolean | undefined) => void;

  didReceiveAttrs() {
    super.init();
    if (this.checked && (!this.defaultIndeterminate && !this.indeterminate))
      this.set('checked', true);
    else
      this.set('checked', false);

    if (this.defaultChecked && (!this.defaultIndeterminate && !this.indeterminate))
      this.set('checked', true);
  }

  didInsertElement() {
    if (this.defaultIndeterminate || this.indeterminate)
      this.indeterminateRender();
  }

  @action
  onChangeCheckBox(e: HTMLInputElement) {
    this.set('checked', !this.checked)
    if (this.get('onChange'))
      this.get('onChange')(e, this.checked);
  }

  indeterminateRender() {
    /** adds indeterminate to current element input div  */
    if (this.element) {
      var checkboxDoc: any = document.getElementById(this.elementId);
      if (checkboxDoc) {
        var getInput: any = checkboxDoc.querySelector('input');
        getInput.indeterminate = true;
      }
    }
  }
};

