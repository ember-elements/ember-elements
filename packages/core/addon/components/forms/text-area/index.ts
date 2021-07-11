import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../../_private/common/classes';

import type { IIntentProps, Intent, IProps } from '../../../_private/common';

export interface ITextAreaProps extends IIntentProps {
  /**
   * Whether the text area should take up the full width of its container.
   */
  fill?: boolean;

  /**
   * Whether the text area should appear with large styling.
   */
  large?: boolean;

  /**
   * Whether the text area should appear with small styling.
   */
  small?: boolean;

  /**
   * Whether the text area should automatically grow vertically to accommodate content.
   */
  growVertically?: boolean;

  value?: string;

  onChange?: (e: HTMLTextAreaElement) => void;
}

interface TextAreaArgs extends ITextAreaProps, IProps {
  props: TextAreaArgs;
}

export default class TextArea extends Component<TextAreaArgs> {
  INPUT = Classes.INPUT;

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

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getValue() {
    let value;

    if (this.args.value != undefined) {
      value = this.args.value;
    } else if (this.props.value != undefined) {
      value = this.props.value;
    }

    return value;
  }

  getGrowVertically() {
    let growVertically;

    if (this.args.growVertically != undefined) {
      growVertically = this.args.growVertically;
    } else if (this.props.growVertically != undefined) {
      growVertically = this.props.growVertically;
    }

    return growVertically;
  }

  get getGrowVertical() {
    return this.getGrowVertically();
  }

  @action
  handleChange(e: HTMLTextAreaElement) {
    if (this.args.onChange) {
      //throw error on console
      assert(
        'onChange of ember-elements must be a function',
        typeof this.args.onChange === 'function'
      );

      if (this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }

  @action
  scrollHeight(element: HTMLTextAreaElement, propsVal: Array<boolean>) {
    //growVertically => true
    if (propsVal[0]) element.style.height = `${element.scrollHeight}px`;
  }
}
