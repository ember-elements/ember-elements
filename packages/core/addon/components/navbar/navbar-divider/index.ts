import Component from '@glimmer/component';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

import * as navbarDividerClasses from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common';

export type INavbarDividerProps = IProps;

interface NavbarDividerArgs extends INavbarDividerProps {
  props: NavbarDividerArgs;
}

export default class NavbarDivider extends Component<NavbarDividerArgs> {
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
