
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { classNames, tagName, layout } from '@ember-decorators/component';
import { attribute } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import { get } from '@ember/object';
import { readOnly } from '@ember-decorators/object/computed';
import * as Classes from "../../-private/common/classes";

@layout(template)
@tagName('div')
export default class TagItem extends Component {
  @attribute('style') style: any = Ember.String.htmlSafe(this.style);
  @readOnly('disabled') Disabled!:boolean;
  @readOnly('iconSize') IconSize!:boolean;
  @readOnly('item') Item!:string;
  bg_color: string = '#ddd';
  fg_color: string = '#5c7080';
  defaultBg_color: any;
  defaultFg_color: any;
  tagColor!: any[];
  TAG: string = Classes.TAG;
  TEXT_OVERFLOW_ELLIPSIS: string = Classes.TEXT_OVERFLOW_ELLIPSIS;
  FILL: string = Classes.FILL;
  TAG_REMOVE: string = Classes.TAG_REMOVE;

  onDelete!: (item: any) => void;

  @computed('bgColor', 'fgColor','tagColor')
  get setStyle(): any {
    if (get(this, 'tagColor')) {
    
      let isfind = this.tagColor.find((data: any) => {
        return data.tagName == this.Item
      });
      if (isfind) {
        let bg = isfind.bgColor ? isfind.bgColor : (this.defaultBg_color ? this.defaultBg_color : this.bg_color);
        let fg = isfind.fgColor ? isfind.fgColor : (this.defaultFg_color ? this.defaultFg_color : this.fg_color);
        return Ember.String.htmlSafe('background-color:' + bg + ';color:' + fg);

      }
    }
    let bg = (this.defaultBg_color ? this.defaultBg_color : this.bg_color);
    let fg = (this.defaultFg_color ? this.defaultFg_color : this.fg_color);
    return Ember.String.htmlSafe('background-color:' + bg + ';color:' + fg);
  }
  @action
  ondelete(item: any) {
    if (this.get('onDelete'))
      this.get('onDelete')(item);
  }

};
