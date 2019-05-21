import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { classNames } from '@ember-decorators/component';
import { clamp } from '../../-private/common/utils';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember-decorators/object';

@classNames(Classes.PROGRESS_BAR)
export default class ProgressBar extends Component {
  layout = layout;

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

  /** Visual intent color to apply to element. */
  intent?: Intent;

  @computed('intent')
  get intentStyle() {
    return Classes.intentClass(this.intent);
  }

  /* don't set width if value is null (rely on default CSS value) */
  width!: string;

  didReceiveAttrs() {
    this._super(...arguments);

    // manual width to progress bar
    const width = this.get('value') == null ? null : 100 * clamp(this.value as number, 0, 1) + "%"
    this.set('width', htmlSafe(`width:${width}`));

    // set theses values based on props if not assigned a default value then it consider false value(to maintain state value ) to animate or stripes
    this.set('animate', this.animate == false ? true : false);
    this.set('stripes', this.stripes == false ? true : false);
  }

  PROGRESS_METER = Classes.PROGRESS_METER;

  classNameBindings = [`intentStyle`, `animate:${Classes.PROGRESS_NO_ANIMATION}`, `stripes:${Classes.PROGRESS_NO_STRIPES}`];
};
