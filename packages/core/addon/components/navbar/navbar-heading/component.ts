import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';

// @ts-ignore
import navbarHeadingLayout from './template';

import * as navbarHeadingClasses from '../../../_private/common/classes';
import { IProps } from '../../../_private/common';

export interface INavbarHeadingProps extends IProps {}

interface NavbarHeadingArgs extends INavbarHeadingProps {
  props: INavbarHeadingProps;
}

class NavbarHeading extends Component<NavbarHeadingArgs> {
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

export default setComponentTemplate(navbarHeadingLayout, NavbarHeading);
