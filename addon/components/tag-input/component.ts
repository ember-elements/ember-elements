import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { set, get } from '@ember/object';
import { computed, action } from '@ember-decorators/object';

import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { HTMLInputProps } from '../../-private/common/props';
import * as Keys from "../../-private/common/keys";
import * as Utils from "../../-private/common/utils";

/** special value for absence of active tag */
const NONE = -1;
export default class TagInput extends Component.extend({
}) {
  layout = layout;

  /**
     * If true, `onAdd` will be invoked when the input loses focus.
     * Otherwise, `onAdd` is only invoked when `enter` is pressed.
     * @default false
  */
  addOnBlur?: boolean;

  /**
   * If true, `onAdd` will be invoked when the user pastes text containing the `separator`
   * into the input. Otherwise, pasted text will remain in the input.
   *
   * __Note:__ For example, if `addOnPaste=true` and `separator="\n"` (new line), then:
   * - Pasting `"hello"` will _not_ invoke `onAdd`
   * - Pasting `"hello\n"` will invoke `onAdd` with `["hello"]`
   * - Pasting `"hello\nworld"` will invoke `onAdd` with `["hello", "world"]`
   *
   * @default true
   */
  addOnPaste: boolean = true;

  /**
   * Whether the component is non-interactive.
   * Note that you'll also need to disable the component's `rightElement` as rendered through yield,
   * if appropriate.
   * @default false
   */
  disabled?: boolean;

  /** Whether the tag input should take up the full width of its container. */
  fill?: boolean;

  /**
   * React props to pass to the `<input>` element.
   */
  inputProps?: HTMLInputProps = {};

  /** Controlled value of the `<input>` element. This is shorthand for `inputProps={{ value }}`. */
  inputValue: string = "";

  intent?: Intent;

  /** Whether the tag input should use a large size. */
  large?: boolean;

  /** Name of a Blueprint UI icon (or an icon element) to render on the left side of the input. */
  leftIcon?: string;

  /**
   * Callback invoked when new tags are added by the user pressing `enter` on the input.
   * Receives the current value of the input field split by `separator` into an array.
   * New tags are expected to be appended to the list.
   *
   * The input will be cleared after `onAdd` is invoked _unless_ the callback explicitly
   * returns `false`. This is useful if the provided `value` is somehow invalid and should
   * not be added as a tag.
   */
  onAdd!: (values: string[], method: TagInputAddMethod) => boolean | void;

  /**
   * Callback invoked when new tags are added or removed. Receives the updated list of `values`:
   * new tags are appended to the end of the list, removed tags are removed at their index.
   *
   * Like `onAdd`, the input will be cleared after this handler is invoked _unless_ the callback
   * explicitly returns `false`.
   *
   * This callback essentially implements basic `onAdd` and `onRemove` functionality and merges
   * the two handlers into one to simplify controlled usage.
   *
   * **Note about typed usage:** Your handler can declare a subset type of `[]`,
   * such as `string[]` or `Array<string | HtmlElement>`, to match the type of your `values` array:
   * ```ts
   * values=["apple", "banana", "cherry"];
   * <TagInput
   *     @onChange={{action (mut this.values) }}
   *     @values={{values}}
   * />
   * ```
   */
  onChange!: (values: Array<any>) => boolean | void;

  /**
   * Callback invoked when the value of `<input>` element is changed.
   * This is shorthand for `inputProps={{ onChange }}`.
   */
  onInputChange!: (event: any) => void;;

  /**
   * Callback invoked when the user depresses a keyboard key.
   * Receives the event and the index of the active tag (or `undefined` if
   * focused in the input).
   */
  onKeyDown!: (event: KeyboardEvent, index?: number) => void;

  /**
   * Callback invoked when the user releases a keyboard key.
   * Receives the event and the index of the active tag (or `undefined` if
   * focused in the input).
   */
  onKeyUp!: (event: KeyboardEvent, index?: number) => void;

  /**
   * Callback invoked when the user clicks the X button on a tag.
   * Receives value and index of removed tag.
   */
  onRemove!: (value: string, index: number) => void;

  /**
   * Input placeholder text which will not appear if `values` contains any items
   * (consistent with default HTML input behavior).
   * Use `inputProps.placeholder` if you want the placeholder text to _always_ appear.
   *
   * If you define both `placeholder` and `inputProps.placeholder`, then the former will appear
   * when `values` is empty and the latter at all other times.
   */
  placeholder?: string;


  /**
   * Separator pattern used to split input text into multiple values. Default value splits on commas and newlines.
   * Explicit `false` value disables splitting (note that `onAdd` will still receive an array of length 1).
   * @default /[,\n\r]/
   */
  separator?: string | RegExp | false = /[,\n\r]/;

  /**
   * React props to pass to each `Tag`. Provide an object to pass the same props to every tag,
   * or a function to customize props per tag.
   *
   * If you define `onRemove` here then you will have to implement your own tag removal
   * handling as `TagInput`'s own `onRemove` handler will never be invoked.
   */
  tagProps?: object = {};

  /**
   * Controlled tag values. Each value will be rendered inside a `Tag`, which can be customized
   * using `tagProps`. Therefore, any valid React node can be used as a `TagInput` value; falsy
   * values will not be rendered.
   *
   */
  values: Array<any> = [];
  // normal class body definition here

  // inputProps functions
  onFocus!: (event: any) => void;
  inputOnChange!: (event: any) => void;
  inputOnKeyDown!: (event: any) => void;
  inputOnKeyUp!: (event: any) => void;

  // TagInputState  
  activeIndex: number = NONE;
  isInputFocused: boolean = false;

  // other values to template  
  resolvedPlaceholder!: string | undefined;

  @computed('intent')
  get intentStyle() {
    return this.intent ? Classes.intentClass(this.intent) : Classes.intentClass('none');
  }

  //init ClassNames
  INPUT = Classes.INPUT;
  TAG_INPUT = Classes.TAG_INPUT;
  TAG_INPUT_ICON = Classes.TAG_INPUT_ICON;
  TAG_INPUT_VALUES = Classes.TAG_INPUT_VALUES
  INPUT_GHOST = Classes.INPUT_GHOST;

  classNameBindings = [`INPUT`, `TAG_INPUT`, `isInputFocused:${Classes.ACTIVE}`, `disabled:${Classes.DISABLED}`, `fill:${Classes.FILL}`, `large:${Classes.LARGE}`, `intentStyle`]

  didReceiveAttrs() {
    // use placeholder prop only if it's defined and values list is empty or contains only falsy values
    const isSomeValueDefined = this.values.some(val => !!val);
    const resolvedPlaceholder = this.placeholder == null || isSomeValueDefined ? (this.inputProps as HTMLInputProps).placeholder : this.placeholder;
    set(this, 'resolvedPlaceholder', resolvedPlaceholder);
  }

  //Ember action events
  focusOut(_currentTarget: any) {
    requestAnimationFrame(() => {
      // we only care if the blur event is leaving the container.
      if (this.addOnBlur && this.inputValue !== undefined && this.inputValue.length > 0) {
        this.addTags(this.inputValue, "blur");
      }
      if (!this.isDestroyed) {
        set(this, 'activeIndex', NONE);
        set(this, 'isInputFocused', false);
      }

    });
  }

  click() {
    if (this.element) {
      (this.element.querySelector('input') as HTMLElement).focus()
    }
  }

  // actions
  // remove tags when user click on tag remove icon
  @action
  handleRemoveTag(_value: string, _prams: any, event: any) {
    // using data attribute to simplify callback logic -- one handler for all children
    const index = +(event.target as any).parentElement.getAttribute("data-tag-index");
    this.removeIndexFromValues(index);
  }

  //input actions

  @action
  handleInputFocus(event: any) {
    set(this, 'isInputFocused', true);
    // onFocus function return event 
    if (get(this, 'onFocus'))
      get(this, 'onFocus')(event);
  }

  @action
  handleInputChange(event: any) {
    set(this, 'activeIndex', NONE);
    set(this, 'inputValue', event.target.value);

    if (get(this, 'onInputChange'))
      get(this, 'onInputChange')(event);

    if (get(this, 'inputOnChange'))
      get(this, 'inputOnChange')(event);
  }

  @action
  handleInputKeyDown(event: any) {
    const { selectionEnd, value } = event.target;
    const { activeIndex } = this;

    let activeIndexToEmit = activeIndex;

    if (event.which === Keys.ENTER && value.length > 0) {
      this.addTags(value, "default");
    } else if (selectionEnd === 0 && this.values.length > 0) {
      // cursor at beginning of input allows interaction with tags.
      // use selectionEnd to verify cursor position and no text selection.
      if (event.which === Keys.ARROW_LEFT || event.which === Keys.ARROW_RIGHT) {
        const nextActiveIndex = this.getNextActiveIndex(event.which === Keys.ARROW_RIGHT ? 1 : -1);
        if (nextActiveIndex !== activeIndex) {
          event.stopPropagation();
          activeIndexToEmit = nextActiveIndex;
          set(this, 'activeIndex', nextActiveIndex)
        }
      } else if (event.which === Keys.BACKSPACE) {
        this.handleBackspaceToRemove(event);
      }
    }
    this.invokeKeyPressCallback("onKeyDown", event, activeIndexToEmit);
  };

  @action
  handleInputKeyUp(event: any) {
    this.invokeKeyPressCallback("onKeyUp", event, this.activeIndex);
  }

  @action
  handleInputPaste(event: any) {
    const { separator } = this;
    const value = event.clipboardData.getData("text");

    if (!this.addOnPaste || value.length === 0) {
      return;
    }

    // special case as a UX nicety: if the user pasted only one value with no delimiters in it, leave that value in
    // the input field so that the user can refine it before converting it to a tag manually.
    if (separator === false || value.split(separator).length === 1) {
      return;
    }

    event.preventDefault();
    this.addTags(value, "paste");
  }

  private addTags(value: string, method: TagInputAddMethod = "default") {
    const { values } = this;
    const newValues = this.getValues(value);

    if (get(this, 'onAdd'))
      get(this, 'onAdd')(newValues, method);

    let shouldClearInput = (get(this, 'onChange') && method != undefined && newValues != undefined)
    // avoid a potentially expensive computation if this prop is omitted
    if (get(this, 'onChange')) {
      get(this, 'onChange')([...values, ...newValues]);
    }


    // only explicit return false cancels text clearing
    if (shouldClearInput) {
      set(this, 'inputValue', "");
    }
  }

  private getNextActiveIndex(direction: number) {
    const { activeIndex } = this;
    if (activeIndex === NONE) {
      // nothing active & moving left: select last defined value. otherwise select nothing.
      return direction < 0 ? this.findNextIndex(this.values.length, -1) : NONE;
    } else {
      // otherwise, move in direction and clamp to bounds.
      // note that upper bound allows going one beyond last item
      // so focus can move off the right end, into the text input.
      return this.findNextIndex(activeIndex, direction);
    }
  }


  private findNextIndex(startIndex: number, direction: number) {
    const { values } = this;
    let index = startIndex + direction;
    while (index > 0 && index < values.length && !values[index]) {
      index += direction;
    }
    return Utils.clamp(index, 0, values.length);
  }

  /**
 * Splits inputValue on separator prop,
 * trims whitespace from each new value,
 * and ignores empty values.
 */
  private getValues(inputValue: string) {
    const { separator } = this;
    // NOTE: split() typings define two overrides for string and RegExp.
    // this does not play well with our union prop type, so we'll just declare it as a valid type.
    return (separator === false ? [inputValue] : inputValue.split(separator as string))
      .map(val => val.trim())
      .filter(val => val.length > 0);
  }

  private handleBackspaceToRemove(event: any) {
    const previousActiveIndex = this.activeIndex;
    // always move leftward one item (this will focus last item if nothing is focused)
    // this.setState({ activeIndex: this.getNextActiveIndex(-1) });
    set(this, 'activeIndex', this.getNextActiveIndex(-1));
    // delete item if there was a previous valid selection (ignore first backspace to focus last item)
    if (this.isValidIndex(previousActiveIndex)) {
      event.stopPropagation();
      this.removeIndexFromValues(previousActiveIndex);
    }
  }

  /** Remove the item at the given index by invoking `onRemove` and `onChange` accordingly. */
  private removeIndexFromValues(index: number) {
    const { values } = this;
    if (get(this, 'onRemove'))
      get(this, 'onRemove')(values[index], index);

    if (this.get('onChange')) {
      this.get('onChange')(values.filter((_, i) => i !== index));
    }
  }

  private invokeKeyPressCallback(propCallbackName: "onKeyDown" | "onKeyUp", event: any, activeIndex: number) {
    if (get(this, propCallbackName))
      get(this, propCallbackName)(event, activeIndex === NONE ? undefined : activeIndex);

    if (propCallbackName == "onKeyDown")
      if (get(this, 'inputOnKeyDown'))
        get(this, 'inputOnKeyDown')(event);

    if (propCallbackName == "onKeyUp")
      if (get(this, 'inputOnKeyUp'))
        get(this, 'inputOnKeyUp')(event);
  }

  /** Returns whether the given index represents a valid item in `this.props.values`. */
  private isValidIndex(index: number) {
    return index !== NONE && index < this.values.length;
  }

};
/**
 * The method in which a `TagInput` value was added.
 * - `"default"` - indicates that a value was added by manual selection.
 * - `"blur"` - indicates that a value was added when the `TagInput` lost focus.
 *   This is only possible when `addOnBlur=true`.
 * - `"paste"` - indicates that a value was added via paste. This is only
 *   possible when `addOnPaste=true`.
 */
export type TagInputAddMethod = "default" | "blur" | "paste";

