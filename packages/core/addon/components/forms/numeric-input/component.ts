import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';

// @ts-ignore
import { tracked } from '@glimmer/tracking';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import NILayout from './template';

// @ts-ignore
import { IconName } from '@ember-elements/icons'; // import icons for TagInput

import * as numericIClasses from '../../../_private/common/classes';
import { IProps, IIntentProps, Intent, Position } from '../../../_private/common';
import * as Keys from '../../../_private/common/keys';
import * as Utils from '../../../_private/common/utils';
import * as Errors from '../../../_private/common/errors';

import {
  clampValue,
  getValueOrEmptyValue,
  isFloatingPointNumericCharacter,
  isValidNumericKeyboardEvent,
  isValueNumeric,
  toMaxPrecision,
} from './numericInputUtils';

interface INumericInputProps extends IIntentProps, IProps {
  /**
   * Whether to allow only floating-point number characters in the field,
   * mimicking the native `input[type="number"]`.
   * @default true
   */
  allowNumericCharactersOnly?: boolean;

  /**
   * The position of the buttons with respect to the input field.
   * @default Position.RIGHT
   */
  buttonPosition?: typeof Position.LEFT | typeof Position.RIGHT | 'none';

  /**
   * Whether the value should be clamped to `[min, max]` on blur.
   * The value will be clamped to each bound only if the bound is defined.
   * Note that native `input[type="number"]` controls do *NOT* clamp on blur.
   * @default false
   */
  clampValueOnBlur?: boolean;

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
  large?: boolean;

  /**
   * Name of a Blueprint UI icon (or an icon element) to render on the left side of input.
   */
  leftIcon?: IconName;

  /**
   * The increment between successive values when <kbd>shift</kbd> is held.
   * Pass explicit `null` value to disable this interaction.
   * @default 10
   */
  majorStepSize?: number | null;

  /** The maximum value of the input. */
  max?: number;

  /** The minimum value of the input. */
  min?: number;

  /**
   * The increment between successive values when <kbd>alt</kbd> is held.
   * Pass explicit `null` value to disable this interaction.
   * @default 0.1
   */
  minorStepSize?: number | null;

  /** The placeholder text in the absence of any value. */
  placeholder?: string;

  /**
   * Whether the entire text field should be selected on focus.
   * @default false
   */
  selectAllOnFocus?: boolean;

  /**
   * Whether the entire text field should be selected on increment.
   * @default false
   */
  selectAllOnIncrement?: boolean;

  /**
   * The increment between successive values when no modifier keys are held.
   * @default 1
   */
  stepSize?: number;

  /** The value to display in the input field. */
  value?: number | string;

  /** The callback invoked when the value changes due to a button click. */
  onButtonClick?(valueAsNumber: number, valueAsString: string): void;

  /** The callback invoked when the value changes due to typing, arrow keys, or button clicks. */
  onValueChange?(valueAsNumber: number, valueAsString: string): void;

  onPaste?(e: ClipboardEvent): void;

  onKeyDown?(e: KeyboardEvent): void;

  onFocus?(e: FocusEvent): void;

  onKeyPress?(e: KeyboardEvent): void;
}

export interface INumericInputState {
  prevMinProp?: number;
  prevMaxProp?: number;
  prevValueProp?: number | string;
  shouldSelectAfterUpdate: boolean;
  stepMaxPrecision: number;
  value: string;
}

interface NumericInputArgs extends INumericInputProps {
  props: NumericInputArgs;
}

enum IncrementDirection {
  DOWN = -1,
  UP = +1,
}

class NumericInput extends Component<NumericInputArgs> {
  props = this.args.props || {};

  public static VALUE_EMPTY = '';
  public static VALUE_ZERO = '0';

  private static CONTINUOUS_CHANGE_DELAY = 300;
  private static CONTINUOUS_CHANGE_INTERVAL = 100;

  inputElement!: HTMLInputElement;

