import Component from '@glimmer/component';
// eslint-disable-next-line  ember/no-computed-properties-in-native-classes
import { reads } from '@ember/object/computed';

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
  @reads('props.className') className?: NavbarGroupArgs['className'];
  @reads('props.align') align?: NavbarGroupArgs['align'];

  NAVBAR_GROUP = navbarGroupClasses.NAVBAR_GROUP;

  get getNavbarDividerClassNames() {
    let navbarDividerClassName;

    if (this.args.className != undefined) {
      navbarDividerClassName = this.args.className;
    } else if (this.className != undefined) {
      navbarDividerClassName = this.className;
    }

    return navbarDividerClassName;
  }

  get getNavbarGroupAligns() {
    let navbarGroupAlign: Alignment = 'left';

    if (this.args.align != undefined) {
      navbarGroupAlign = this.args.align;
    } else if (this.align != undefined) {
      navbarGroupAlign = this.align;
    }

    return navbarGroupClasses.alignmentClass(navbarGroupAlign);
  }
}
