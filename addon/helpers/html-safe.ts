import { helper } from '@ember/component/helper';
import Ember from 'ember';

export function htmlSafe(params:Array<any>/*, hash*/) {
  var styleList = ['color:', 'background:'];
  var str = '';
  for (let index = 0; index < params.length; index++) {
    const element = params[index];
    if (element[0] == '#' && index < 2) {
      str += styleList[index] + element + ';';
    }
    else {
      str += element + ';'
    }
  }
  return Ember.String.htmlSafe(str);
}

export default helper(htmlSafe);
