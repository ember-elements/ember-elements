import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import * as Classes from '../../_private/common/classes';

import type { IIntentProps, Intent, IProps } from '../../_private/common';
// import all icons from '@ember-elements/icons'
import type { IconName } from '@ember-elements/icons/addon';

interface ICalloutProps extends IIntentProps, IProps {
  /**
   * Name of a Blueprint UI icon (or an icon element) to render on the left side.
   *
   * If this prop is omitted or `undefined`, the `intent` prop will determine a default icon.
   * If this prop is explicitly `null`, no icon will be displayed (regardless of `intent`).
   */
  icon?: IconName;

  /**
   * Visual intent color to apply to background, title, and icon.
   *
   * Defining this prop also applies a default icon, if the `icon` prop is omitted.
   */
  intent?: Intent;

  /**
   * String content of optional title element.
   *
   */
  title?: string;
}

interface CalloutArgs extends ICalloutProps {
  props: ICalloutProps;
}

export default class Callout extends Component<CalloutArgs> {
  @tracked iconClassName = '';
  @tracked intentValue: Intent = 'none';

  CALLOUT = Classes.CALLOUT;
  SIZE_LARGE = 20;
  HEADING = Classes.HEADING;

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

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    this.intentValue = intent; // eslint-disable-line

    return Classes.intentClass(intent) as Intent;
  }

  get getTitle() {
    let title;

    if (this.args.title != undefined) {
      title = this.args.title;
    } else if (this.props.title != undefined) {
      title = this.props.title;
    }

    return title;
  }

  get getIconName() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.props.icon != undefined) {
      icon = this.props.icon;
    }

    return this.fetchIconName(icon as IconName, this.intentValue);
  }

  get getIconClassName() {
    this.iconClassName = this.getIconName ? Classes.CALLOUT_ICON : ''; // eslint-disable-line

    return this.iconClassName;
  }

  private fetchIconName(icon: IconName, intent: Intent): IconName {
    // 1. no icon
    if (icon === null) {
      return icon;
    }

    // 2. defined iconName prop
    if (icon) {
      return icon;
    }

    // 3. default intent icon
    switch (intent as Intent) {
      case 'danger':
        return 'error';
      case 'primary':
        return 'info-sign';
      case 'warning':
        return 'warning-sign';
      case 'success':
        return 'tick';
      default:
        return icon;
    }
  }
}
