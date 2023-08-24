import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../../_private/common/classes';

import type {
  IControlledProps,
  IIntentProps,
  Intent,
  IProps,
} from '../../../_private/common';
import type { IconName } from '@ember-elements/icons/addon';

const DEFAULT_RIGHT_ELEMENT_WIDTH = 10;

export interface IInputGroupProps extends IControlledProps, IIntentProps {
  /**
   * Whether the input is non-interactive.
   * Note that `rightElement` must be disabled separately; this prop will not affect it.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the component should take up the full width of its container.
   */
  fill?: boolean;

  leftIcon?: IconName;

  /** Whether this input should use large styles. */
  large?: boolean;

  /** Whether this input should use small styles. */
  small?: boolean;

  /** Placeholder text in the absence of any value. */
  placeholder?: string;

  /** Whether the input (and any buttons) should appear with rounded caps. */
  round?: boolean;

  /**
   * HTML `input` type attribute.
   * @default "text"
   */
  type?: string;
}

export interface IInputGroupState {
  rightElementWidth: number;
}
interface InputGroupArgs extends IInputGroupProps, IProps, IInputGroupState {
  props: InputGroupArgs;
}

export default class InputGroup extends Component<InputGroupArgs> {
  input!: HTMLInputElement;
  INPUT_GROUP = Classes.INPUT_GROUP;
  INPUT = Classes.INPUT;
  INPUT_ACTION = Classes.INPUT_ACTION;
  @tracked rightElementWidth = DEFAULT_RIGHT_ELEMENT_WIDTH;

  get props() {
    return this.args.props || {};
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

  get getFill() {
    let fill;

    if (this.args.fill != undefined) {
      fill = this.args.fill;
    } else if (this.props.fill != undefined) {
      fill = this.props.fill;
    }

    return fill ? Classes.FILL : '';
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

  get getSmall() {
    let small;

    if (this.args.small != undefined) {
      small = this.args.small;
    } else if (this.props.small != undefined) {
      small = this.props.small;
    }

    return small ? Classes.SMALL : '';
  }

  get getRound() {
    let round;

    if (this.args.round != undefined) {
      round = this.args.round;
    } else if (this.props.round != undefined) {
      round = this.props.round;
    }

    return round ? Classes.ROUND : '';
  }

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getLeftIcon() {
    let leftIcon;

    if (this.args.leftIcon != undefined) {
      leftIcon = this.args.leftIcon;
    } else if (this.props.leftIcon != undefined) {
      leftIcon = this.props.leftIcon;
    }

    return leftIcon;
  }

  @action
  updateWidth(element: HTMLDivElement) {
    const { clientWidth } = element;

    this.rightElementWidth = clientWidth;

    if (this.input) {
      this.input.style.paddingRight = `${this.rightElementWidth}px`;
    }
  }

  @action
  updatePadding(element: HTMLInputElement) {
    this.input = element;
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
