import Component from '@glimmer/component';

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
  DIVIDER = dividerClasses.DIVIDER;

  get props() {
    return this.args.props || {};
  }

  get getDividerClassNames() {
    let dividerClassName;

    if (this.args.className != undefined) {
      dividerClassName = this.args.className;
    } else if (this.props.className != undefined) {
      dividerClassName = this.props.className;
    }

    return dividerClassName;
  }

  getDividerTagName() {
    let dividerTagName = 'div';

    if (this.args.tagName != undefined) {
      dividerTagName = this.args.tagName;
    } else if (this.props.className != undefined) {
      dividerTagName = this.props.className;
    }

    return dividerTagName;
  }
}
