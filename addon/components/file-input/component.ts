import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { FILE_INPUT, FILE_INPUT_HAS_SELECTION, FILE_UPLOAD_INPUT, DISABLED, FILL, LARGE } from '../../-private/common/classes'
import { htmlSafe } from '@ember/string';
import { computed, action } from '@ember/object';
export default class FileInput extends Component {
  layout = layout;
  tagName = 'label';

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
   * The props to pass to the child input.
   * `disabled` will be ignored in favor of the top-level prop.
   * `type` will be ignored, because the input _must_ be `type="file"`.
   */
  inputProps?: object;

  /**
   * Whether the file input should appear with large styling.
   */
  large?: boolean;

  /**
   * Callback invoked on `<input>` `change` events.
   */
  onInputChange!: (event: any) => void;

  /**
   * The text to display.
   * @default "Choose file..."
   */
  text: HTMLElement | string = 'Choose file...';

  /** inline style to its parent */
  style?: any;

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style)
  }

  FILE_INPUT = FILE_INPUT;
  classNameBindings = [`FILE_INPUT`, `hasSelection:${FILE_INPUT_HAS_SELECTION}`, `disabled:${DISABLED}`, `fill:${FILL}`, `large:${LARGE}`];
  attributeBindings = ['inlineStyle:style'];
  FILE_UPLOAD_INPUT = FILE_UPLOAD_INPUT;

  @action
  handleInputChange(event: any) {
    if (this.get('onInputChange'))
      this.get('onInputChange')(event)
  }
  // normal class body definition here
};
