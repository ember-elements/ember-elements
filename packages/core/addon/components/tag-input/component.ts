import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';

// @ts-ignore
import { tracked } from '@glimmer/tracking';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import tagILayout from './template';

// @ts-ignore
import { IconName } from '@ember-elements/icons'; // import icons for TagInput

import * as tagIClasses from '../../_private/common/classes';
import { IProps, IIntentProps, Intent } from '../../_private/common';
import * as Keys from '../../_private/common/keys';
import * as Utils from '../../_private/common/utils';
import { ITagProps } from '../tag/component';

/**
 * The method in which a `TagInput` value was added.
 * - `"default"` - indicates that a value was added by manual selection.
 * - `"blur"` - indicates that a value was added when the `TagInput` lost focus.
 *   This is only possible when `addOnBlur=true`.
 * - `"paste"` - indicates that a value was added via paste. This is only
 *   possible when `addOnPaste=true`.
 */
export type TagInputAddMethod = 'default' | 'blur' | 'paste';

export interface ITagInputProps extends IIntentProps, IProps {
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
  addOnPaste?: boolean;

  /**
   * Whether the component is non-interactive.
   * Note that you'll also need to disable the component's `rightElement`,
   * if appropriate.
   * @default false
   */
  disabled?: boolean;

  /** Whether the tag input should take up the full width of its container. */
  fill?: boolean;

  /** Controlled value of the `<input>` element. This is shorthand for `inputProps={{ value }}`. */
  inputValue?: string;

  /** Whether the tag input should use a large size. */
  large?: boolean;

  /** Name of a UI icon to render on the left side of the input. */
  leftIcon?: IconName;

  /**
   * Callback invoked when new tags are added by the user pressing `enter` on the input.
   * Receives the current value of the input field split by `separator` into an array.
   * New tags are expected to be appended to the list.
   *
   * The input will be cleared after `onAdd` is invoked _unless_ the callback explicitly
   * returns `false`. This is useful if the provided `value` is somehow invalid and should
   * not be added as a tag.
   */
  onAdd?: (values: string[], method: TagInputAddMethod) => boolean | void;

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
   * **Note about typed usage:** Your handler can declare a subset type of `React.ReactNode[]`,
   * such as `string[]` or `Array<string | JSX.Element>`, to match the type of your `values` array:
   * ```tsx
   * <TagInput
   *     onChange={(values: string[]) => this.setState({ values })}
   *     values={["apple", "banana", "cherry"]}
   * />
   * ```
   */
  onChange?: (values: string[]) => boolean | void;

  /**
   * Callback invoked when the value of `<input>` element is changed.
   * This is shorthand for `inputProps={{ onChange }}`.
   */
  onInputChange?: (event: HTMLInputElement) => void;

  /**
   * Callback invoked when the user depresses a keyboard key.
   * Receives the event and the index of the active tag (or `undefined` if
   * focused in the input).
   */
  onKeyDown?: (event: KeyboardEvent, index?: number) => void;

  /**
   * Callback invoked when the user releases a keyboard key.
   * Receives the event and the index of the active tag (or `undefined` if
   * focused in the input).
   */
  onKeyUp?: (event: KeyboardEvent, index?: number) => void;

  /**
   * Callback invoked when the user clicks the X button on a tag.
   * Receives value and index of removed tag.
   */
  onRemove?: (value: string, index: number) => void;

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
  separator?: string | RegExp | false;

  /**
   * React props to pass to each `Tag`. Provide an object to pass the same props to every tag,
   * or a function to customize props per tag.
   *
   * If you define `onRemove` here then you will have to implement your own tag removal
   * handling as `TagInput`'s own `onRemove` handler will never be invoked.
   */
  tagProps?: ITagProps;

  /**
   * Controlled tag values. Each value will be rendered inside a `Tag`, which can be customized
   * using `tagProps`. Therefore, any valid React node can be used as a `TagInput` value; falsy
   * values will not be rendered.
   *
   * __Note about typed usage:__ If you know your `values` will always be of a certain `ReactNode`
   * subtype, such as `string` or `ReactChild`, you can use that type on all your handlers
   * to simplify type logic.
   */
  values: string[];

  onFocus: (event: HTMLElement) => void;
}

/** special value for absence of active tag */
const NONE = -1;

interface TagInputArgs extends ITagInputProps {
  props: TagInputArgs;
}

class TagInput extends Component<TagInputArgs> {
  public static readonly SIZE_STANDARD = 16;
  public static readonly SIZE_LARGE = 20;
  inputElement!: HTMLInputElement;

  @reads('props.className') className?: TagInputArgs['className'];
  @reads('props.disabled') disabled?: TagInputArgs['disabled'];
  @reads('props.fill') fill?: TagInputArgs['fill'];
  @reads('props.large') large?: TagInputArgs['large'];
  @reads('props.intent') intent?: TagInputArgs['intent'];
  @reads('props.leftIcon') leftIcon?: TagInputArgs['leftIcon'];
  @reads('props.values') values?: TagInputArgs['values'];
  @reads('props.tagProps') tagProps?: TagInputArgs['tagProps'];
  @reads('props.separator') separator?: TagInputArgs['separator'];
  @reads('props.placeholder') placeholder?: TagInputArgs['placeholder'];

