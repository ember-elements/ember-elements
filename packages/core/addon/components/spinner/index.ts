import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

import { SPINNER_WARN_CLASSES_SIZE } from '../../_private/common/_errors';
import * as Classes from '../../_private/common/classes';
import { clamp } from '../../_private/common/utils';

import type { IIntentProps, Intent, IProps } from '../../_private/common';

export interface ISpinnerProps extends IProps, IIntentProps {
  /**
   * Width and height of the spinner in pixels. The size cannot be less than
   * 10px.
   *
   * Constants are available for common sizes:
   * - `Spinner.SIZE_SMALL = 20px`
   * - `Spinner.SIZE_STANDARD = 50px`
   * - `Spinner.SIZE_LARGE = 100px`
   *
   * @default Spinner.SIZE_STANDARD = 50
   */
  size?: number;

  /**
   * A value between 0 and 1 (inclusive) representing how far along the operation is.
   * Values below 0 or above 1 will be interpreted as 0 or 1 respectively.
   * Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely.
   */
  value?: number;
}

interface SpinnerArgs extends ISpinnerProps {
  props: ISpinnerProps;
}

// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
const R = 45;
const SPINNER_TRACK = `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,
${R * 2} a ${R},${R} 0 1 1 0,-${R * 2}`;

// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
const PATH_LENGTH = 280;

const MIN_SIZE = 10;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;

export default class Spinner extends Component<SpinnerArgs> {
  public static readonly SIZE_SMALL = 20;
  public static readonly SIZE_STANDARD = 50;
  public static readonly SIZE_LARGE = 100;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment

	@reads('props.className') className?: SpinnerArgs['className']; // eslint-disable-line
	@reads('props.value') value?: SpinnerArgs['value'];// eslint-disable-line
	@reads('props.size') size?: SpinnerArgs['size'];// eslint-disable-line
	@reads('props.intent') intent?: Intent;// eslint-disable-line

  @tracked strokeWidth = '';

  SPINNER = Classes.SPINNER;
  SPINNER_TRACKClass = Classes.SPINNER_TRACK;
  SPINNER_ANIMATION = Classes.SPINNER_ANIMATION;
  SPINNER_HEAD = Classes.SPINNER_HEAD;

  SPINNER_TRACK = SPINNER_TRACK;
  PATH_LENGTH = PATH_LENGTH;

  strokeDasharray = `${PATH_LENGTH} ${PATH_LENGTH}`;

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

  get getStrokeOffset() {
    let value;

    if (this.args.value != undefined) {
      value = this.args.value;
    } else if (this.value != undefined) {
      value = this.value;
    }

    return PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : clamp(value, 0, 1));
  }
  get getNoSpin() {
    let value;

    if (this.args.value != undefined) {
      value = this.args.value;
    } else if (this.value != undefined) {
      value = this.value;
    }

    return value != null ? Classes.SPINNER_NO_SPIN : '';
  }
  sizeProps() {
    let size;

    if (this.args.size != undefined) {
      size = this.args.size;
    } else if (this.size != undefined) {
      size = this.size;
    }

    return size;
  }

  get viewBox() {
    // keep spinner track width consistent at all sizes (down to about 10px).
    const size = this.getSizeValue() as number;
    let strokeWidth = Math.min(MIN_STROKE_WIDTH, (STROKE_WIDTH * Spinner.SIZE_LARGE) / size);

		this.strokeWidth = strokeWidth.toFixed(2); // eslint-disable-line

    return this.getViewBox(strokeWidth);
  }

  /**
   * Resolve size to a pixel value.
   * Size can be set by className, props, default, or minimum constant.
   */
  private getSizeValue() {
    let className = '';

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    const size = this.sizeProps();

    if (
      size != undefined &&
      (className.indexOf(Classes.SMALL) >= 0 || className.indexOf(Classes.LARGE) >= 0)
    ) {
      console.warn(SPINNER_WARN_CLASSES_SIZE);
    }

    if (size == undefined) {
      // allow Classes constants to determine default size.
      if (className.indexOf(Classes.SMALL) >= 0) {
        return Spinner.SIZE_SMALL;
      } else if (className.indexOf(Classes.LARGE) >= 0) {
        return Spinner.SIZE_LARGE;
      }

      return Spinner.SIZE_STANDARD;
    }

    return Math.max(MIN_SIZE, size);
  }

  get getSvgSize() {
    return this.getSizeValue();
  }

  /** Compute viewbox such that stroked track sits exactly at edge of image frame. */
  private getViewBox(strokeWidth: number) {
    const radius = R + strokeWidth / 2;
    const viewBoxX = (50 - radius).toFixed(2);
    const viewBoxWidth = (radius * 2).toFixed(2);

    return `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
  }
}
