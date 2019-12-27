import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import * as Classes from '../../_private/common/classes';
import { IProps, IOptionProps } from '../../_private/common/props';
import { IIconProps } from '../icon/component';

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

class HtmlSelect extends Component<HtmlSelectArgs> {
  @reads('props.className') className?: HtmlSelectArgs['className'];
  @reads('props.disabled') disabled?: HtmlSelectArgs['disabled'];
  @reads('props.fill') fill?: HtmlSelectArgs['fill'];
  @reads('props.iconProps') iconProps?: HtmlSelectArgs['iconProps'];
  @reads('props.large') large?: HtmlSelectArgs['large'];
  @reads('props.options') options?: HtmlSelectArgs['options'];
  @reads('props.minimal') minimal?: HtmlSelectArgs['minimal'];

  HTML_SELECT = Classes.HTML_SELECT;
  DISABLED = Classes.DISABLED;
  FILL = Classes.FILL;
  LARGE = Classes.LARGE;
  MINIMAL = Classes.MINIMAL;

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getDisabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.disabled != undefined) {
      disabled = this.disabled;
    }

    return disabled ? Classes.DISABLED : '';
  }

  get getFill() {
    let fill;

    if (this.args.fill != undefined) {
      fill = this.args.fill;
    } else if (this.fill != undefined) {
      fill = this.fill;
    }

    return fill ? Classes.FILL : '';
  }

  get getIconProps() {
    let iconProps;
    //iconProps.props object should be avoided!

    if (this.args.iconProps != undefined) {
      iconProps = this.args.iconProps;
    } else if (this.iconProps != undefined) {
      iconProps = this.iconProps;
    }

    return iconProps || {};
  }

  get getLarge() {
    let large;

    if (this.args.large != undefined) {
      large = this.args.large;
    } else if (this.large != undefined) {
      large = this.large;
    }

    return large ? Classes.LARGE : '';
  }

  get getOptions() {
    let options;

    if (this.args.options != undefined) {
      options = this.args.options;
    } else if (this.options != undefined) {
      options = this.options;
    }

    return options || [];
  }

  get getMinimal() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.minimal != undefined) {
      minimal = this.minimal;
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
      if (!this.disabled && this.args.onChange) {
        this.args.onChange(e);
      }
    }
  }
}
export default setComponentTemplate(layout, HtmlSelect);
