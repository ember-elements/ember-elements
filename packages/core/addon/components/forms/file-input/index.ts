import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common/props';

export interface IFileInputProps extends IProps {
  /**
   * Whether the file input is non-interactive.
   * Setting this to `true` will automatically disable the child input too.
   */
  disabled?: boolean;

  /**
   * Whether the file input should take up the full width of its container.
   */
  fill?: boolean;

  /**
   * Whether the user has made a selection in the input. This will affect the component's
   * text styling. Make sure to set a non-empty value for the text prop as well.
   * @default false
   */
  hasSelection?: boolean;

  /**
   * Whether the file input should appear with large styling.
   */
  large?: boolean;

  /**
   * Callback invoked on `<input>` `change` events.
   *
   * This callback is offered as a convenience; it is equivalent to passing
   * `onChange` to `inputProps`.
   *
   */
  onInputChange?: (event: HTMLInputElement) => void;

  /**
   * The text to display.
   * @default "Choose file..."
   */
  text?: string;

  /**
   * The button text.
   * @default "Browse"
   */
  buttonText?: string;
}

interface FileInputArgs extends IFileInputProps {
  props: IFileInputProps;
}

export default class FileInput extends Component<FileInputArgs> {
  FILE_INPUT = Classes.FILE_INPUT;
  FILE_UPLOAD_INPUT = Classes.FILE_UPLOAD_INPUT;
  NS = Classes.getClassNamespace();

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

  get getDisabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.props.disabled != undefined) {
      disabled = this.props.disabled;
    }

    return disabled ? Classes.DISABLED : '';
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

  get getHasSelection() {
    let hasSelection;

    if (this.args.hasSelection != undefined) {
      hasSelection = this.args.hasSelection;
    } else if (this.props.hasSelection != undefined) {
      hasSelection = this.props.hasSelection;
    }

    return hasSelection ? Classes.FILE_INPUT_HAS_SELECTION : '';
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

  get getText() {
    let text = 'Choose file...';

    if (this.args.text != undefined) {
      text = this.args.text;
    } else if (this.props.text != undefined) {
      text = this.props.text;
    }

    return text;
  }

  private getButtonTextArgs() {
    let buttonText;

    if (this.args.buttonText != undefined) {
      buttonText = this.args.buttonText;
    } else if (this.props.buttonText != undefined) {
      buttonText = this.props.buttonText;
    }

    return buttonText;
  }

  get getButtonText() {
    return this.getButtonTextArgs() ? Classes.FILE_UPLOAD_INPUT_CUSTOM_TEXT : '';
  }

  get buttonTextValue() {
    return this.getButtonTextArgs() as FileInputArgs['buttonText'];
  }

  @action
  handleInputChange(e: HTMLInputElement) {
    if (this.args.onInputChange) {
      //throw error on console
      assert(
        'onInputChange of ember-elements must be a function',
        typeof this.args.onInputChange === 'function'
      );

      // disabled radio doesn't have a action
      if (!this.props.disabled && this.args.onInputChange) {
        this.args.onInputChange(e);
      }
    }
  }

  @action
  updateButtonText(ele: HTMLInputElement, propsValue: Array<string>) {
    if (propsValue[0]) {
      ele.setAttribute(`${this.NS}-button-text`, propsValue[0]);
    }
  }
}
