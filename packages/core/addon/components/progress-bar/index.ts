import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

import * as Classes from '../../_private/common/classes';
import { clamp } from '../../_private/common/utils';

import type { IIntentProps, Intent, IProps } from '../../_private/common';

export interface IProgressBarProps extends IProps, IIntentProps {
  /**
   * Whether the background should animate.
   * @default true
   */
  animate?: boolean;

  /**
   * Whether the background should be striped.
   * @default true
   */
  stripes?: boolean;

  /**
   * A value between 0 and 1 (inclusive) representing how far along the operation is.
   * Values below 0 or above 1 will be interpreted as 0 or 1, respectively.
   * Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.
   */
  value?: number;
}

interface ProgressBarArgs extends IProgressBarProps {
  props: IProgressBarProps;
}

export default class ProgressBar extends Component<ProgressBarArgs> {
  PROGRESS_BAR = Classes.PROGRESS_BAR;
  PROGRESS_METER = Classes.PROGRESS_METER;

  get props() {
    return this.args.props || {};
  }

  get getAnimate() {
    let animate = true;

    if (this.args.animate != undefined) {
      animate = this.args.animate;
    } else if (this.props.animate != undefined) {
      animate = this.props.animate;
    }

    return !animate ? Classes.PROGRESS_NO_ANIMATION : '';
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

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getStripes() {
    let stripes = true;

    if (this.args.stripes != undefined) {
      stripes = this.args.stripes;
    } else if (this.props.stripes != undefined) {
      stripes = this.props.stripes;
    }

    return !stripes ? Classes.PROGRESS_NO_STRIPES : '';
  }

  get getValue() {
    let value;

    if (this.args.value != undefined) {
      value = this.args.value;
    } else if (this.props.value != undefined) {
      value = this.props.value;
    }

    return value as number;
  }

  get getWidth() {
    let width;

    if (this.getValue == null) {
      width = null;
    } else {
      width = 100 * clamp(this.getValue, 0, 1) + '%';
    }

    return htmlSafe('width:' + width);
  }
}
