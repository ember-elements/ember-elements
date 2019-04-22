import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { Alignment } from '../../-private/common/alignment';
import { classNames, tagName } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
@tagName('label')
@classNames(Classes.CONTROL, Classes.CHECKBOX)
export default class CheckBox extends Component {
  layout = layout;

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

  classNameBindings = [`disabled:${Classes.DISABLED}`, `inline:${Classes.INLINE}`, `large:${Classes.LARGE}`, 'aligntextStyle'];
  attributeBindings = ['style:style'];

  CONTROL_INDICATOR: string = Classes.CONTROL_INDICATOR;
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

