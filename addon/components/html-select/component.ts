import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';

import { DISABLED, FILL, HTML_SELECT, LARGE, MINIMAL } from '../../-private/common/classes';
import { IIconProps } from '../../-private/icons/IIconProps';
import { IOptionProps } from '../../-private/common/props'
import { htmlSafe } from '@ember/string';
import { computed, action } from '@ember/object';
export default class HTMLSelect extends Component {
  layout = layout;

  /** Whether this element is non-interactive. */
  disabled?: boolean;

  /** Whether this element should fill its container. */
  fill?: boolean;

  /** Props to spread to the `<Icon>` element. */
  iconProps?: Partial<IIconProps>;

  /** Whether to use large styles. */
  large?: boolean;

  /** Whether to use minimal styles. */
  minimal?: boolean;

  /** Multiple select is not supported. */
  multiple?: never;

  /** Change event handler. Use `event.currentTarget.value` to access the new value. */
  onChange!: (e: HTMLSelectElement) => void;

  /**
   * Shorthand for supplying options: an array of basic types or
   * `{ label?, value }` objects. If no `label` is supplied, `value`
   * will be used as the label.
   */
  options?: Array<string | number | IOptionProps>;

  /** Controlled value of this component. */
  value?: string | number;

  /** inline style to its parent */
  style?: any;
  @computed('style')
  get Style() {
    return htmlSafe(this.get('style'))
  }

  classNameBindings = [`HTML_SELECT`, `disabled:${DISABLED}`, `fill:${FILL}`, `large:${LARGE}`, `minimal:${MINIMAL}`];

  attributeBindings = ['Style'];

  @action
  onSelectOption(e: HTMLSelectElement) {
    if (this.get('onChange'))
      this.get('onChange')(e);
  }
  HTML_SELECT = HTML_SELECT;
};
