import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action, computed } from '@ember-decorators/object';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

import * as Errors from "../../-private/common/errors";
import * as Classes from '../../-private/common/classes';
export default class Dialog extends Component {
  layout = layout;

  backdropProps?: object = {};

  className?: string;

  dialogClassName?: string;

  enforceFocus?: boolean = true;

  lazy?: boolean = true;

  isOpen?: boolean;

  hasBackdrop?: boolean;

  icon?: string;

  /**
    * Whether to show the close button in the dialog's header.
    * Note that the header will only be rendered if `title` is provided.
    * @default true
    */
  isCloseButtonShown: boolean = true;

  style?: any;

  title?: string;

  transitionName: string = Classes.OVERLAY;

  canEscapeKeyClose?: boolean = true;

  canOutsideClickClose?: boolean = true;

  usePortal: boolean = true;

  portalClassName?: string;

  onClose!: (event: any) => void;

  @computed('style')
  get dialogStyle() {
    return htmlSafe(this.style);
  }

  @computed('className')
  get overlayClassName() {
    return `${this.OVERLAY_SCROLL_CONTAINER} ${this.className}`;
  }

  @computed('dialogClassName')
  get dialogClassNames() {
    return `${this.DIALOG} ${this.dialogClassName}`;
  }

  @computed('portalClassName', 'usePortal')
  get setPortalClassName() {
    return `${this.usePortal ? this.PORTAL : ""} ${this.portalClassName}`;
  }

  DIALOG = Classes.DIALOG;
  DIALOG_CONTAINER = Classes.DIALOG_CONTAINER;
  DIALOG_CLOSE_BUTTON = Classes.DIALOG_CLOSE_BUTTON;
  DIALOG_HEADER = Classes.DIALOG_HEADER;
  HEADING = Classes.HEADING;
  OVERLAY_SCROLL_CONTAINER = Classes.OVERLAY_SCROLL_CONTAINER;
  PORTAL = Classes.PORTAL;
  containerClassName = Classes.DIALOG_CONTAINER;

  @action
  onIconClick(e: any) {
    if (get(this, 'onClose'))
      get(this, 'onClose')(e)
  }

  protected validateProps() {
    if (this.title == null) {
      if (this.icon != null) {
        console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
      }
      if (this.isCloseButtonShown != null) {
        console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
      }
    }
  }
  // normal class body definition here
};
