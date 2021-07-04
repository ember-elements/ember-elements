import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

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
  props = this.args.props || {};

  @reads('props.className') className?: ICardProps['className'];
  @reads('props.elevation') elevation!: Elevation;
  @reads('props.interactive') interactive?: ICardProps['interactive'];

  CARD = Classes.CARD;

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getInteractive() {
    let interactive;

    if (this.args.interactive != undefined) {
      interactive = this.args.interactive;
    } else if (this.interactive != undefined) {
      return (interactive = this.interactive);
    }

    return interactive ? Classes.INTERACTIVE : '';
  }

  get getElevation() {
    let elevation: Elevation = 0;

    if (this.args.elevation != undefined) {
      elevation = this.args.elevation;
    } else if (this.elevation != undefined) {
      return (elevation = this.elevation);
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
