import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { Alignment } from "../../../-private/common/alignment";
import * as Classes from '../../../-private/common/classes';
import { readOnly } from '@ember/object/computed';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class NavBarGroup extends Component {
  layout = layout;
  classNameBindings = [`NAVBAR_GROUP`, `aligntextStyle`];
  attributeBindings = [`inlineStyle:style`];

  /**
     * The side of the navbar on which the group should appear.
     * The `Alignment` enum provides constants for these values.
     * @default Alignment.LEFT
  */

  @readOnly('align') aligntext?: Alignment;

  @computed('aligntext')
  get aligntextStyle() {
    return this.aligntext ? Classes.alignmentClass(this.aligntext) : '';
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  NAVBAR_GROUP = Classes.NAVBAR_GROUP;

};
