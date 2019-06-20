import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action, computed } from '@ember-decorators/object';
import { get } from '@ember/object';

import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { ALERT_WARN_CANCEL_ESCAPE_KEY, ALERT_WARN_CANCEL_OUTSIDE_CLICK, ALERT_WARN_CANCEL_PROPS, } from "../../-private/common/errors";

export default class Alert extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  layout = layout;

  className?: string;

  canEscapeKeyCancel?: boolean;

  canOutsideClickCancel?: boolean;

  /**
   * The text for the cancel button.
   * If this prop is defined, then either `onCancel` or `onClose` must also be defined.
   */
  cancelButtonText?: string;

  /**
     * The text for the confirm (right-most) button.
     * This button will always appear, and uses the value of the `intent` prop below.
     * @default "OK"
     */
  confirmButtonText?: string = "OK";

  dialogClassName?: string;

  icon?: string;

  /**
  * The intent to be applied to the confirm (right-most) button.
  */
  intent?: Intent;

  /**
   * Toggles the visibility of the alert.
   * This prop is required because the component is controlled.
   */
  isOpen?: boolean;

  /**
  * CSS styles to apply to the alert.
  */
  style?: string;


  /**
   * Handler invoked when the alert is canceled. Alerts can be **canceled** in the following ways:
   * - clicking the cancel button (if `cancelButtonText` is defined)
   * - pressing the escape key (if `canEscapeKeyCancel` is enabled)
   * - clicking on the overlay backdrop (if `canOutsideClickCancel` is enabled)
   *
   * If any of the `cancel` props are defined, then either `onCancel` or `onClose` must be defined.
   */
  onCancel!: (evt?: any) => void;


  /**
   * Handler invoked when the confirm button is clicked. Alerts can be **confirmed** in the following ways:
   * - clicking the confirm button
   * - focusing on the confirm button and pressing `enter` or `space`
   */
  onConfirm!: (evt?: any) => void;


  /**
   * Handler invoked when the Alert is confirmed or canceled; see `onConfirm` and `onCancel` for more details.
   * First argument is `true` if confirmed, `false` otherwise.
   * This is an alternative to defining separate `onConfirm` and `onCancel` handlers.
   */
  onClose!: (confirmed: boolean, evt?: any) => void;

  autoFocus: boolean = true;
  backdropProps: object = {};
  enforceFocus: boolean = true;
  transitionName: string = Classes.OVERLAY;
  usePortal: boolean = true;

  ALERT = Classes.ALERT;
  ALERT_BODY = Classes.ALERT_BODY;
  ALERT_CONTENTS = Classes.ALERT_CONTENTS;
  ALERT_FOOTER = Classes.ALERT_FOOTER;

  @computed('dialogClassName')
  get dialogClassNames() {
    return this.ALERT + " " + this.dialogClassName;
  }

  @action
  handleConfirm(e: any) {
    if (get(this, 'onClose'))
      get(this, 'onClose')(true, e);

    if (get(this, 'onConfirm'))
      get(this, 'onConfirm')(e);

  }

  @action
  handleCancel(e: any) {
    if (get(this, 'onCancel'))
      get(this, 'onCancel')(e);

    if (get(this, 'onClose'))
      get(this, 'onClose')(false, e);

  }

  protected validateProps() {
    if (this.onClose == null && (this.cancelButtonText == null) !== (this.onCancel == null)) {
      console.warn(ALERT_WARN_CANCEL_PROPS);
    }

    const hasCancelHandler = this.onCancel != null || this.onClose != null;
    if (this.canEscapeKeyCancel && !hasCancelHandler) {
      console.warn(ALERT_WARN_CANCEL_ESCAPE_KEY);
    }
    if (this.canOutsideClickCancel && !hasCancelHandler) {
      console.warn(ALERT_WARN_CANCEL_OUTSIDE_CLICK);
    }
  }

};
