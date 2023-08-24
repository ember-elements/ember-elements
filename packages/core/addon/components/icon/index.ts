import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { IconSvgPaths16, IconSvgPaths20 } from '@ember-elements/icons';

import * as Classes from '../../_private/common/classes';

import type { IIntentProps, Intent, IProps } from '../../_private/common';
// import all icons from '@ember-elements/icons'
import type { IconName } from '@ember-elements/icons/addon';

export interface IIconProps extends IIntentProps, IProps {
  /** This component does not support custom children. Use the `icon` prop. */
  children?: never;

  /**
   * Color of icon. This is used as the `fill` attribute on the `<svg>` image
   * so it will override any CSS `color` property, including that set by
   * `intent`. If this prop is omitted, icon color is inherited from
   * surrounding text.
   */
  color?: string;

  /**
   * String for the `title` attribute on the rendered element, which will appear
   * on hover as a native browser tooltip.
   */
  htmlTitle?: string;

  /**
   * Name of a Blueprint UI icon, or an icon element, to render. This prop is
   * required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render
   *   nothing.
   * - If given an `IconName` (a string literal union of all icon names), that
   *   icon will be rendered as an `<svg>` with `<path>` tags. Unknown strings
   *   will render a blank icon to occupy space.
   */
  icon: IconName;

  /**
   * Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon
   * images, and chooses the appropriate resolution based on this prop.
   * @default Icon.SIZE_STANDARD = 16
   */
  iconSize?: number;

  /** CSS style properties. */
  style?: string;

  /**
   * Description string. This string does not appear in normal browsers, but
   * it increases accessibility. For instance, screen readers will use it for
   * aural feedback. By default, this is set to the icon's name. Pass an
   * explicit falsy value to disable.
   */
  title?: string | false | null;
}
interface IconArgs extends IIconProps {
  props: IIconProps;
}
export default class Icon extends Component<IconArgs> {
  public static readonly SIZE_STANDARD = 16;
  public static readonly SIZE_LARGE = 20;

  ICON = Classes.ICON;

  // prettier-ignore
  @tracked title = this.args.icon != undefined ? this.args.title : this.props.title;

  @tracked iconClass = Classes.iconClass(this.args.icon || this.props.icon);

  get props() {
    return this.args.props || {};
  }

  // active props return active className
  get icon() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.props.icon != undefined) {
      icon = this.props.icon;
    }

    return icon;
  }

  get className() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      className = this.props.className;
    }

    return className;
  }

  get color() {
    let color;

    if (this.args.color != undefined) {
      color = this.args.color;
    } else if (this.props.color != undefined) {
      color = this.props.color;
    }

    return color;
  }

  get htmlTitle() {
    let htmlTitle;

    if (this.args.htmlTitle != undefined) {
      htmlTitle = this.args.htmlTitle;
    } else if (this.props.htmlTitle != undefined) {
      htmlTitle = this.props.htmlTitle;
    }

    return htmlTitle;
  }

  get pixelGridSize() {
    let iconSize;

    if (this.args.iconSize != undefined) {
      iconSize = this.args.iconSize;
    } else if (this.props.iconSize != undefined) {
      iconSize = this.props.iconSize;
    }

    iconSize = iconSize || Icon.SIZE_STANDARD;

    return iconSize >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
  }

  get intent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent || 'none');
  }

  get paths() {
    return this.renderSvgPaths(this.pixelGridSize, this.icon as IconName);
  }

  //Returns `null` if name is unknown or paths values
  private renderSvgPaths(
    pathsSize: number,
    iconName: IconName
  ): Array<string> | null {
    const svgPathsRecord =
      pathsSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
    const pathStrings = svgPathsRecord[iconName];

    if (pathStrings == null) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return pathStrings.map((d: any) => d);
  }
}
