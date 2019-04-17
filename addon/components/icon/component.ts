import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, className, layout } from '@ember-decorators/component';
import { attribute } from '@ember-decorators/component';
import { set } from '@ember/object';
import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { IconSvgPaths16, IconSvgPaths20 } from '../../-private/icons/iconSvgPaths';
import * as Classes from '../../-private/common/classes';
import {Intent} from '../../-private/common/intent';
@layout(template)
@tagName('span')
@classNames(Classes.ICON)
export default class Icon extends Component {
  @readOnly('iconSize') iconsize?: number;
 
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);
 
  @readOnly('intent') Intent?: Intent;
 
  @readOnly('icon') Icon!: string;
 
  @readOnly('color') Color!: string;
 
  @readOnly('title') Title!: string;
 
  @className
  @computed('Intent')
  get intentStyle() {
    return this.Intent ? Classes.intentClass(this.Intent) : ``;
  }
 
  @computed('Icon')
  get titleValue() {
    return this.Title || this.Icon;
  }
 
  @computed('iconsize')
  get viewBox() {
    return (this.iconsize as number) > this.SIZE_STANDARD ? '0 0 20 20' : '0 0 16 16';
  }
 
  @computed('iconsize')
  get heightWidth() {
    return this.iconsize == undefined ? 16 : this.iconsize;
  }
 
  @computed('Color')
  get getColor() {
    return this.Color ? `${this.Color}` : 'currentColor';
  }
 
  SIZE_STANDARD: number = 16;
  SIZE_LARGE: number = 20;
  paths!: any;

  didReceiveAttrs() {
    const pathStrings = this.svgPaths(this.iconsize as number, this.Icon);
    if (pathStrings == null) {
      throw new Error('icon name is not valid');
    } else
      set(this, 'paths', pathStrings);
  }
  
  svgPaths(pathsSize: number, iconName: string) {
    if (pathsSize == undefined)
      pathsSize = 16;

    const svgPathsRecord:any = pathsSize <= this.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
    const pathStrings = svgPathsRecord[iconName];
    if (pathStrings == null) {
      return null;
    }
    return pathStrings.map((d:any) => d);
  }
};
