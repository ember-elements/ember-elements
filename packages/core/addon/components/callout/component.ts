import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import { IProps, IIntentProps, Intent } from '../../_private/common';
import * as Classes from '../../_private/common/classes';

// import all icons from '@ember-elements/icons'
// @ts-ignore
import { IconName } from '@ember-elements/icons';
import { reads } from '@ember/object/computed';

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

class Callout extends Component<CalloutArgs> {
  props = this.args.props || {};

  @reads('props.className') className?: ICalloutProps['className'];
  @reads('props.intent') intent?: Intent;
  @reads('props.icon') icon?: IconName;
  @reads('props.title') title?: ICalloutProps['title'];

  @tracked iconClassName = '';
  @tracked intentValue: Intent = 'none';

  CALLOUT = Classes.CALLOUT;
  SIZE_LARGE = 20;
  HEADING = Classes.HEADING;

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.intent != undefined) {
      intent = this.intent;
    }
    this.intentValue = intent;
    return Classes.intentClass(intent) as Intent;
  }

  get getTitle() {
    let title;

    if (this.args.title != undefined) {
      title = this.args.title;
    } else if (this.title != undefined) {
      title = this.title;
    }

    return title;
  }

  get getIconName() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.icon != undefined) {
      icon = this.icon;
    }

    return this.fetchIconName(icon, this.intentValue);
  }

  get getIconClassName() {
    this.iconClassName = this.getIconName ? Classes.CALLOUT_ICON : '';
    return this.iconClassName;
  }

  private fetchIconName(icon?: IconName, intent?: Intent): IconName {
    // 1. no icon
    if (icon === null) {
      return undefined;
    }
    // 2. defined iconName prop
    if (icon !== undefined) {
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
        return undefined;
    }
  }
}

export default setComponentTemplate(layout, Callout);
