import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';

// @ts-ignore
import navbarDividerLayout from './template';

import * as navbarDividerClasses from '../../../_private/common/classes';
import { IProps } from '../../../_private/common';

export interface INavbarDividerProps extends IProps {
  // Empty
}

interface NavbarDividerArgs extends INavbarDividerProps {
  props: NavbarDividerArgs;
}

class NavbarDivider extends Component<NavbarDividerArgs> {
  @reads('props.className') className?: NavbarDividerArgs['className'];

  NAVBAR_DIVIDER = navbarDividerClasses.NAVBAR_DIVIDER;

  get getNavbarDividerClassNames() {
    let navbarDividerClassName;
    if (this.args.className != undefined) {
      navbarDividerClassName = this.args.className;
    } else if (this.className != undefined) {
      navbarDividerClassName = this.className;
    }

    return navbarDividerClassName;
  }
}

export default setComponentTemplate(navbarDividerLayout, NavbarDivider);
