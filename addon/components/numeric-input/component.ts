import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { tagName } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';

import { Position } from '../../-private/common/position';
import { NUMERIC_INPUT, LARGE, FIXED } from '../../-private/common/classes';
import { isKeyboardClick, ARROW_UP, ARROW_DOWN } from '../../-private/common/keys';
import { countDecimalPlaces } from '../../-private/common/utils';
import * as Errors from "../../-private/common/errors";
import { isValueNumeric, toMaxPrecision, clampValue, getValueOrEmptyValue, isFloatingPointNumericCharacter, isValidNumericKeyboardEvent } from './numericInputUtils'

@tagName('span')
export default class NumericInput extends Component {
  layout = layout;
  VALUE_EMPTY = "";
  VALUE_ZERO = "0";
  CONTINUOUS_CHANGE_DELAY = 300;
  CONTINUOUS_CHANGE_INTERVAL = 100;

  /**
    * Whether to allow only floating-point number characters in the field,
    * mimicking the native `input[type="number"]`.
    * @default true
    */
  allowNumericCharactersOnly: boolean = true;

  /**
   * The position of the buttons with respect to the input field.
   * @default Position.RIGHT
   */
  buttonPosition: typeof Position.LEFT | typeof Position.RIGHT | "none" = Position.RIGHT;

  /**
   * Whether the value should be clamped to `[min, max]` on blur.
   * The value will be clamped to each bound only if the bound is defined.
   * Note that native `input[type="number"]` controls do *NOT* clamp on blur.
   * @default false
   */
  clampValueOnBlur: boolean = false;

  /**
   * Whether the input is non-interactive.
   * @default false
   */
  disabled?: boolean;

  /** Whether the numeric input should take up the full width of its container. */
  fill?: boolean;

  /**
   * If set to `true`, the input will display with larger styling.
   * This is equivalent to setting `Classes.LARGE` via className on the
   * parent control group and on the child input group.
   * @default false
   */
  large: boolean = false;

  /**
   * Name of a Blueprint UI icon (or an icon element) to render on the left side of input.
   */
  leftIcon?: string;

  /**
   * The increment between successive values when <kbd>shift</kbd> is held.
   * Pass explicit `null` value to disable this interaction.
   * @default 10
   */
  majorStepSize: number | null = 10;

  /** The maximum value of the input. */
  max?: number;

  /** The minimum value of the input. */
  min?: number;

  /**
   * The increment between successive values when <kbd>alt</kbd> is held.
   * Pass explicit `null` value to disable this interaction.
   * @default 0.1
   */
  minorStepSize: number | null = 0.1;

  /** The placeholder text in the absence of any value. */
  placeholder?: string;

  /**readOnly */
  readOnly?: boolean;

  /**
   * Whether the entire text field should be selected on focus.
   * @default false
   */
  selectAllOnFocus: boolean = false;

  /**
   * Whether the entire text field should be selected on increment.
   * @default false
   */
  selectAllOnIncrement: boolean = false;

  /**
   * The increment between successive values when no modifier keys are held.
   * @default 1
   */
  stepSize: number = 1;

  /** The value to display in the input field. */
  value?: number | string = getValueOrEmptyValue(this.value);

  /** The callback invoked when the value changes due to a button click. */
  onButtonClick!: (valueAsNumber: number, valueAsString: string) => void;

  /** The callback invoked when the value changes due to typing, arrow keys, or button clicks. */
  onValueChange!: (valueAsNumber: number, valueAsString: string) => void;

  buttonPositionLeft = Position.LEFT;
  buttonPositionRight = Position.RIGHT;
  FIXED = FIXED;
  NUMERIC_INPUT = NUMERIC_INPUT;
  LARGE = LARGE;

  // updating these flags need not trigger re-renders, so don't include them in this.state.
  private globTimeout!: any;
  private didPasteEventJustOccur = false;
  private delta = 0;
  private intervalId: number | undefined = undefined;

  // INumericInputState
  shouldSelectAfterUpdate: boolean = false;
  stepMaxPrecision: number = this.getStepMaxPrecision();

