import Component from '@glimmer/component';
// @ts-ignore
import { tracked } from '@glimmer/tracking';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
import { assert } from '@ember/debug';
// @ts-ignore
import layout from './template';

import { computed, action, set } from '@ember/object';

//external file imports
import { IButtonProps } from '../../_private/comp-typings/abstractButton';
import { Alignment, Intent } from '../../_private/common';
import * as Classes from '../../_private/common/classes';
import * as Keys from '../../_private/common/keys';

interface ButtonArgs extends IButtonProps {
  props: IButtonProps; //all props of button typings
}

class Button extends Component<ButtonArgs> {
  props = this.args.props || {};
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

  // active props return active className
  @computed('args.active', 'props.active', 'isActive')
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
  @computed('args.alignText', 'props.alignText')
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
  @computed('args.disabled', 'props.disabled', 'loading')
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
  @computed('args.fill', 'props.fill')
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
  @computed('args.large', 'props.large')
  get large() {
    let large;

    if (this.args.large != undefined) {
      large = this.args.large;
    } else if (this.props.large != undefined) {
      large = this.props.large;
    }

    return large ? `${Classes.LARGE} ` : '';
  }

  @computed('args.loading', 'props.loading')
  get loading() {
    let loading;

    if (this.args.loading != undefined) {
      loading = this.args.loading;
    } else if (this.props.loading != undefined) {
      loading = this.props.loading;
    }

    return loading ? `${Classes.LOADING} ` : '';
  }

  @computed('args.minimal', 'props.minimal')
  get minimal() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.props.minimal != undefined) {
      minimal = this.props.minimal;
    }

    return minimal ? `${Classes.MINIMAL} ` : '';
  }

  @computed('args.small', 'props.small')
  get small() {
    let small;

    if (this.args.small != undefined) {
      small = this.args.small;
    } else if (this.props.small != undefined) {
      small = this.props.small;
    }

    return small ? `${Classes.SMALL} ` : '';
  }

  @computed('args.intent', 'props.intent')
  get intent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent || 'none');
  }

  @computed('args.className', 'props.className')
  get className() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      className = this.props.className;
    }
    return className;
  }

  @computed('args.type', 'props.type')
  get type() {
    let type = 'button';

    if (this.args.type != undefined) {
      type = this.args.type;
    } else if (this.props.type != undefined) {
      type = this.props.type;
    }

    return type;
  }

  @computed('args.icon', 'props.icon')
  get icon() {
    let icon;

    if (this.args.icon != undefined) {
      icon = this.args.icon;
    } else if (this.props.icon != undefined) {
      icon = this.props.icon;
    }

    return icon;
  }

  @computed('args.rightIcon', 'props.rightIcon')
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
        set(this, 'isActive', true);
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
      set(this, 'isActive', false);

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

  onUpdate() {
    const textSpanTag: HTMLElement | null = document.querySelector('.' + Classes.BUTTON_TEXT);
    if (textSpanTag && textSpanTag.innerHTML.trim() == '') {
      textSpanTag.remove();
    }
  }
}

export default setComponentTemplate(layout, Button);
