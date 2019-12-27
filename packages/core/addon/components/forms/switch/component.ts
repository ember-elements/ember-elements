import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import { IControlProps } from '../controls';
import * as Classes from '../../../_private/common/classes';
import { Alignment } from '../../../_private/common/alignment';

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

class Switch extends Component<SwitchArgs> {
  @reads('props.alignIndicator')
  alignIndicator?: SwitchArgs['alignIndicator'];
  @reads('props.className') className?: SwitchArgs['className'];
  @reads('props.disabled') disabled?: SwitchArgs['disabled'];
  @reads('props.inline') inline?: SwitchArgs['inline'];
  @reads('props.innerLabel') innerLabel?: SwitchArgs['innerLabel'];
  @reads('props.innerLabelChecked')
  innerLabelChecked?: SwitchArgs['innerLabelChecked'];
  @reads('props.label') label?: SwitchArgs['label'];
  @reads('props.labelElement') labelElement?: SwitchArgs['labelElement'];
  @reads('props.large') large?: SwitchArgs['large'];

  CONTROL = Classes.CONTROL;
  CONTROL_INDICATOR = Classes.CONTROL_INDICATOR;
  CONTROL_INDICATOR_CHILD = Classes.CONTROL_INDICATOR_CHILD;
  SWITCH = Classes.SWITCH;
  SWITCH_INNER_TEXT = Classes.SWITCH_INNER_TEXT;

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

  get getInnerLabels() {
    let innerLabels;

    if (this.args.innerLabel != undefined) {
      innerLabels = this.args.innerLabel;
    } else if (this.innerLabel != undefined) {
      innerLabels = this.innerLabel;
    }

    if (this.args.innerLabelChecked != undefined) {
      innerLabels = this.args.innerLabelChecked;
    } else if (this.innerLabelChecked != undefined) {
      innerLabels = this.innerLabelChecked;
    }

    return innerLabels;
  }

  get getInnerLabel() {
    let innerLabel;

    if (this.args.innerLabel != undefined) {
      innerLabel = this.args.innerLabel;
    } else if (this.innerLabel != undefined) {
      innerLabel = this.innerLabel;
    }

    return innerLabel;
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

  @action
  handleChange(e: HTMLInputElement) {
    if (this.args.onChange) {
      //throw error on console
      assert(
        'onChange of ember-elements must be a function',
        typeof this.args.onChange === 'function'
      );

      // disabled radio doesn't have a action
      if (!this.disabled && this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }
}

export default setComponentTemplate(layout, Switch);
