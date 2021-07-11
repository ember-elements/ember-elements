import Component from '@glimmer/component';

import * as navbarHeadingClasses from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common';

export type INavbarHeadingProps = IProps;

interface NavbarHeadingArgs extends INavbarHeadingProps {
  props: INavbarHeadingProps;
}

export default class NavbarHeading extends Component<NavbarHeadingArgs> {
  NAVBAR_HEADING = navbarHeadingClasses.NAVBAR_HEADING;

  get props() {
    return this.args.props || {};
  }

  get getNavbarHeadingClassNames() {
    let navbarHeadingClassName;

    if (this.args.className != undefined) {
      navbarHeadingClassName = this.args.className;
    } else if (this.props.className != undefined) {
      navbarHeadingClassName = this.props.className;
    }

    return navbarHeadingClassName;
  }
}