  @tracked isInputFocused = false;
  @tracked inputValue = this.args.inputValue;
  @tracked activeIndex = NONE;

  INPUT = tagIClasses.INPUT;
  TAG_INPUT = tagIClasses.TAG_INPUT;
  TAG_INPUT_ICON = tagIClasses.TAG_INPUT_ICON;
  TAG_INPUT_VALUES = tagIClasses.TAG_INPUT_VALUES;
  INPUT_GHOST = tagIClasses.INPUT_GHOST;

  get getTagIClassName() {
    let tagIClassName;
    if (this.args.className != undefined) {
      tagIClassName = this.args.className;
    } else if (this.className != undefined) {
      tagIClassName = this.className;
    }

    return tagIClassName;
  }

  get getActiveInputFocus() {
    return this.isInputFocused ? tagIClasses.ACTIVE : '';
  }

  get getTagIDisabled() {
    let tagIDisabled;
    if (this.args.disabled != undefined) {
      tagIDisabled = this.args.disabled;
    } else if (this.disabled != undefined) {
      tagIDisabled = this.disabled;
    }

    return tagIDisabled ? tagIClasses.DISABLED : '';
  }

  get getTagIFill() {
    let tagIfill;
    if (this.args.fill != undefined) {
      tagIfill = this.args.fill;
    } else if (this.fill != undefined) {
      tagIfill = this.fill;
    }

    return tagIfill ? tagIClasses.FILL : '';
  }

  get getTagILarge() {
    let tagILarge;
    if (this.args.large != undefined) {
      tagILarge = this.args.large;
    } else if (this.large != undefined) {
      tagILarge = this.large;
    }

    return tagILarge ? tagIClasses.LARGE : '';
  }

  get getTagIIntent() {
    let tagIIntent: Intent = 'none';

    if (this.args.intent != undefined) {
      tagIIntent = this.args.intent;
    } else if (this.intent != undefined) {
      tagIIntent = this.intent;
    }

    return tagIClasses.intentClass(tagIIntent) as Intent;
  }

  get getTagILeftIcon() {
    let tagIIcon;
    if (this.args.leftIcon != undefined) {
      tagIIcon = this.args.leftIcon;
    } else if (this.leftIcon != undefined) {
      tagIIcon = this.leftIcon;
    }

    return tagIIcon;
  }

  get getValuesData() {
    let tagIValues;
    if (this.args.values != undefined) {
      tagIValues = this.args.values;
    } else if (this.values != undefined) {
      tagIValues = this.values;
    }
    return tagIValues || [];
  }

  get getPlaceHolder() {
    let tagIPlaceHolder;
    if (this.args.placeholder != undefined) {
      tagIPlaceHolder = this.args.placeholder;
    } else if (this.placeholder != undefined) {
      tagIPlaceHolder = this.placeholder;
    }

    return tagIPlaceHolder;
  }
  get getTagProps() {
    let tagITagProps;
    if (this.args.tagProps != undefined) {
      tagITagProps = this.args.tagProps;
    } else if (this.tagProps != undefined) {
      tagITagProps = this.tagProps;
    }

    return tagITagProps || {};
  }

  @action
  handleContainerBlur({ currentTarget }: FocusEvent) {
    requestAnimationFrame(() => {
      // we only care if the blur event is leaving the container.
      // defer this check using rAF so activeElement will have updated.
      // @ts-ignore
      if (currentTarget && !currentTarget.contains(document.activeElement)) {
        if (this.getAddOnBlur() && this.inputValue !== undefined && this.inputValue.length > 0) {
          this.addTags(this.inputValue, 'blur');
        }
        this.activeIndex = NONE;
        this.isInputFocused = false;
      }
    });
  }

  @action
  handleContainerClick() {
    if (this.inputElement != null) {
      this.inputElement.focus();
    }
  }

  @action
  inputElementRef(element: HTMLInputElement) {
    this.inputElement = element;
  }

  @action
  handleInputFocus(event: HTMLElement) {
    this.isInputFocused = true;

    if (this.args.onFocus) {
      this.args.onFocus(event);
    }
  }

  @action
  handleInputChange(event: HTMLInputElement) {
    this.activeIndex = NONE;
    this.inputValue = event.currentTarget.value;

    if (this.args.onInputChange) {
      this.args.onInputChange(event);
    }
  }

