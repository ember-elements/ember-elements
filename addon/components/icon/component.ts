import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { set, computed } from '@ember/object';
import { IconSvgPaths16, IconSvgPaths20 } from '../../-private/icons/iconSvgPaths';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { readOnly } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
export default class Icon extends Component {

  layout = template;
  tagName = 'span';
  attributeBindings = [`inlineStyle:style`];
  classNameBindings = [`ICON`, `intentStyle`];

  @readOnly('iconSize') iconsize?: number;

  @readOnly('intent') Intent?: Intent;

  @readOnly('icon') Icon!: string;

  @readOnly('color') Color!: string;

  @readOnly('title') Title!: string;

  @readOnly('style') Style!: string;

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

  @computed('Style')
  get inlineStyle() {
    return htmlSafe(this.Style);
  }

  ICON = Classes.ICON;
  private SIZE_STANDARD: number = 16;
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
      pathsSize = this.SIZE_STANDARD;

    const svgPathsRecord: any = pathsSize <= this.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
    const pathStrings = svgPathsRecord[iconName];

    if (pathStrings == null) {
      return null;
    }

    return pathStrings.map((d: any) => d);
  }
};
