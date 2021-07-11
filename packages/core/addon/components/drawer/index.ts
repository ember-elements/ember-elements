import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

import * as Classes from '../../_private/common/classes';
import * as posFun from '../../_private/common/position';

import type { IProps, Position } from '../../_private/common';
import type { IBackdropProps, IOverlayableProps } from '../overlay/index';

export interface IDrawerProps extends IOverlayableProps, IBackdropProps {
  /**
   * Whether to show the close button in the dialog's header.
   * Note that the header will only be rendered if `title` is provided.
   * @default true
   */
  isCloseButtonShown?: boolean;

  /**
   * Toggles the visibility of the overlay and its children.
   * This prop is required because the component is controlled.
   */
  isOpen: boolean;

  /**
   * Position of a drawer. All angled positions will be casted into pure positions
   * (TOP, BOTTOM, LEFT or RIGHT).
   * @default Position.RIGHT
   */
  position?: Position;

  /**
   * CSS size of the drawer. This sets `width` if `vertical={false}` (default)
   * and `height` otherwise.
   *
   * Constants are available for common sizes:
   * - `Drawer.SIZE_SMALL = 360px`
   * - `Drawer.SIZE_STANDARD = 50%`
   * - `Drawer.SIZE_LARGE = 90%`
   *
   * @default Drawer.SIZE_STANDARD = "50%"
   */
  size?: number | string;

  /**
   * CSS styles to apply to the dialog.
   * @default {}
   */
  style?: string;

  /**
   * Name of the transition for internal `CSSTransition`. Providing your own
   * name here will require defining new CSS transition properties.
   */
  transitionName?: string;

  /**
   * Whether the drawer should appear with vertical styling.
   * It will be ignored if `position` prop is set
   * @default false
   * @deprecated use `position` instead
   */
  vertical?: boolean;
}
interface DrawerArgs extends IProps, IDrawerProps {
  props: DrawerArgs;
}

export default class Drawer extends Component<DrawerArgs> {
  public static readonly SIZE_SMALL = '360px';
  public static readonly SIZE_STANDARD = '50%';
  public static readonly SIZE_LARGE = '90%';

  DRAWER = Classes.DRAWER;
  VERTICAL = Classes.VERTICAL;
  OVERLAY_CONTAINER = Classes.OVERLAY_CONTAINER;

  get props() {
    return this.args.props || {};
  }

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      className = this.props.className;
    }

    const realPosition = this.realPosition();
    const vertical = this.findVertical();
    const verticalClass = !realPosition && vertical ? this.VERTICAL : '';
    const realPositionClass = realPosition ? Classes.positionClass(realPosition) : '';

    return `${verticalClass} ${realPositionClass} ${className}`;
  }

  get getIsOpen() {
    let isOpen = false;

    if (this.args.isOpen != undefined) {
      isOpen = this.args.isOpen;
    } else if (this.props.isOpen != undefined) {
      isOpen = this.props.isOpen;
    }

    return isOpen;
  }

  get getStyle() {
    const style = this.findStyle();
    const realPosition = this.realPosition();
    const size = this.findSize();
    const styleName = (
      realPosition ? posFun.isPositionHorizontal(realPosition) : this.findVertical()
    )
      ? 'height'
      : 'width';

    return size == null ? style : htmlSafe(`${styleName}:${size};${style}`);
  }
  findSize() {
    let size;

    if (this.args.size != undefined) {
      size = this.args.size;
    } else if (this.props.size != undefined) {
      size = this.props.size;
    }

    return size;
  }

  findStyle() {
    let style;

    if (this.args.style != undefined) {
      style = this.args.style;
    } else if (this.props.style != undefined) {
      style = this.props.style;
    }

    return style;
  }

  findPosition() {
    let position = null;

    if (this.args.position != undefined) {
      position = this.args.position;
    } else if (this.props.position != undefined) {
      position = this.props.position;
    }

    return position as Position;
  }

  findVertical() {
    let vertical = false;

    if (this.args.vertical != undefined) {
      vertical = this.args.vertical;
    } else if (this.props.vertical) {
      vertical = this.props.vertical;
    }

    return vertical;
  }

  realPosition() {
    const position = this.findPosition();

    return position ? posFun.getPositionIgnoreAngles(position) : null;
  }
}
