import { helper } from '@ember/component/helper';
import Ember from 'ember';
export function findTagColor(params:Array<any>/*, hash*/) {
  var tagColor = params[0];
  var item = params[1];
  var bg_color = '#ddd';
  var fg_color: string = '#5c7080';
  var item: any;
  var defaultBg_color = params[2];
  var defaultFg_color = params[3];
  if (tagColor) {

    let isfind = tagColor.find((data: any) => {
      return data.tagName == item
    });
    if (isfind) {
      let bg = isfind.bgColor ? isfind.bgColor : (defaultBg_color ? defaultBg_color : bg_color);
      let fg = isfind.fgColor ? isfind.fgColor : (defaultFg_color ? defaultFg_color : fg_color);
      return Ember.String.htmlSafe('background-color:' + bg + ';color:' + fg);

    }
  }
  let bg = (defaultBg_color ? defaultBg_color : bg_color);
  let fg = (defaultFg_color ? defaultFg_color : fg_color);
  return Ember.String.htmlSafe('background-color:' + bg + ';color:' + fg);
}

export default helper(findTagColor);
