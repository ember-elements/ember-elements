import Component from '@glimmer/component';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

import * as Classes from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common/props';

/**
 * ToDo object based radio rendering
 */

export interface IRadioGroupProps extends IProps {
  /**
   * Whether the group and _all_ its radios are disabled.
   * Individual radios can be disabled using their `disabled` prop.
   */
  disabled?: boolean;

  /**
   * Whether the radio buttons are to be displayed inline horizontally.
   */
  inline?: boolean;

  /** Optional label text to display above the radio buttons. */
  label?: string;

  /**
   * Name of the group, used to link radio buttons together in HTML.
   * If omitted, a unique name will be generated internally.
   */
  name?: string;

  /**
   * Callback invoked when the currently selected radio changes.
   * Use `event.currentTarget.value` to read the currently selected value.
   * This prop is required because this component only supports controlled usage.
   */
  onChange: (event: HTMLInputElement) => void;

  /** Value of the selected radio. The child with this value will be `:checked`. */
  selectedValue?: string | number;
}

interface RadioGroupArgs extends IRadioGroupProps {
  props: RadioGroupArgs;
}

export default class RadioGroup extends Component<RadioGroupArgs> {
  @reads('props.label') label?: RadioGroupArgs['label'];

  LABEL = Classes.LABEL;

  get getLabel() {
    let label;

    if (this.args.label != undefined) {
      label = this.args.label;
    } else if (this.label != undefined) {
      label = this.label;
    }

    return label;
  }
}
