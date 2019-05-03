import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { classNames } from '@ember-decorators/component';
import Ember from 'ember';
@classNames(Classes.CONTROL_GROUP)
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

  style: any = Ember.String.htmlSafe(this.style);

  classNameBindings = [`fill:${Classes.FILL}`, `vertical:${Classes.VERTICAL}`];

  attributeBindings = ['style:style'];
};
