import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { computed } from '@ember/object';
export default class Callout extends Component {
  layout = layout;

  /**
    * Name of a UI icon (or an icon element) to render on the left side.
    *
    * If this prop is omitted or `undefined`, the `intent` prop will determine a default icon.
    * If this prop is explicitly `null`, no icon will be displayed (regardless of `intent`).
    */
  icon?: string;

  /**
   * Visual intent color to apply to background, title, and icon.
   *
   * Defining this prop also applies a default icon, if the `icon` prop is omitted.
   */
  intent?: Intent;

  /**
   * String content of optional title element.
   *
   * Due to a conflict with the HTML prop types, to provide html content simply
   * pass `<h4>title content</h4>` as first `children` element instead of
   * using this prop (note uppercase tag name to use the Heading
   * component).
   */
  title?: string;

  CALLOUT = Classes.CALLOUT;

  @computed('intent')
  get intentStyle() {
    return Classes.intentClass(this.intent);
  }

  @computed('icon', 'intent')
  get iconName() {
    return this.getIconName();
  }

  classNameBindings = [`CALLOUT`, `intentStyle`, `iconName:${Classes.CALLOUT_ICON}`];

  HEADING = Classes.HEADING;

  private getIconName() {
    // 1. no icon
    if (this.icon === null) {
      return undefined;
    }
    // 2. defined iconName prop
    if (this.icon !== undefined) {
      return this.icon;
    }
    // 3. default intent icon
    switch (this.intent) {
      case Intent.DANGER:
        return "error";
      case Intent.PRIMARY:
        return "info-sign";
      case Intent.WARNING:
        return "warning-sign";
      case Intent.SUCCESS:
        return "tick";
      default:
        return undefined;
    }
  }

};
