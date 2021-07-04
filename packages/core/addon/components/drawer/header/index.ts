import Component from '@glimmer/component';

import * as headerClasses from '../../../_private/common/classes';
// eslint-disable-next-line  @typescript-eslint/no-empty-interface
interface DrawerHeaderArgs {}

export default class Header extends Component<DrawerHeaderArgs> {
  DRAWER_HEADER = headerClasses.DRAWER_HEADER;
}
