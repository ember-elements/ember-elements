import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../../-private/common/classes';
export default class DbDrawerBody extends Component {
  layout = template;
  classNameBindings = [`DRAWER_BODY`];

  DRAWER_BODY = Classes.DRAWER_BODY;
  // normal class body definition here
};
