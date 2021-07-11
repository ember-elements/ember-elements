import Component from '@glimmer/component';

import * as navbarClasses from '../../_private/common/classes';

import type { IProps } from '../../_private/common';

export interface INavbarProps extends IProps {
  /**
   * Whether this navbar should be fixed to the top of the viewport (using CSS `position: fixed`).
   */
  fixedToTop?: boolean;
}

interface NavbarArgs extends INavbarProps {
  props: NavbarArgs;
}

export default class Navbar extends Component<NavbarArgs> {
  NAVBAR = navbarClasses.NAVBAR;

  get props() {
    return this.args.props || {};
  }

  get getNavbarClassNames() {
    let navbarClassName;

    if (this.args.className != undefined) {
      navbarClassName = this.args.className;
    } else if (this.props.className != undefined) {
      navbarClassName = this.props.className;
    }

    return navbarClassName;
  }

  get getNavbarFixedTop() {
    let navbarFixedTop;

    if (this.args.fixedToTop != undefined) {
      navbarFixedTop = this.args.fixedToTop;
    } else if (this.props.fixedToTop != undefined) {
      navbarFixedTop = this.props.fixedToTop;
    }

    return navbarFixedTop ? navbarClasses.FIXED_TOP : '';
  }
}
