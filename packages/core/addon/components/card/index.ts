import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../_private/common/classes';

import type { Elevation, IProps } from '../../_private/common';

interface ICardProps extends IProps {
  /**
   * Controls the intensity of the drop shadow beneath the card: the higher
   * the elevation, the higher the drop shadow. At elevation `0`, no drop
   * shadow is applied.
   *
   * @default 0
   */
  elevation?: Elevation;

  /**
   * Whether the card should respond to user interactions. If set to `true`,
   * hovering over the card will increase the card's elevation
   * and change the mouse cursor to a pointer.
   *
   * Recommended when `onClick` is also defined.
   *
   * @default false
   */
  interactive?: boolean;

  /**
   * Callback invoked when the card is clicked.
   * Recommended when `interactive` is `true`.
   */
  onClick?: (event: MouseEvent) => void;
}
interface CardArgs extends ICardProps {
  props: ICardProps;
}

export default class Card extends Component<CardArgs> {
  CARD = Classes.CARD;

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

  get getInteractive() {
    let interactive;

    if (this.args.interactive != undefined) {
      interactive = this.args.interactive;
    } else if (this.props.interactive != undefined) {
      return (interactive = this.props.interactive);
    }

    return interactive ? Classes.INTERACTIVE : '';
  }

  get getElevation() {
    let elevation: Elevation = 0;

    if (this.args.elevation != undefined) {
      elevation = this.args.elevation;
    } else if (this.props.elevation != undefined) {
      return (elevation = this.props.elevation);
    }

    return Classes.elevationClass(elevation);
  }

  @action
  onClick(event: MouseEvent) {
    if (this.args.onClick) {
      //throw error on console
      assert(
        'onClick of ember-elements must be a function',
        typeof this.args.onClick === 'function'
      );

      if (this.args.onClick) {
        this.args.onClick(event);
      }
    }
  }
}
