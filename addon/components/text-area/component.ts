import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { tagName } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';
import { htmlSafe } from '@ember/string';
import { Intent } from '../../-private/common/intent';
import * as Classes from "../../-private/common/classes";

@tagName('span')
export default class TextArea extends Component {
  layout = layout;

  /**
    * Whether the text area should take up the full width of its container.
    */
  fill?: boolean;

  /**
   * Whether the text area should appear with large styling.
   */
  large?: boolean;

  /**
   * Whether the text area should appear with small styling.
   */
  small?: boolean;

  /**
   * Whether the text area should automatically grow vertically to accomodate content.
   */
  growVertically?: boolean;

  /**Intent style */
  intent?: Intent;

  FILL = this.fill ? Classes.FILL : '';
  LARGE = this.large ? Classes.LARGE : '';
  SMALL = this.small ? Classes.SMALL : '';
  INPUT = Classes.INPUT;
  INTENT = Classes.intentClass('none');

  onChange!: (event: any) => void;
  textAreaHeight!: any;
  height!: number;

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('INTENT', Classes.intentClass(this.intent))
  }

  @action
  onChangeArea(e: any) {
    if (this.growVertically) {
      this.set('height', e.target.scrollHeight)
      this.set('textAreaHeight', htmlSafe(`height:${this.height}`));
    }
    if (this.get('onChange'))
      this.get('onChange')(e);
  }
};
