import Component from '@glimmer/component';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

import * as dividerClasses from '../../_private/common/classes';

import type { IProps } from '../../_private/common';

export interface IDividerProps extends IProps {
  /**
   * HTML tag to use for element.
   * @default "div"
   */
  tagName?: string;
}
interface DividerArgs extends IDividerProps {
  props: DividerArgs;
}

export default class Divider extends Component<DividerArgs> {
  @reads('props.className') className?: DividerArgs['className'];
  @reads('props.tagName') tagName?: DividerArgs['tagName'];

  DIVIDER = dividerClasses.DIVIDER;

  get getDividerClassNames() {
    let dividerClassName;

    if (this.args.className != undefined) {
      dividerClassName = this.args.className;
    } else if (this.className != undefined) {
      dividerClassName = this.className;
    }

    return dividerClassName;
  }

  getDividerTagName() {
    let dividerTagName = 'div';

    if (this.args.tagName != undefined) {
      dividerTagName = this.args.tagName;
    } else if (this.className != undefined) {
      dividerTagName = this.className;
    }

    return dividerTagName;
  }
}
