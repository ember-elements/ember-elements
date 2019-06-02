import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../../-private/common/classes';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class NavBarDivider extends Component {

  layout = layout;
  classNameBindings = [`NAVBAR_DIVIDER`];
  attributeBindings = [`inlineStyle:style`];

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  NAVBAR_DIVIDER = Classes.NAVBAR_DIVIDER;
};
