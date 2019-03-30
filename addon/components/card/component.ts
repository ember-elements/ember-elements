import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, attribute, className, layout } from '@ember-decorators/component';
import {  readOnly } from '@ember-decorators/object/computed';
import { computed } from '@ember-decorators/object';
import * as Classes from "../../-private/common/classes";
import {Elevation} from "../../-private/common/elevation";

@layout(template)
@tagName('div')
@classNames(Classes.CARD)
export default class Card extends Component {
  @readOnly('interactive') Interactive!: boolean;
  @readOnly('elevation') Elevation: Elevation;
  @attribute('style') style: any = Ember.String.htmlSafe((this.style));
  @className
  @computed('Elevation')
  get elevationStyle() {
    return this.Elevation ? Classes.elevationClass(this.Elevation) : Classes.ELEVATION_0;
  }
  @className
  @computed('Interactive')
  get interactiveStyle() {
    return this.Interactive ? Classes.INTERACTIVE : '';
  }
  onClick!: (event: any) => void;
  click(event: any) {
    if (this.get('onClick'))
      this.get('onClick')(event);
  }
};
