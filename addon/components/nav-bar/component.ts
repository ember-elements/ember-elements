import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../-private/common/classes';
import { classNames, attribute } from '@ember-decorators/component';
import Ember from 'ember';
@classNames(Classes.NAVBAR)
export default class NavBar extends Component {
  /**
   * Whether this navbar should be fixed to the top of the viewport (using CSS `position: fixed`).
  */
  fixedToTop?: boolean;

  @attribute('style') style: any = Ember.String.htmlSafe(this.style);

  classNameBindings = [`fixedToTop:${Classes.FIXED_TOP}`]

  layout = layout;
};
