import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { classNames, attribute } from '@ember-decorators/component';
import { Alignment } from "../../../-private/common/alignment";
import * as Classes from '../../../-private/common/classes';
import { readOnly } from '@ember-decorators/object/computed';
import { computed } from '@ember-decorators/object';
import Ember from 'ember';

@classNames(Classes.NAVBAR_GROUP)
export default class NavBarGroup extends Component {
  /**
     * The side of the navbar on which the group should appear.
     * The `Alignment` enum provides constants for these values.
     * @default Alignment.LEFT
  */

  @readOnly('align') aligntext?: Alignment;

  @attribute('style') style: any = Ember.String.htmlSafe(this.style);


  @computed('aligntext')
  get aligntextStyle() {
    return this.aligntext ? Classes.alignmentClass(this.aligntext) : '';
  }

  classNameBindings = [`aligntextStyle`];

  layout = layout;
};
