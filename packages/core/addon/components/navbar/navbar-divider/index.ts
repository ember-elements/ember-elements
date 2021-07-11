import Component from '@glimmer/component';

import * as navbarDividerClasses from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common';

export type INavbarDividerProps = IProps;

interface NavbarDividerArgs extends INavbarDividerProps {
  props: NavbarDividerArgs;
}

export default class NavbarDivider extends Component<NavbarDividerArgs> {
  NAVBAR_DIVIDER = navbarDividerClasses.NAVBAR_DIVIDER;

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
}
