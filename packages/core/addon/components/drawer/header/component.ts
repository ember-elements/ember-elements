import Component from '@glimmer/component';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';

// @ts-ignore
import layoutHeader from './template';
import * as headerClasses from '../../../_private/common/classes';
interface DrawerHeaderArgs {}

class Header extends Component<DrawerHeaderArgs> {
  DRAWER_HEADER = headerClasses.DRAWER_HEADER;
}
export default setComponentTemplate(layoutHeader, Header);
