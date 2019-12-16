import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import { IIntentProps, IProps, Intent } from '../../_private/common';
import * as Classes from '../../_private/common/classes';
import { clamp } from '../../_private/common/utils';

import { reads } from '@ember/object/computed';

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

class ProgressBar extends Component<ProgressBarArgs> {
  @reads('props.animate') animate?: IProgressBarProps['animate'];
  @reads('props.className') className?: IProgressBarProps['className'];
  @reads('props.intent') intent?: Intent;
  @reads('props.value') value?: IProgressBarProps['value'];
  @reads('props.stripes') stripes?: IProgressBarProps['stripes'];

  PROGRESS_BAR = Classes.PROGRESS_BAR;
  PROGRESS_METER = Classes.PROGRESS_METER;

  get getAnimate() {
    let animate = true;

    if (this.args.animate != undefined) {
      animate = this.args.animate;
    } else if (this.animate != undefined) {
      animate = this.animate;
    }
    return !animate ? Classes.PROGRESS_NO_ANIMATION : '';
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

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.intent != undefined) {
      intent = this.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getStripes() {
    let stripes = true;

    if (this.args.stripes != undefined) {
      stripes = this.args.stripes;
    } else if (this.stripes != undefined) {
      stripes = this.stripes;
    }

    return !stripes ? Classes.PROGRESS_NO_STRIPES : '';
  }

  get getValue() {
    let value;
    if (this.args.value != undefined) {
      value = this.args.value;
    } else if (this.value != undefined) {
      value = this.value;
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

export default setComponentTemplate(layout, ProgressBar);