  @reads('props.className') className?: NumericInputArgs['className'];
  @reads('props.large') large?: NumericInputArgs['large'];
  @reads('props.fill') fill?: NumericInputArgs['fill'];
  @reads('props.buttonPosition')
  buttonPosition?: NumericInputArgs['buttonPosition'];
  @reads('props.intent') intent?: NumericInputArgs['intent'];
  @reads('props.disabled') disabled?: NumericInputArgs['disabled'];
  @reads('props.majorStepSize')
  majorStepSize?: NumericInputArgs['majorStepSize'];
  @reads('props.minorStepSize')
  minorStepSize?: NumericInputArgs['minorStepSize'];
  @reads('props.stepSize') stepSize?: NumericInputArgs['stepSize'];
  @reads('props.selectAllOnIncrement')
  selectAllOnIncrement?: NumericInputArgs['selectAllOnIncrement'];
  @reads('props.min') min?: NumericInputArgs['min'];
  @reads('props.max') max?: NumericInputArgs['max'];
  @reads('props.leftIcon') leftIcon?: NumericInputArgs['leftIcon'];
  @reads('props.clampValueOnBlur')
  clampValueOnBlur?: NumericInputArgs['clampValueOnBlur'];
  @reads('props.allowNumericCharactersOnly')
  allowNumericCharactersOnly?: NumericInputArgs['allowNumericCharactersOnly'];

  @tracked delta = 0;
  @tracked shouldSelectAfterUpdate = false;
  @tracked value = getValueOrEmptyValue(this.args.value);
  @tracked didValueChange = getValueOrEmptyValue(this.args.value);
  @tracked stepMaxPrecision = NumericInput.getStepMaxPrecision(this.props, this.args);
  // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
  @tracked timeoutIds: number[] = [];
  @tracked intervalId: number | null = null;
  @tracked didPasteEventJustOccur = false;
  //classes goes here
  NUMERIC_INPUT = numericIClasses.NUMERIC_INPUT;
  FIXED = numericIClasses.FIXED;

  PositionLeft = 'left';
  PositionRight = 'right';

  get getNumericIClassName() {
    let numericIClassName;
    if (this.args.className != undefined) {
      numericIClassName = this.args.className;
    } else if (this.className != undefined) {
      numericIClassName = this.className;
    }

    return numericIClassName;
  }

  get getNumericILarge() {
    let numericILarge;
    if (this.args.large != undefined) {
      numericILarge = this.args.large;
    } else if (this.large != undefined) {
      numericILarge = this.large;
    }

    return numericILarge ? numericIClasses.LARGE : '';
  }

  get getNumericIFill() {
    let numericIFill;
    if (this.args.fill != undefined) {
      numericIFill = this.args.fill;
    } else if (this.fill != undefined) {
      numericIFill = this.fill;
    }

    return numericIFill;
  }

  get getButtonPosition() {
    let buttonPosition = 'right';
    if (this.args.buttonPosition != undefined) {
      buttonPosition = this.args.buttonPosition;
    } else if (this.buttonPosition != undefined) {
      buttonPosition = this.buttonPosition;
    }

    return buttonPosition;
  }

  get getNumericIIntent() {
    let numericIIntent: Intent = 'none';

    if (this.args.intent != undefined) {
      numericIIntent = this.args.intent;
    } else if (this.intent != undefined) {
      numericIIntent = this.intent;
    }

    return numericIClasses.intentClass(numericIIntent) as Intent;
  }

  get getNumericIDisabled() {
    return this.getDisabled();
  }

  get getNumericILeftIcon() {
    let numericILeftIcon;

    if (this.args.disabled != undefined) {
      numericILeftIcon = this.args.leftIcon;
    } else if (this.leftIcon != undefined) {
      numericILeftIcon = this.leftIcon;
    }

    return numericILeftIcon;
  }

  get getNumericIMax() {
    this.getDerivedStateFormProps();

    return this.getMax();
  }

  get getNumericIMin() {
    this.getDerivedStateFormProps();

    return this.getMin();
  }

  get getValueProp() {
    if (this.didValueChange != getValueOrEmptyValue(this.args.value) && this.inputElement) {
      this.didValueChange = getValueOrEmptyValue(this.args.value);
      this.value = getValueOrEmptyValue(this.args.value);
      this.inputElement.value = getValueOrEmptyValue(this.args.value);
    }

    return this.getValue();
  }

