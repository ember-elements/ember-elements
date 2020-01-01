import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

// @ts-ignore
import { IconName } from '@ember-elements/icons';

import * as Classes from '../../_private/common/classes';
import { IProps, IIntentProps, Intent } from '../../_private/common';

/**
 * TODO
 *
 * <Text> component
 */

export interface ITagProps extends IProps, IIntentProps {
  /**
   * Whether the tag should appear in an active state.
   * @default false
   */
  active?: boolean;

  /**
   * Whether the tag should take up the full width of its container.
   * @default false
   */
  fill?: boolean;

  /** Name of a UI icon name to render before the children. */
  icon?: IconName;

  /**
   * Whether the tag should visually respond to user interactions. If set
   * to `true`, hovering over the tag will change its color and mouse cursor.
   *
   * Recommended when `onClick` is also defined.
   *
   * @default false
   */
  interactive?: boolean;

  /**
   * Whether this tag should use large styles.
   * @default false
   */
  large?: boolean;

  /**
   * Whether this tag should use minimal styles.
   * @default false
   */
  minimal?: boolean;

  /**
   * Whether tag content should be allowed to occupy multiple lines.
   * If false, a single line of text will be truncated with an ellipsis if
   * it overflows. Note that icons will be vertically centered relative to
   * multiline text.
   * @default false
   */
  multiline?: boolean;

  /**
   * Callback invoked when the tag is clicked.
   * Recommended when `interactive` is `true`.
   */
  onClick?: (e: MouseEvent) => void;

  /**
   * Click handler for remove button.
   * The remove button will only be rendered if this prop is defined.
   */
  onRemove?: (e: MouseEvent, tagProps: ITagProps) => void;

  /** Name of a UI icon to render after the children. */
  rightIcon?: IconName;

  /**
   * Whether this tag should have rounded ends.
   * @default false
   */
  round?: boolean;

  tabIndex?: number;
}

interface TagArgs extends ITagProps {
  props: TagArgs;
}

class Tag extends Component<TagArgs> {
  @reads('props.active') active?: TagArgs['active'];
  @reads('props.className') className?: TagArgs['className'];
  @reads('props.fill') fill?: TagArgs['fill'];
  @reads('props.icon') icon?: TagArgs['icon'];
  @reads('props.intent') intent?: Intent;
  @reads('props.interactive') interactive?: TagArgs['interactive'];
  @reads('props.large') large?: TagArgs['large'];
  @reads('props.minimal') minimal?: TagArgs['minimal'];
  @reads('props.round') round?: TagArgs['round'];
  @reads('props.tabIndex') tabIndex?: TagArgs['tabIndex'];
  @reads('props.rightIcon') rightIcon?: TagArgs['rightIcon'];

  public static readonly SIZE_STANDARD = 16;
  public static readonly SIZE_LARGE = 20;

  TAG = Classes.TAG;
  TAG_REMOVE = Classes.TAG_REMOVE;
  TEXT_OVERFLOW_ELLIPSIS = Classes.TEXT_OVERFLOW_ELLIPSIS;

  FILL = Classes.FILL;

  get getActive() {
    let active;

    if (this.args.active != undefined) {
      active = this.args.active;
    } else if (this.active != undefined) {
      active = this.active;
    }

    return active ? Classes.ACTIVE : '';
  }

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
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

  get getIcon() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.icon != undefined) {
      icon = this.icon;
    }

    return icon;
  }

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.intent != undefined) {
      intent = this.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getInteractive() {
    let interactive;

    if (this.args.interactive != undefined) {
      interactive = this.args.interactive;
    } else if (this.interactive != undefined) {
      interactive = this.interactive;
    }

    return interactive ? Classes.INTERACTIVE : '';
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

  get getMinimal() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.minimal != undefined) {
      minimal = this.minimal;
    }

    return minimal ? Classes.MINIMAL : '';
  }

  get getRound() {
    let round;

    if (this.args.round != undefined) {
      round = this.args.round;
    } else if (this.round != undefined) {
      round = this.round;
    }

    return round ? Classes.ROUND : '';
  }

  get getTabIndex() {
    let tabIndex = 0;

    if (this.args.tabIndex != undefined) {
      tabIndex = this.args.tabIndex;
    } else if (this.tabIndex != undefined) {
      tabIndex = this.tabIndex;
    }

    return tabIndex;
  }

  get getRightIcon() {
    let rightIcon;

    if (this.args.rightIcon != undefined) {
      rightIcon = this.args.rightIcon;
    } else if (this.rightIcon != undefined) {
      rightIcon = this.rightIcon;
    }

    return rightIcon;
  }

  get isRemovable() {
    return this.args.onRemove;
  }

  @action
  onRemoveClick(e: MouseEvent) {
    if (this.args.onRemove) {
      this.args.onRemove(e, this.args);
    }
  }
}

export default setComponentTemplate(layout, Tag);