  didReceiveAttrs() {
    super.init();
    const value = getValueOrEmptyValue(this.get('value'));

    const didMinChange = this.get('min') != undefined ? true : false;
    const didMaxChange = this.get('max') != undefined ? true : false;
    const didBoundsChange = didMinChange || didMaxChange;

    const sanitizedValue =
      value !== this.VALUE_EMPTY
        ? this.getSanitizedValue(value, /* delta */ 0, this.get('min'), this.get('max'))
        : this.VALUE_EMPTY;

    const stepMaxPrecision = this.getStepMaxPrecision();

    // if a new min and max were provided that cause the existing value to fall
    // outside of the new bounds, then clamp the value to the new valid range.
    if (didBoundsChange && sanitizedValue !== this.get('value')) {
      this.set('stepMaxPrecision', stepMaxPrecision);
      this.set('value', sanitizedValue);
    } else {
      this.set('stepMaxPrecision', stepMaxPrecision);
      this.set('value', value);
    }
  }
  didUpdate() {
    if (this.shouldSelectAfterUpdate) {
      let numericCompDoc: any = document.getElementById(this.elementId);
      let inputElement = numericCompDoc.querySelector('input');
      inputElement.setSelectionRange(0, (this.value as string).length);
    }
  }

  @action
  incrementButtonHandlers(e: any) {
    if (e.type == EventType.MOUSEDOWN) {
      this.handleButtonClick(e, IncrementDirection.UP);
      this.startContinuousChange();
    }
    else {
      if (isKeyboardClick(e.keyCode)) {
        this.handleButtonClick(e, IncrementDirection.UP);
      }
    }
  }

  @action
  decrementButtonHandlers(e: any) {
    if (e.type == EventType.MOUSEDOWN) {
      this.handleButtonClick(e, IncrementDirection.DOWN);
      this.startContinuousChange();
    }
    else {
      if (isKeyboardClick(e.keyCode)) {
        this.handleButtonClick(e, IncrementDirection.DOWN);
      }
    }
  }

  @action
  handleInputFocus() {
    this.set('shouldSelectAfterUpdate', this.selectAllOnFocus);
    if (this.shouldSelectAfterUpdate) {
      let numericCompDoc: any = document.getElementById(this.elementId);
      let inputElement = numericCompDoc.querySelector('input');
      inputElement.setSelectionRange(0, (this.value as string).length);
    }
  }

  @action
  handleInputBlur(e: any) {
    // always disable this flag on blur so it's ready for next time.
    this.set('shouldSelectAfterUpdate', false);
    if (this.clampValueOnBlur) {
      const { value } = e.target as HTMLInputElement;
      const sanitizedValue = this.getSanitizedValue(value);
      this.set('value', sanitizedValue);
      if (value !== sanitizedValue) {

        if (this.get('onValueChange'))
          this.get('onValueChange')(+(this.value as string), this.value as string)
      }
    }
  }

  @action
  handleInputChange(e: any) {

    const { value } = e.target as HTMLInputElement;
    let nextValue = value;

    if (this.allowNumericCharactersOnly && this.didPasteEventJustOccur) {

      const valueChars = value.split("");
      const sanitizedValueChars = valueChars.filter(isFloatingPointNumericCharacter);
      const sanitizedValue = sanitizedValueChars.join("");
      nextValue = sanitizedValue;
      this.didPasteEventJustOccur = false;


    }
    this.set('shouldSelectAfterUpdate', false);
    this.set('value', nextValue);

    if (this.get('onValueChange'))
      this.get('onValueChange')(+(this.value as string), this.value as string)
  }

  @action
  handleInputKeyDown(e: KeyboardEvent) {
    if (this.disabled || this.readOnly) {
      return;
    }

    const { keyCode } = e;

    let direction!: IncrementDirection;

    if (keyCode === ARROW_UP) {
      direction = IncrementDirection.UP;
    } else if (keyCode === ARROW_DOWN) {
      direction = IncrementDirection.DOWN;
    }

    if (direction) {
      // when the input field has focus, some key combinations will modify
      // the field's selection range. we'll actually want to select all
      // text in the field after we modify the value on the following
      // lines. preventing the default selection behavior lets us do that
      // without interference.
      e.preventDefault();

      const delta = this.updateDelta(direction, e);
      this.incrementValue(delta);
    }
  }

  @action
  handleInputKeyPress(e: KeyboardEvent) {
    // we prohibit keystrokes in onKeyPress instead of onKeyDown, because
    // e.key is not trustworthy in onKeyDown in all browsers.
    if (this.allowNumericCharactersOnly && !isValidNumericKeyboardEvent(e)) {
      e.preventDefault();
    }

  }