  //not in UI

  getMajorStepSize() {
    let majorStepSize = 10;
    if (this.args.majorStepSize != undefined) {
      majorStepSize = this.args.majorStepSize;
    } else if (this.majorStepSize != undefined) {
      majorStepSize = this.majorStepSize;
    }
    return majorStepSize;
  }

  getMinorStepSize() {
    let minorStepSize = 0.1;
    if (this.args.minorStepSize != undefined) {
      minorStepSize = this.args.minorStepSize;
    } else if (this.minorStepSize != undefined) {
      minorStepSize = this.minorStepSize;
    }
    return minorStepSize;
  }

  getStepSize() {
    let stepSize = 1;
    if (this.args.stepSize != undefined) {
      stepSize = this.args.stepSize;
    } else if (this.stepSize != undefined) {
      stepSize = this.stepSize;
    }
    return stepSize;
  }

  getSelectAllOnIncrement() {
    let selectAllOnIncrement = false;
    if (this.args.selectAllOnIncrement != undefined) {
      selectAllOnIncrement = this.args.selectAllOnIncrement;
    } else if (this.selectAllOnIncrement != undefined) {
      selectAllOnIncrement = this.selectAllOnIncrement;
    }
    return selectAllOnIncrement;
  }

  getMin() {
    let min;
    if (this.args.min != undefined) {
      min = this.args.min;
    } else if (this.min != undefined) {
      min = this.min;
    }
    return min as number;
  }

  getMax() {
    let max;
    if (this.args.max != undefined) {
      max = this.args.max;
    } else if (this.max != undefined) {
      max = this.max;
    }
    return max as number;
  }

  getValue() {
    let value;
    if (this.args.value != undefined) {
      value = this.args.value;
    }
    return value;
  }

  getClampValueOnBlur() {
    let clampValueOnBlur;
    if (this.args.clampValueOnBlur != undefined) {
      clampValueOnBlur = this.args.clampValueOnBlur;
    } else if (this.clampValueOnBlur != undefined) {
      clampValueOnBlur = this.clampValueOnBlur;
    }
    return clampValueOnBlur as boolean;
  }

  getAllowNumericCharactersOnly() {
    let allowNumericCharactersOnly = true;
    if (this.args.allowNumericCharactersOnly != undefined) {
      allowNumericCharactersOnly = this.args.allowNumericCharactersOnly;
    } else if (this.allowNumericCharactersOnly != undefined) {
      allowNumericCharactersOnly = this.allowNumericCharactersOnly;
    }
    return allowNumericCharactersOnly;
  }

  getDisabled() {
    let numericIDisabled;

    if (this.args.disabled != undefined) {
      numericIDisabled = this.args.disabled;
    } else if (this.disabled != undefined) {
      numericIDisabled = this.disabled;
    }
    return numericIDisabled;
  }

  @action
  incrementButtonHandlers(eventType: string, evt: KeyboardEvent) {
    if (eventType == 'down') this.getButtonEventHandlers(IncrementDirection.DOWN, evt);
    else this.getButtonEventHandlers(IncrementDirection.UP, evt);
  }
  // Callbacks - Input

  @action
  handleInputFocus(e: FocusEvent) {
    // update this state flag to trigger update for input selection (see componentDidUpdate)
    this.shouldSelectAfterUpdate = this.getSelectAllOnIncrement();
    this.selectionRange();
    if (this.args.onFocus) {
      this.args.onFocus(e);
    }
  }

  @action
  handleInputBlur(e: HTMLInputElement) {
    // always disable this flag on blur so it's ready for next time.
    this.shouldSelectAfterUpdate = false;

    if (this.getClampValueOnBlur()) {
      // @ts-ignore
      const { value } = e.target as HTMLInputElement;
      const sanitizedValue = this.getSanitizedValue(value);
      this.value = sanitizedValue;
    }
  }

