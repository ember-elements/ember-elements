import Component from '@glimmer/component';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

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
  @reads('props.className') className?: NavbarArgs['className'];
  @reads('props.fixedToTop') fixedToTop?: NavbarArgs['fixedToTop'];

  NAVBAR = navbarClasses.NAVBAR;

  get getNavbarClassNames() {
    let navbarClassName;

    if (this.args.className != undefined) {
      navbarClassName = this.args.className;
    } else if (this.className != undefined) {
      navbarClassName = this.className;
    }

    return navbarClassName;
  }

  get getNavbarFixedTop() {
    let navbarFixedTop;

    if (this.args.fixedToTop != undefined) {
      navbarFixedTop = this.args.fixedToTop;
    } else if (this.fixedToTop != undefined) {
      navbarFixedTop = this.fixedToTop;
    }

    return navbarFixedTop ? navbarClasses.FIXED_TOP : '';
  }
}
