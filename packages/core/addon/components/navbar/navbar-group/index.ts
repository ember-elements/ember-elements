import Component from '@glimmer/component';

import * as navbarGroupClasses from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common';
import type { Alignment } from '../../../_private/common/alignment';

export interface INavbarGroupProps extends IProps {
  /**
   * The side of the navbar on which the group should appear.
   * The `Alignment` enum provides constants for these values.
   * @default Alignment.LEFT
   */
  align?: Alignment;
}
interface NavbarGroupArgs extends INavbarGroupProps {
  props: INavbarGroupProps;
}

export default class NavbarGroup extends Component<NavbarGroupArgs> {
  NAVBAR_GROUP = navbarGroupClasses.NAVBAR_GROUP;

  get props() {
    return this.args.props || {};
  }

  get getNavbarDividerClassNames() {
    let navbarDividerClassName;

    if (this.args.className != undefined) {
      navbarDividerClassName = this.args.className;
    } else if (this.props.className != undefined) {
      navbarDividerClassName = this.props.className;
    }

    return navbarDividerClassName;
  }

  get getNavbarGroupAligns() {
    let navbarGroupAlign: Alignment = 'left';

    if (this.args.align != undefined) {
      navbarGroupAlign = this.args.align;
    } else if (this.props.align != undefined) {
      navbarGroupAlign = this.props.align;
    }

    return navbarGroupClasses.alignmentClass(navbarGroupAlign);
  }
}