  @action
  handleInputKeyDown(event: HTMLInputElement) {
    const { selectionEnd, value } = event.target;
    const activeIndex = this.activeIndex;
    let activeIndexToEmit = this.activeIndex;
    if (event.which === Keys.ENTER && value.length > 0) {
      this.addTags(value, 'default');
    } else if (selectionEnd === 0 && this.getValuesData.length > 0) {
      // cursor at beginning of input allows interaction with tags.
      // use selectionEnd to verify cursor position and no text selection.
      if (event.which === Keys.ARROW_LEFT || event.which === Keys.ARROW_RIGHT) {
        const nextActiveIndex = this.getNextActiveIndex(event.which === Keys.ARROW_RIGHT ? 1 : -1);
        if (nextActiveIndex !== activeIndex) {
          event.stopPropagation();
          activeIndexToEmit = nextActiveIndex;
          this.activeIndex = nextActiveIndex;
        }
      } else if (event.which === Keys.BACKSPACE) {
        this.handleBackspaceToRemove(event);
      }
    }

    if (this.args.onKeyDown) {
      // @ts-ignore
      this.args.onKeyDown(event, activeIndexToEmit === NONE ? undefined : activeIndexToEmit);
    }
  }

  @action
  handleInputKeyUp(event: HTMLInputElement) {
    if (this.args.onKeyUp) {
      // @ts-ignore
      this.args.onKeyUp(event, this.activeIndex === NONE ? undefined : this.activeIndex);
    }
  }

  @action
  handleInputPaste(event: HTMLInputElement) {
    const separator = this.getSeparator();
    const value = event.clipboardData.getData('text');

    if (!this.args.addOnPaste || value.length === 0) {
      return;
    }

    // special case as a UX nicety: if the user pasted only one value with no delimiters in it, leave that value in
    // the input field so that the user can refine it before converting it to a tag manually.
    if (separator === false || value.split(separator).length === 1) {
      return;
    }

    event.preventDefault();
    this.addTags(value, 'paste');
  }

  @action
  handleRemoveTag(event: HTMLInputElement) {
    // using data attribute to simplify callback logic -- one handler for all children
    const index = +event.target.parentElement.getAttribute('data-tag-index');
    this.removeIndexFromValues(index);
  }

  getAddOnBlur() {
    let tagIAddOnBlur;
    if (this.args.leftIcon != undefined) {
      tagIAddOnBlur = this.args.leftIcon;
    } else if (this.leftIcon != undefined) {
      tagIAddOnBlur = this.leftIcon;
    }

    return tagIAddOnBlur;
  }

  getSeparator() {
    let tagISeparator: TagInputArgs['separator'] = /[,\n\r]/;
    if (this.args.separator != undefined) {
      tagISeparator = this.args.separator;
    } else if (this.separator != undefined) {
      tagISeparator = this.separator;
    }

    return tagISeparator;
  }

  private addTags = (value: string, method: TagInputAddMethod = 'default') => {
    const newValues = this.getValues(value);
    let shouldClearInput: boolean = this.args.inputValue === undefined;
    if (this.args.onAdd) {
      this.args.onAdd(newValues, method);
    }

    if (this.args.onChange) {
      this.args.onChange([...this.getValuesData, ...newValues]);
    }

    // avoid a potentially expensive computation if this prop is omitted
    shouldClearInput = (this.args.onChange ? true : false) && shouldClearInput;

    // only explicit return false cancels text clearing
    if (shouldClearInput) {
      this.inputValue = '';
    }
  };

  private getNextActiveIndex(direction: number) {
    const activeIndex = this.activeIndex;
    if (activeIndex === NONE) {
      // nothing active & moving left: select last defined value. otherwise select nothing.
      return direction < 0 ? this.findNextIndex(this.getValuesData.length, -1) : NONE;
    } else {
      // otherwise, move in direction and clamp to bounds.
      // note that upper bound allows going one beyond last item
      // so focus can move off the right end, into the text input.
      return this.findNextIndex(activeIndex, direction);
    }
  }

  private findNextIndex(startIndex: number, direction: number) {
    const values = this.getValuesData;
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
    const separator = this.getSeparator();
    // NOTE: split() typings define two overrides for string and RegExp.
    // this does not play well with our union prop type, so we'll just declare it as a valid type.
    return (separator === false ? [inputValue] : inputValue.split(separator as string))
      .map(val => val.trim())
      .filter(val => val.length > 0);
  }

  private handleBackspaceToRemove(event: HTMLInputElement) {
    const previousActiveIndex = this.activeIndex;
    // always move leftward one item (this will focus last item if nothing is focused)
    this.activeIndex = this.getNextActiveIndex(-1);
    // delete item if there was a previous valid selection (ignore first backspace to focus last item)
    if (this.isValidIndex(previousActiveIndex)) {
      event.stopPropagation();
      this.removeIndexFromValues(previousActiveIndex);
    }
  }

  /** Remove the item at the given index by invoking `onRemove` and `onChange` accordingly. */
  private removeIndexFromValues(index: number) {
    if (this.args.onRemove) {
      this.args.onRemove(this.getValuesData[index], index);
    }
    if (this.args.onChange) {
      this.args.onChange(this.getValuesData.filter((_, i) => i !== index));
    }
  }

  /** Returns whether the given index represents a valid item in `this.props.values`. */
  private isValidIndex(index: number) {
    return index !== NONE && index < this.getValuesData.length;
  }
}

export default setComponentTemplate(tagILayout, TagInput);