  @action
  handleInputChange(e: HTMLInputElement) {
    // @ts-ignore
    const { value } = e.target as HTMLInputElement;

    let nextValue = value;
    if (this.getAllowNumericCharactersOnly() && this.didPasteEventJustOccur) {
      this.didPasteEventJustOccur = false;
      const valueChars = value.split('');
      const sanitizedValueChars = valueChars.filter(isFloatingPointNumericCharacter);
      const sanitizedValue = sanitizedValueChars.join('');
      nextValue = sanitizedValue;
    }

    this.shouldSelectAfterUpdate = false;
    this.value = nextValue;

    if (this.args.onValueChange) {
      this.args.onValueChange(+nextValue, nextValue);
    }
  }

  @action
  handleInputKeyDown(e: KeyboardEvent) {
    if (this.getDisabled()) {
      return;
    }

    const { keyCode } = e;

    let direction;

    if (keyCode === Keys.ARROW_UP) {
      direction = IncrementDirection.UP;
    } else if (keyCode === Keys.ARROW_DOWN) {
      direction = IncrementDirection.DOWN;
    }
    if (direction != null) {
      // when the input field has focus, some key combinations will modify
      // the field's selection range. we'll actually want to select all
      // text in the field after we modify the value on the following
      // lines. preventing the default selection behavior lets us do that
      // without interference.
      e.preventDefault();

      const delta = this.updateDelta(direction, e);
      this.incrementValue(delta);
    }

    if (this.args.onKeyDown) {
      this.args.onKeyDown(e);
    }
  }

  @action
  handleInputKeyPress(e: KeyboardEvent) {
    // we prohibit keystrokes in onKeyPress instead of onKeyDown, because
    // e.key is not trustworthy in onKeyDown in all browsers.
    if (this.getAllowNumericCharactersOnly() && !isValidNumericKeyboardEvent(e)) {
      e.preventDefault();
    }

    if (this.args.onKeyPress) {
      this.args.onKeyPress(e);
    }
  }

  @action
  handleInputPaste(e: ClipboardEvent) {
    this.didPasteEventJustOccur = true;
    if (this.args.onPaste) {
      this.args.onPaste(e);
    }
  }

  @action
  inputElementRef(element: HTMLInputElement) {
    this.inputElement = element;
  }

  // Value Helpers
  // =============
  private static getStepMaxPrecision(props: INumericInputProps, args: INumericInputProps) {
    if (props.minorStepSize != null || args.minorStepSize != null) {
      return Utils.countDecimalPlaces((props.minorStepSize || args.minorStepSize) as number);
    } else {
      return Utils.countDecimalPlaces((props.stepSize || args.stepSize) as number);
    }
  }

  getDerivedStateFormProps() {
    const value = getValueOrEmptyValue(this.value);
    let min, max;
    if (this.inputElement) {
      min = parseInt(this.inputElement.min, 10);
      max = parseInt(this.inputElement.max, 10);
    }

    const didMinChange = this.getMin() != min ? true : false;
    const didMaxChange = this.getMax() != max ? true : false;
    const didBoundsChange = didMinChange || didMaxChange;
    const sanitizedValue =
      value !== NumericInput.VALUE_EMPTY
        ? NumericInput.getSanitizedValue(value, /* delta */ 0, this.getMin(), this.getMax())
        : NumericInput.VALUE_EMPTY;

    const stepMaxPrecision = NumericInput.getStepMaxPrecision(this.props, this.args);

    // if a new min and max were provided that cause the existing value to fall
    // outside of the new bounds, then clamp the value to the new valid range.
    if (didBoundsChange && sanitizedValue !== this.value) {
      this.stepMaxPrecision = stepMaxPrecision;
      if (this.inputElement) {
        this.inputElement.value = sanitizedValue;
      }
    } else {
      this.stepMaxPrecision = stepMaxPrecision;
    }
  }

  private static getSanitizedValue(
    value: string,
    stepMaxPrecision: number,
    min: number,
    max: number,
    delta = 0
  ) {
    if (!isValueNumeric(value)) {
      return NumericInput.VALUE_EMPTY;
    }
    const nextValue = toMaxPrecision(parseFloat(value) + delta, stepMaxPrecision);
    return clampValue(nextValue, min, max).toString();
  }

  // Callbacks - Buttons
  // ===================

