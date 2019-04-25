import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../../-private/common/classes';
import { classNames, attribute } from '@ember-decorators/component';
import Ember from 'ember';
@classNames(Classes.NAVBAR_HEADING)
export default class NavBarHeading extends Component {
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);

  layout = layout;
};
