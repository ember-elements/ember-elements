import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

// @ts-ignore
import { tracked } from '@glimmer/tracking';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

// @ts-ignore
import { IconName } from '@ember-elements/icons';

import * as Classes from '../../../_private/common/classes';
import { IProps, IControlledProps, IIntentProps, Intent } from '../../../_private/common';

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

class InputGroup extends Component<InputGroupArgs> {
  input!: HTMLInputElement;
  @reads('props.className') className?: InputGroupArgs['className'];
  @reads('props.disabled') disabled?: InputGroupArgs['disabled'];
  @reads('props.fill') fill?: InputGroupArgs['fill'];
  @reads('props.large') large?: InputGroupArgs['large'];
  @reads('props.small') small?: InputGroupArgs['small'];
  @reads('props.round') round?: InputGroupArgs['round'];
  @reads('props.leftIcon') leftIcon?: InputGroupArgs['leftIcon'];
  @reads('props.intent') intent?: Intent;

  INPUT_GROUP = Classes.INPUT_GROUP;
  INPUT = Classes.INPUT;
  INPUT_ACTION = Classes.INPUT_ACTION;
  @tracked rightElementWidth = DEFAULT_RIGHT_ELEMENT_WIDTH;

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

  get getFill() {
    let fill;

    if (this.args.fill != undefined) {
      fill = this.args.fill;
    } else if (this.fill != undefined) {
      fill = this.fill;
    }

    return fill ? Classes.FILL : '';
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

  get getSmall() {
    let small;

    if (this.args.small != undefined) {
      small = this.args.small;
    } else if (this.small != undefined) {
      small = this.small;
    }

    return small ? Classes.SMALL : '';
  }

  get getRound() {
    let round;

    if (this.args.round != undefined) {
      round = this.args.round;
    } else if (this.round != undefined) {
      round = this.round;
    }

    return round ? Classes.ROUND : '';
  }

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.intent != undefined) {
      intent = this.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getLeftIcon() {
    let leftIcon;

    if (this.args.leftIcon != undefined) {
      leftIcon = this.args.leftIcon;
    } else if (this.leftIcon != undefined) {
      leftIcon = this.leftIcon;
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
      if (!this.disabled && this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }
}

export default setComponentTemplate(layout, InputGroup);