  private getButtonEventHandlers(direction: IncrementDirection, evt: KeyboardEvent) {
    if (Keys.isKeyboardClick(evt.keyCode)) {
      this.handleButtonClick(evt, direction);
    } else {
      this.handleButtonClick(evt, direction);
      this.startContinuousChange();
    }
  }

  private handleButtonClick = (e: MouseEvent | KeyboardEvent, direction: IncrementDirection) => {
    const delta = this.updateDelta(direction, e);
    const nextValue = this.incrementValue(delta);

    if (this.args.onButtonClick) {
      this.args.onButtonClick(+nextValue, nextValue);
    }

    if (this.args.onValueChange) {
      this.args.onValueChange(+nextValue, nextValue);
    }
  };

  private startContinuousChange() {
    // The button's onMouseUp event handler doesn't fire if the user
    // releases outside of the button, so we need to watch all the way
    // from the top.
    document.addEventListener('mouseup', this.stopContinuousChange);

    // Initial delay is slightly longer to prevent the user from
    // accidentally triggering the continuous increment/decrement.
    this.setTimeout(() => {
      this.intervalId = window.setInterval(
        this.handleContinuousChange,
        NumericInput.CONTINUOUS_CHANGE_INTERVAL
      );
    }, NumericInput.CONTINUOUS_CHANGE_DELAY);
  }

  private stopContinuousChange = () => {
    this.delta = 0;
    this.clearTimeouts();
    clearInterval(this.intervalId as number);
    document.removeEventListener('mouseup', this.stopContinuousChange);
  };

  private handleContinuousChange = () => {
    const nextValue = this.incrementValue(this.delta);

    if (this.args.onButtonClick) {
      this.args.onButtonClick(+nextValue, nextValue);
    }
  };

  private incrementValue(delta: number) {
    // pretend we're incrementing from 0 if currValue is empty
    const currValue = this.value || NumericInput.VALUE_ZERO;

    const nextValue = this.getSanitizedValue(currValue, delta);
    this.shouldSelectAfterUpdate = this.getSelectAllOnIncrement();
    this.selectionRange();
    this.value = nextValue;

    return nextValue;
  }

  private getSanitizedValue(value: string, delta = 0) {
    return NumericInput.getSanitizedValue(
      value,
      this.stepMaxPrecision,
      this.getMin(),
      this.getMax(),
      delta
    );
  }
  private getIncrementDelta(
    direction: IncrementDirection,
    isShiftKeyPressed: boolean,
    isAltKeyPressed: boolean
  ) {
    if (isShiftKeyPressed && this.getMajorStepSize() != null) {
      return direction * this.getMajorStepSize();
    } else if (isAltKeyPressed && this.getMinorStepSize() != null) {
      return direction * this.getMinorStepSize();
    } else {
      return direction * this.getStepSize();
    }
  }

  private updateDelta(direction: IncrementDirection, e: MouseEvent | KeyboardEvent) {
    this.delta = this.getIncrementDelta(direction, e.shiftKey, e.altKey);
    return this.delta;
  }

  /**
   * Set a timeout and remember its ID.
   * All stored timeouts will be cleared when component unmounts.
   * @returns a "cancel" function that will clear timeout when invoked.
   */
  public setTimeout(callback: () => void, timeout?: number) {
    const handle = window.setTimeout(callback, timeout);
    this.timeoutIds.push(handle);
    return () => window.clearTimeout(handle);
  }

  /**
   * Clear all known timeouts.
   */
  public clearTimeouts = () => {
    if (this.timeoutIds.length > 0) {
      for (const timeoutId of this.timeoutIds) {
        window.clearTimeout(timeoutId);
      }
      this.timeoutIds = [];
    }
  };

  // Error handling
  protected validateProps() {
    const majorStepSize = this.getMajorStepSize();
    const max = this.getMax();
    const min = this.getMin();
    const minorStepSize = this.getMinorStepSize();
    const stepSize = this.getStepSize();
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

  selectionRange() {
    if (this.shouldSelectAfterUpdate) {
      this.inputElement.setSelectionRange(0, this.value.length);
    }
  }
}

export default setComponentTemplate(NILayout, NumericInput);
