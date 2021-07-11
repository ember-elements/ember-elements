import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../_private/common/classes';
import * as Keys from '../../_private/common/keys';

import type { Alignment, Intent } from '../../_private/common';
//external file imports
import type { IButtonProps } from '../../_private/comp-typings/abstractButton';

interface ButtonArgs extends IButtonProps {
  props: IButtonProps; //all props of button typings
}

export default class Button extends Component<ButtonArgs> {
  @tracked isActive = false;
  @tracked currentKeyDown: number | null = null;

  // Classes init
  BUTTON_TEXT = Classes.BUTTON_TEXT;
  BUTTON = Classes.BUTTON;

  /*
		In each component there is 2 option for passing args values
		1. default ember args with @argName
		2. @props is a user defined object vars and it accept all props and expect @actions
	 */

  get props() {
    return this.args.props || {};
  }

  // active props return active className
  get active() {
    let active;

    if (this.args.active != undefined) {
      active = this.args.active;
    } else if (this.props.active != undefined) {
      active = this.props.active;
    }

    return active == true ? `${Classes.ACTIVE} ` : '';
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

  // `Classes.DISABLED` className
  get disabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.props.disabled != undefined) {
      disabled = this.props.disabled;
    }

    return disabled || this.loading ? `${Classes.DISABLED} ` : '';
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

  //`Classes.Large`
  get large() {
    let large;

    if (this.args.large != undefined) {
      large = this.args.large;
    } else if (this.props.large != undefined) {
      large = this.props.large;
    }

    return large ? `${Classes.LARGE} ` : '';
  }

  get loading() {
    let loading;

    if (this.args.loading != undefined) {
      loading = this.args.loading;
    } else if (this.props.loading != undefined) {
      loading = this.props.loading;
    }

    return loading ? `${Classes.LOADING} ` : '';
  }

  get minimal() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.props.minimal != undefined) {
      minimal = this.props.minimal;
    }

    return minimal ? `${Classes.MINIMAL} ` : '';
  }

  get small() {
    let small;

    if (this.args.small != undefined) {
      small = this.args.small;
    } else if (this.props.small != undefined) {
      small = this.props.small;
    }

    return small ? `${Classes.SMALL} ` : '';
  }

  get intent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent || 'none');
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

  get type() {
    let type = 'button';

    if (this.args.type != undefined) {
      type = this.args.type;
    } else if (this.props.type != undefined) {
      type = this.props.type;
    }

    return type;
  }

  get icon() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.props.icon != undefined) {
      icon = this.props.icon;
    }

    return icon;
  }

  get rightIcon() {
    let rightIcon;

    if (this.args.rightIcon != undefined) {
      rightIcon = this.args.rightIcon;
    } else if (this.props.rightIcon != undefined) {
      rightIcon = this.props.rightIcon;
    }

    return rightIcon;
  }

  @action
  onClick(event: MouseEvent) {
    if (this.args.onClick) {
      //throw error on console
      assert(
        'onClick of ember-elements must be a function',
        typeof this.args.onClick === 'function'
      );

      // disabled button d'nt have a action
      if (!this.disabled && this.args.onClick) {
        this.args.onClick(event);
      }
    }
  }

  @action
  handleKeyDown(event: KeyboardEvent) {
    if (Keys.isKeyboardClick(event.which)) {
      event.preventDefault();

      if (event.which !== this.currentKeyDown) {
        this.isActive = true;
      }
    }

    this.currentKeyDown = event.which;

    // onKeyDown
    if (this.args.onKeyDown) {
      //throw error on console
      assert(
        'onKeyDown of ember-elements must be a function',
        typeof this.args.onKeyDown === 'function'
      );

      // disabled button d'nt have a action
      if (!this.disabled && this.args.onKeyDown) {
        this.args.onKeyDown(event);
      }
    }
  }

  @action
  handleKeyUp(event: KeyboardEvent) {
    if (Keys.isKeyboardClick(event.which)) {
      this.isActive = false;
      this.isActive = false;

      this.currentKeyDown = null;
    }

    // onKeyUp
    if (this.args.onKeyUp) {
      //throw error on console
      assert(
        'onKeyUp of ember-elements must be a function',
        typeof this.args.onKeyUp === 'function'
      );

      // disabled button d'nt have a action
      if (!this.disabled && this.args.onKeyUp) {
        this.args.onKeyUp(event);
      }
    }
  }

  @action
  onUpdate(element: HTMLElement) {
    const textSpanTag: HTMLElement | null = element.querySelector('.' + Classes.BUTTON_TEXT);

    if (textSpanTag && textSpanTag.innerHTML.trim() == '') {
      textSpanTag.remove();
    }
  }
}
