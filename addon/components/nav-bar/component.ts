import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class NavBar extends Component {
  layout = layout;

  /**
   * Whether this navbar should be fixed to the top of the viewport (using CSS `position: fixed`).
  */
  fixedToTop?: boolean;

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  classNameBindings = [`NAVBAR`, `fixedToTop:${Classes.FIXED_TOP}`];
  attributeBindings = ['inlineStyle:style'];

  NAVBAR = Classes.NAVBAR;

};
