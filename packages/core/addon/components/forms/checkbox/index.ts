import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

import { Alignment } from '../../../_private/common/alignment';
import * as Classes from '../../../_private/common/classes';

import type { IControlProps } from '../controls';

export interface ICheckboxProps extends IControlProps {
  /** Whether this checkbox is initially indeterminate (uncontrolled mode). */
  defaultIndeterminate?: boolean;

  /**
   * Whether this checkbox is indeterminate, or "partially checked."
   * The checkbox will appear with a small dash instead of a tick to indicate that the value
   * is not exactly true or false.
   *
   * Note that this prop takes precedence over `checked`: if a checkbox is marked both
   * `checked` and `indeterminate` via props, it will appear as indeterminate in the DOM.
   */
  indeterminate?: boolean;
}

interface CheckboxArgs extends ICheckboxProps {
  props: CheckboxArgs;
}
export default class Checkbox extends Component<CheckboxArgs> {
  input!: HTMLInputElement;
  @reads('props.alignIndicator') alignIndicator?: CheckboxArgs['alignIndicator'];
  @reads('props.className') className?: CheckboxArgs['className'];
  @reads('props.disabled') disabled?: CheckboxArgs['disabled'];
  @reads('props.defaultIndeterminate') defaultIndeterminate?: CheckboxArgs['defaultIndeterminate'];
  @reads('props.inline') inline?: CheckboxArgs['inline'];
  @reads('props.indeterminate') indeterminate?: CheckboxArgs['indeterminate'];
  @reads('props.label') label?: CheckboxArgs['label'];
  @reads('props.labelElement') labelElement?: CheckboxArgs['labelElement'];
  @reads('props.large') large?: CheckboxArgs['large'];

  @tracked indeterminateValue = false;
  CHECKBOX = Classes.CHECKBOX;
  CONTROL = Classes.CONTROL;
  CONTROL_INDICATOR = Classes.CONTROL_INDICATOR;

  get getAlignIndicator() {
    let alignIndicator: Alignment = Alignment.LEFT;

    if (this.args.alignIndicator != undefined) {
      alignIndicator = this.args.alignIndicator;
    } else if (this.alignIndicator != undefined) {
      alignIndicator = this.alignIndicator;
    }

    return Classes.alignmentClass(alignIndicator);
  }

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getDisabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.disabled != undefined) {
      disabled = this.disabled;
    }

    return disabled ? Classes.DISABLED : '';
  }

  get getInline() {
    let inline;

    if (this.args.inline != undefined) {
      inline = this.args.inline;
    } else if (this.inline != undefined) {
      inline = this.inline;
    }

    return inline ? Classes.INLINE : '';
  }

  get getLarge() {
    let large;

    if (this.args.large != undefined) {
      large = this.args.large;
    } else if (this.large != undefined) {
      large = this.large;
    }

    return large ? Classes.LARGE : '';
  }

  get getLabel() {
    let label;

    if (this.args.label != undefined) {
      label = this.args.label;
    } else if (this.label != undefined) {
      label = this.label;
    }

    return label;
  }

  get getLabelElement() {
    let labelElement = '';

    if (this.args.labelElement != undefined) {
      labelElement = this.args.labelElement;
    } else if (this.labelElement != undefined) {
      labelElement = this.labelElement;
    }

    return labelElement;
  }

  get ICheckboxState() {
    let indeterminate;

    if (this.args.indeterminate != undefined) {
      indeterminate = this.args.indeterminate;
    } else if (this.indeterminate != undefined) {
      indeterminate = this.indeterminate;
    }

    if (this.args.defaultIndeterminate != undefined) {
      indeterminate = this.args.defaultIndeterminate;
    } else if (this.defaultIndeterminate != undefined) {
      indeterminate = this.defaultIndeterminate;
    }

    return indeterminate;
  }

  @action
  handleChange(e: HTMLInputElement) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const indeterminate = (e as any).target.indeterminate;

    // update state immediately only if uncontrolled
    if (this.ICheckboxState == null) {
      this.indeterminateValue = indeterminate;
    }

    if (this.args.onChange) {
      //throw error on console
      assert(
        'onChange of ember-elements must be a function',
        typeof this.args.onChange === 'function'
      );

      // disabled button doesn't have a action
      if (!this.disabled && this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }

  @action
  updateIndeterminate(ele: HTMLInputElement, propsValue: Array<boolean>) {
    // ele is input element
    // propsValue is ICheckboxState and indeterminateValue @tracked value
    if (ele != null) {
      ele.indeterminate = propsValue[0] || propsValue[1];
    }
  }
}
