import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { readOnly } from '@ember-decorators/object/computed';
import * as Classes from "../../-private/common/classes";
import { Alignment } from "../../-private/common/alignment";
import { computed } from '@ember-decorators/object';
@layout(template)
@tagName('div')
@classNames(Classes.BUTTON_GROUP)
export default class ButtonGroup extends Component {
  @attribute('style') style: string = Ember.String.htmlSafe(this.style);

  @className(Classes.VERTICAL)
  vertical: boolean = false;
  
  @className(Classes.MINIMAL)
  minimal: boolean = false;
  
  @className(Classes.LARGE)
  large: boolean = false;
  
  @className(Classes.FILL)
  fill: boolean = false;
  
  @readOnly('alignText') aligntext: Alignment;
  
  @className
  @computed('aligntext')
  get aligntextStyle() {
    return this.aligntext ? Classes.alignmentClass(this.aligntext) : '';
  }
};
