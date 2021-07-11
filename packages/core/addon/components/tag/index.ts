import Component from '@glimmer/component';
import { action } from '@ember/object';

import * as tagClasses from '../../_private/common/classes';

import type { IIntentProps, Intent, IProps } from '../../_private/common';
import type { IconName } from '@ember-elements/icons/addon'; // import icons package

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

export default class Tag extends Component<TagArgs> {
  public static readonly SIZE_STANDARD = 16;
  public static readonly SIZE_LARGE = 20;

  TAG = tagClasses.TAG;
  TAG_REMOVE = tagClasses.TAG_REMOVE;
  TEXT_OVERFLOW_ELLIPSIS = tagClasses.TEXT_OVERFLOW_ELLIPSIS;

  FILL = tagClasses.FILL;

  get props() {
    return this.args.props || {};
  }

  get getActive() {
    let active;

    if (this.args.active != undefined) {
      active = this.args.active;
    } else if (this.props.active != undefined) {
      active = this.props.active;
    }

    return active ? tagClasses.ACTIVE : '';
  }

  get getTagClassName() {
    let tagClassName;

    if (this.args.className != undefined) {
      tagClassName = this.args.className;
    } else if (this.props.className != undefined) {
      tagClassName = this.props.className;
    }

    return tagClassName;
  }

  get getTagFill() {
    let tagFill;

    if (this.args.fill != undefined) {
      tagFill = this.args.fill;
    } else if (this.props.fill != undefined) {
      tagFill = this.props.fill;
    }

    return tagFill ? tagClasses.FILL : '';
  }

  get getTagIcon() {
    let tagIcon;

    if (this.args.icon != undefined) {
      tagIcon = this.args.icon;
    } else if (this.props.icon != undefined) {
      tagIcon = this.props.icon;
    }

    return tagIcon;
  }

  get getIntent() {
    let tagIntent: Intent = 'none';

    if (this.args.intent != undefined) {
      tagIntent = this.args.intent;
    } else if (this.props.intent != undefined) {
      tagIntent = this.props.intent;
    }

    return tagClasses.intentClass(tagIntent) as Intent;
  }

  get getInteractive() {
    let tagInteractive;

    if (this.args.interactive != undefined) {
      tagInteractive = this.args.interactive;
    } else if (this.props.interactive != undefined) {
      tagInteractive = this.props.interactive;
    }

    return tagInteractive ? tagClasses.INTERACTIVE : '';
  }

  get getLarge() {
    let tagLarge;

    if (this.args.large != undefined) {
      tagLarge = this.args.large;
    } else if (this.props.large != undefined) {
      tagLarge = this.props.large;
    }

    return tagLarge ? tagClasses.LARGE : '';
  }

  get getMinimal() {
    let tagMinimal;

    if (this.args.minimal != undefined) {
      tagMinimal = this.args.minimal;
    } else if (this.props.minimal != undefined) {
      tagMinimal = this.props.minimal;
    }

    return tagMinimal ? tagClasses.MINIMAL : '';
  }

  get getRound() {
    let tagRound;

    if (this.args.round != undefined) {
      tagRound = this.args.round;
    } else if (this.props.round != undefined) {
      tagRound = this.props.round;
    }

    return tagRound ? tagClasses.ROUND : '';
  }

  get getTabIndex() {
    let tabIndex = 0;

    if (this.args.tabIndex != undefined) {
      tabIndex = this.args.tabIndex;
    } else if (this.props.tabIndex != undefined) {
      tabIndex = this.props.tabIndex;
    }

    return tabIndex;
  }

  get getRightIcon() {
    let tagRightIcon;

    if (this.args.rightIcon != undefined) {
      tagRightIcon = this.args.rightIcon;
    } else if (this.props.rightIcon != undefined) {
      tagRightIcon = this.props.rightIcon;
    }

    return tagRightIcon;
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
