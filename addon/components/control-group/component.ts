import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
export default class ControlGroup extends Component {
  layout = layout;

  /**
    * Whether the control group should take up the full width of its container.
    * @default false
    */
  fill?: boolean;

  /**
   * Whether the control group should appear with vertical styling.
   * @default false
   */
  vertical?: boolean;

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  classNameBindings = [`CONTROL_GROUP`, `fill:${Classes.FILL}`, `vertical:${Classes.VERTICAL}`];

  attributeBindings = ['inlineStyle:style'];

  CONTROL_GROUP = Classes.CONTROL_GROUP;
};
