import Component from '@glimmer/component';

import * as Classes from '../../_private/common/classes';
import * as Errors from '../../_private/common/errors';

import type { IProps } from '../../_private/common';
import type { IBackdropProps, IOverlayableProps } from '../overlay/index';
import type { IconName } from '@ember-elements/icons/addon';

export interface IDialogProps extends IOverlayableProps, IBackdropProps {
  /**
   * Toggles the visibility of the overlay and its children.
   * This prop is required because the component is controlled.
   */
  isOpen: boolean;

  /**
   * Dialog always has a backdrop so this prop is excluded from the public API.
   * @internal
   */
  hasBackdrop?: boolean;

  /**
   * Name of a Blueprint UI icon (or an icon element) to render in the
   * dialog's header. Note that the header will only be rendered if `title` is
   * provided.
   */
  icon?: IconName;

  /**
   * Whether to show the close button in the dialog's header.
   * Note that the header will only be rendered if `title` is provided.
   * @default true
   */
  isCloseButtonShown?: boolean;

  /**
   * CSS styles to apply to the dialog.
   * @default {}
   */
  style?: string;

  /**
   * Title of the dialog. If provided, an element with `Classes.DIALOG_HEADER`
   * will be rendered inside the dialog before any children elements.
   */
  title?: string;

  /**
   * Name of the transition for internal `CSSTransition`. Providing your own
   * name here will require defining new CSS transition properties.
   */
  transitionName?: string;
}

interface DialogArgs extends IProps, IDialogProps {
  props: DialogArgs;
}

export default class Dialog extends Component<DialogArgs> {
  // import classes
  OVERLAY_SCROLL_CONTAINER = Classes.OVERLAY_SCROLL_CONTAINER;
  DIALOG_CONTAINER = Classes.DIALOG_CONTAINER;
  DIALOG = Classes.DIALOG;
  DIALOG_HEADER = Classes.DIALOG_HEADER;
  DIALOG_CLOSE_BUTTON = Classes.DIALOG_CLOSE_BUTTON;
  SIZE_LARGE = Classes.SIZE_LARGE;
  HEADING = Classes.HEADING;

  get props() {
    return this.args.props || {};
  }
  // values to UI
  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      className = this.props.className;
    }

    return className;
  }

  get getStyles() {
    let style;

    if (this.args.style != undefined) {
      style = this.args.style;
    } else if (this.props.style != undefined) {
      style = this.props.style;
    }

    return style;
  }

  get getTitleProp() {
    return this.getTitle();
  }

  get getIconProp() {
    return this.getIcon();
  }

  get getIsCloseButtonShownProp() {
    return this.getIsCloseButtonShown();
  }

  getTitle() {
    let title;

    if (this.args.title != undefined) {
      title = this.args.title;
    } else if (this.props.title != undefined) {
      title = this.props.title;
    }

    return title;
  }

  getIcon() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.props.icon != undefined) {
      icon = this.props.icon;
    }

    return icon;
  }
  getIsCloseButtonShown() {
    let isCloseButtonShown;

    if (this.args.isCloseButtonShown != undefined) {
      isCloseButtonShown = this.args.isCloseButtonShown;
    } else if (this.props.isCloseButtonShown != undefined) {
      isCloseButtonShown = this.props.isCloseButtonShown;
    }

    return isCloseButtonShown;
  }

  protected validateProps() {
    if (this.getTitle() == null) {
      if (this.getIcon() != null) {
        console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
      }

      if (this.getIsCloseButtonShown() != null) {
        console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
      }
    }
  }
}
