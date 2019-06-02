import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../../-private/common/classes';
export default class DbDrawerFooter extends Component {
  layout = template;
  classNameBindings = [`DRAWER_FOOTER`];

  DRAWER_FOOTER = Classes.DRAWER_FOOTER;
  // normal class body definition here
};
