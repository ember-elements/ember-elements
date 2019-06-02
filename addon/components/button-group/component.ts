import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../-private/common/classes';
import { Alignment } from '../../-private/common/alignment';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { readOnly } from '@ember/object/computed';
export default class ButtonGroup extends Component {
  layout = template;

  classNameBindings = [`BUTTON_GROUP`, `vertical:${Classes.VERTICAL}`, `minimal:${Classes.MINIMAL}`, `large:${Classes.LARGE}`, `fill:${Classes.FILL}`, `aligntextStyle`]
  attributeBindings = [`inlineStyle:style`];

  @readOnly('alignText') aligntext?: Alignment;

  @computed('aligntext')
  get aligntextStyle() {
    return this.aligntext ? Classes.alignmentClass(this.aligntext) : '';
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  BUTTON_GROUP = Classes.BUTTON_GROUP;

  style?: any;
};
