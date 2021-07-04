import Component from '@glimmer/component';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

import * as navbarHeadingClasses from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common';

export type INavbarHeadingProps = IProps;

interface NavbarHeadingArgs extends INavbarHeadingProps {
  props: INavbarHeadingProps;
}

export default class NavbarHeading extends Component<NavbarHeadingArgs> {
  @reads('props.className') className?: NavbarHeadingArgs['className'];

  NAVBAR_HEADING = navbarHeadingClasses.NAVBAR_HEADING;

  get getNavbarHeadingClassNames() {
    let navbarHeadingClassName;

    if (this.args.className != undefined) {
      navbarHeadingClassName = this.args.className;
    } else if (this.className != undefined) {
      navbarHeadingClassName = this.className;
    }

    return navbarHeadingClassName;
  }
}
