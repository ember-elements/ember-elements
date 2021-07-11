import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import { Alignment } from '../../../_private/common/alignment';
import * as Classes from '../../../_private/common/classes';

import type { IControlProps } from '../controls';

export interface ISwitchProps extends IControlProps {
  /**
   * Text to display inside the switch indicator when checked.
   * If `innerLabel` is provided and this prop is omitted, then `innerLabel`
   * will be used for both states.
   * @default innerLabel
   */
  innerLabelChecked?: string;

  /**
   * Text to display inside the switch indicator when unchecked.
   */
  innerLabel?: string;
}

interface SwitchArgs extends ISwitchProps {
  props: SwitchArgs;
}

export default class Switch extends Component<SwitchArgs> {
  CONTROL = Classes.CONTROL;
  CONTROL_INDICATOR = Classes.CONTROL_INDICATOR;
  CONTROL_INDICATOR_CHILD = Classes.CONTROL_INDICATOR_CHILD;
  SWITCH = Classes.SWITCH;
  SWITCH_INNER_TEXT = Classes.SWITCH_INNER_TEXT;

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

  get getInnerLabels() {
    let innerLabels;

    if (this.args.innerLabel != undefined) {
      innerLabels = this.args.innerLabel;
    } else if (this.props.innerLabel != undefined) {
      innerLabels = this.props.innerLabel;
    }

    if (this.args.innerLabelChecked != undefined) {
      innerLabels = this.args.innerLabelChecked;
    } else if (this.props.innerLabelChecked != undefined) {
      innerLabels = this.props.innerLabelChecked;
    }

    return innerLabels;
  }

  get getInnerLabel() {
    let innerLabel;

    if (this.args.innerLabel != undefined) {
      innerLabel = this.args.innerLabel;
    } else if (this.props.innerLabel != undefined) {
      innerLabel = this.props.innerLabel;
    }

    return innerLabel;
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
