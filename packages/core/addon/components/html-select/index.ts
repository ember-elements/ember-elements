import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../_private/common/classes';

import type { IOptionProps, IProps } from '../../_private/common/props';
import type { IIconProps } from '../icon/index';

export interface IHTMLSelectProps extends IProps {
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
  onChange?: (event: HTMLSelectElement) => void;

  /**
   * Shorthand for supplying options: an array of basic types or
   * `{ label?, value }` objects. If no `label` is supplied, `value`
   * will be used as the label.
   */
  options?: Array<string | number | IOptionProps>;

  /** Controlled value of this component. */
  value?: string | number;
}
interface HtmlSelectArgs extends IHTMLSelectProps {
  props: HtmlSelectArgs;
}

export default class HtmlSelect extends Component<HtmlSelectArgs> {
  HTML_SELECT = Classes.HTML_SELECT;
  DISABLED = Classes.DISABLED;
  FILL = Classes.FILL;
  LARGE = Classes.LARGE;
  MINIMAL = Classes.MINIMAL;

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

  get getIconProps() {
    let iconProps;
    //iconProps.props object should be avoided!

    if (this.args.iconProps != undefined) {
      iconProps = this.args.iconProps;
    } else if (this.props.iconProps != undefined) {
      iconProps = this.props.iconProps;
    }

    return iconProps || {};
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

  get getOptions() {
    let options;

    if (this.args.options != undefined) {
      options = this.args.options;
    } else if (this.props.options != undefined) {
      options = this.props.options;
    }

    return options || [];
  }

  get getMinimal() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.props.minimal != undefined) {
      minimal = this.props.minimal;
    }

    return minimal ? Classes.MINIMAL : '';
  }

  @action
  handleChange(e: HTMLSelectElement) {
    if (this.args.onChange) {
      //throw error on console
      assert(
        'onChange of ember-elements must be a function',
        typeof this.args.onChange === 'function'
      );

      // disabled select doesn't have a action
      if (!this.props.disabled && this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }
}
