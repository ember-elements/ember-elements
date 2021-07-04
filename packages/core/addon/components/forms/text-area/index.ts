import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

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
  @reads('props.className') className?: TextAreaArgs['className'];
  @reads('props.fill') fill?: TextAreaArgs['fill'];
  @reads('props.large') large?: TextAreaArgs['large'];
  @reads('props.small') small?: TextAreaArgs['small'];
  @reads('props.intent') intent?: Intent;
  @reads('props.value') value?: TextAreaArgs['value'];
  @reads('props.growVertically') growVertically?: TextAreaArgs['growVertically'];

  INPUT = Classes.INPUT;
  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
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

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.intent != undefined) {
      intent = this.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getValue() {
    let value;

    if (this.args.value != undefined) {
      value = this.args.value;
    } else if (this.value != undefined) {
      value = this.value;
    }

    return value;
  }

  getGrowVertically() {
    let growVertically;

    if (this.args.growVertically != undefined) {
      growVertically = this.args.growVertically;
    } else if (this.growVertically != undefined) {
      growVertically = this.growVertically;
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
