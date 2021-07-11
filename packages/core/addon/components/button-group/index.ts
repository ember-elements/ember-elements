import Component from '@glimmer/component';

import * as Classes from '../../_private/common/classes';

import type { IProps } from '../../_private/common';
import type { Alignment } from '../../_private/common';

interface BProps extends IProps {
  /**
   * Text alignment within button. By default, icons and text will be centered
   * within the button. Passing `"left"` or `"right"` will align the button
   * text to that side and push `icon` and `rightIcon` to either edge. Passing
   * `"center"` will center the text and icons together.
   */
  alignText?: Alignment;

  /**
   * Whether the button group should take up the full width of its container.
   * @default false
   */
  fill?: boolean;

  /**
   * Whether the child buttons should appear with minimal styling.
   * @default false
   */
  minimal?: boolean;

  /**
   * Whether the child buttons should appear with large styling.
   * @default false
   */
  large?: boolean;

  /**
   * Whether the button group should appear with vertical styling.
   * @default false
   */
  vertical?: boolean;
}

interface ButtonGroupArgs extends BProps {
  props: BProps;
}

export default class ButtonGroup extends Component<ButtonGroupArgs> {
  BUTTON_GROUP = Classes.BUTTON_GROUP;

  get props() {
    return this.args.props || {};
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

  //`Classes.FILL`
  get fill() {
    let fill;

    if (this.args.fill != undefined) {
      fill = this.args.fill;
    } else if (this.props.fill != undefined) {
      fill = this.props.fill;
    }

    return fill ? `${Classes.FILL} ` : '';
  }

  //`Classes.LARGE`
  get large() {
    let large;

    if (this.args.large != undefined) {
      large = this.args.large;
    } else if (this.props.large != undefined) {
      large = this.props.large;
    }

    return large ? `${Classes.LARGE} ` : '';
  }

  //`Classes.MINIMAL`
  get minimal() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.props.minimal != undefined) {
      minimal = this.props.minimal;
    }

    return minimal ? `${Classes.MINIMAL} ` : '';
  }

  //`Classes.VERTICAL`
  get vertical() {
    let vertical;

    if (this.args.vertical != undefined) {
      vertical = this.args.vertical;
    } else if (this.props.vertical != undefined) {
      vertical = this.props.vertical;
    }

    return vertical ? `${Classes.VERTICAL} ` : '';
  }

  // alignText return alignment class names , `Alignment.CENTER` is the default className
  get alignText() {
    let alignText: Alignment = 'center';

    if (this.args.alignText != undefined) {
      alignText = this.args.alignText;
    } else if (this.props.alignText != undefined) {
      alignText = this.props.alignText;
    }

    return Classes.alignmentClass(alignText || 'center');
  }
}
