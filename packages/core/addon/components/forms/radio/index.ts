import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import { Alignment } from '../../../_private/common/alignment';
import * as Classes from '../../../_private/common/classes';

import type { IControlProps } from '../controls';

export type IRadioProps = IControlProps;

interface RadioArgs extends IRadioProps {
  props: RadioArgs;
}
export default class Radio extends Component<RadioArgs> {
  input!: HTMLInputElement;

  RADIO = Classes.RADIO;
  CONTROL = Classes.CONTROL;
  CONTROL_INDICATOR = Classes.CONTROL_INDICATOR;

  get props() {
    return this.args.props || {};
  }

  get getAlignIndicator() {
    let alignIndicator: Alignment = Alignment.LEFT;

    if (this.args.alignIndicator != undefined) {
      alignIndicator = this.args.alignIndicator;
    } else if (this.props.alignIndicator != undefined) {
      alignIndicator = this.props.alignIndicator;
    }

    return Classes.alignmentClass(alignIndicator);
  }

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      return (className = this.props.className);
    }

    return className;
  }

  get getDisabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.props.disabled != undefined) {
      disabled = this.props.disabled;
    }

    return disabled ? Classes.DISABLED : '';
  }

  get getInline() {
    let inline;

    if (this.args.inline != undefined) {
      inline = this.args.inline;
    } else if (this.props.inline != undefined) {
      inline = this.props.inline;
    }

    return inline ? Classes.INLINE : '';
  }

  get getLarge() {
    let large;

    if (this.args.large != undefined) {
      large = this.args.large;
    } else if (this.props.large != undefined) {
      large = this.props.large;
    }

    return large ? Classes.LARGE : '';
  }

  get getLabel() {
    let label;

    if (this.args.label != undefined) {
      label = this.args.label;
    } else if (this.props.label != undefined) {
      label = this.props.label;
    }

    return label;
  }

  get getLabelElement() {
    let labelElement = '';

    if (this.args.labelElement != undefined) {
      labelElement = this.args.labelElement;
    } else if (this.props.labelElement != undefined) {
      labelElement = this.props.labelElement;
    }

    return labelElement;
  }

  @action
  handleChange(e: HTMLInputElement) {
    if (this.args.onChange) {
      //throw error on console
      assert(
        'onChange of ember-elements must be a function',
        typeof this.args.onChange === 'function'
      );

      // disabled radio doesn't have a action
      if (!this.props.disabled && this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }
}
