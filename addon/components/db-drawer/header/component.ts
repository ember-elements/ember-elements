import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../../-private/common/classes';
export default class DbDrawerHeader extends Component {
  layout = template;
  classNameBindings = ['DRAWER_HEADER'];

  DRAWER_HEADER = Classes.DRAWER_HEADER;
  // normal class body definition here
};
