import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
export default class RadioGroup extends Component {
  layout = layout;

  /**
     * Whether the group and _all_ its radios are disabled.
     * Individual radios can be disabled using their `disabled` prop.
     */
  disabled?: boolean;

  /**
   * Whether the radio buttons are to be displayed inline horizontally.
   */
  inline?: boolean;

  /** Optional label text to display above the radio buttons. */
  label?: string;

  /**
   * Name of the group, used to link radio buttons together in HTML.
   * If omitted, a unique name will be generated internally.
   */
  name?: string;

  /**
   * Callback invoked when the currently selected radio changes.
   * Use `event.target.value` to read the currently selected value.
   * This prop is required because this component only supports controlled usage.
   */
  // onChange!: (event: HTMLInputElement) => void;

  /**
   * Array of options to render in the group. This prop is mutually exclusive
   * with `children`: either provide an array of `IOptionProps` objects or
   * provide `<Radio>` children elements.
   */
  options?: IOptionProps[];

  /** Value of the selected radio. The child with this value will be `:checked`. */
  selectedValue?: string | number;

  // a unique name for this group, which can be overridden by `name` prop.
  private autoGroupName = nextName();

  /** Event handler invoked when input value is changed. */
  onChange!: (event: any) => void;

  LABEL = Classes.LABEL;

  init() {
    super.init();
    this.autoGroupName;
  }

};
export interface IOptionProps {
  /**Class name  */
  class?: string;
  /** Whether this option is non-interactive. */
  disabled?: boolean;

  /** Label text for this option. If omitted, `value` is used as the label. */
  label?: string;

  /** Value of this option. */
  value: string | number;
}
let counter = 0;
function nextName() {
  return `bp3-RadioGroup-${counter++}`;
}