  @action
  handleInputPaste() {
    this.didPasteEventJustOccur = true;
  }

  // Callbacks - Buttons
  // ===================

  private handleButtonClick = (e: MouseEvent | KeyboardEvent, direction: IncrementDirection) => {
    const delta = this.updateDelta(direction, e);
    const nextValue = this.incrementValue(delta);

    if (this.get('onButtonClick'))
      this.get('onButtonClick')(+(nextValue as string), nextValue as string)
  };


  private startContinuousChange() {
    // The button's onMouseUp event handler doesn't fire if the user
    // releases outside of the button, so we need to watch all the way
    // from the top.
    document.addEventListener("mouseup", this.stopContinuousChange);

    // Initial delay is slightly longer to prevent the user from
    // accidentally triggering the continuous increment/decrement.
    this.globTimeout = setTimeout(() => {
      this.set('intervalId' as any, window.setInterval(this.handleContinuousChange, this.CONTINUOUS_CHANGE_INTERVAL));
    }, this.CONTINUOUS_CHANGE_DELAY);
  }

  private stopContinuousChange = () => {
    this.delta = 0;
    clearTimeout(this.globTimeout);

    window.clearInterval(this.intervalId);
    document.removeEventListener("mouseup", this.stopContinuousChange);
  };

  private handleContinuousChange = () => {
    const nextValue = this.incrementValue(this.delta);
    if (this.get('onButtonClick'))
      this.get('onButtonClick')(+(nextValue as string), nextValue as string)

  };

  // Value Helpers
  // =============

  private incrementValue(delta: number) {
    // pretend we're incrementing from 0 if currValue is empty
    const currValue = this.value || this.VALUE_ZERO;
    const nextValue = this.getSanitizedValue(currValue as string, delta);
    this.set('shouldSelectAfterUpdate', this.selectAllOnIncrement);
    this.set('value', nextValue);

    if (this.get('onValueChange'))
      this.get('onValueChange')(+(nextValue as string), nextValue as string)

    return nextValue;
  }


  private getIncrementDelta(direction: IncrementDirection, isShiftKeyPressed: boolean, isAltKeyPressed: boolean) {
    const { majorStepSize, minorStepSize, stepSize } = this;

    if (isShiftKeyPressed && majorStepSize != null) {
      return direction * majorStepSize;
    } else if (isAltKeyPressed && minorStepSize != null) {
      return direction * minorStepSize;
    } else {
      return direction * stepSize;
    }
  }

  private getSanitizedValue(value: string, delta = 0, min = this.min, max = this.max) {
    if (!isValueNumeric(value)) {
      return this.VALUE_EMPTY;
    }
    const nextValue = toMaxPrecision(parseFloat(value) + delta, this.stepMaxPrecision as number);
    return clampValue(nextValue, min, max).toString();
  }

  private getStepMaxPrecision() {
    if (this.minorStepSize != null) {
      return countDecimalPlaces(this.minorStepSize);
    } else {
      return countDecimalPlaces(this.stepSize);
    }
  }

  private updateDelta(direction: IncrementDirection, e: MouseEvent | KeyboardEvent) {
    this.delta = this.getIncrementDelta(direction, e.shiftKey, e.altKey);
    return this.delta;
  }

  // Error handling
  protected validateProps() {
    const { majorStepSize, max, min, minorStepSize, stepSize } = this;
    if (min != null && max != null && min > max) {
      throw new Error(Errors.NUMERIC_INPUT_MIN_MAX);
    }
    if (stepSize == null) {
      throw new Error(Errors.NUMERIC_INPUT_STEP_SIZE_NULL);
    }
    if (stepSize <= 0) {
      throw new Error(Errors.NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE);
    }
    if (minorStepSize && minorStepSize <= 0) {
      throw new Error(Errors.NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE);
    }
    if (majorStepSize && majorStepSize <= 0) {
      throw new Error(Errors.NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE);
    }
    if (minorStepSize && minorStepSize > stepSize) {
      throw new Error(Errors.NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND);
    }
    if (majorStepSize && majorStepSize < stepSize) {
      throw new Error(Errors.NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND);
    }
  }

};

enum IncrementDirection {
  DOWN = -1,
  UP = +1,
}

export const EventType = {
  MOUSEDOWN: 'mousedown' as 'mousedown',
  KEYDOWN: 'keydown' as 'keydown'
}