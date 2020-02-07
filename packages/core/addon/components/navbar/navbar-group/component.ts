import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';

// @ts-ignore
import navbarGroupLayout from './template';
import { Alignment } from '../../../_private/common/alignment';
import * as navbarGroupClasses from '../../../_private/common/classes';
import { IProps } from '../../../_private/common';

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

class NavbarGroup extends Component<NavbarGroupArgs> {
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
export default setComponentTemplate(navbarGroupLayout, NavbarGroup);
