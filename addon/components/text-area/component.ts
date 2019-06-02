import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action } from '@ember-decorators/object';
import { Intent } from '../../-private/common/intent';
import * as Classes from "../../-private/common/classes";
export default class TextArea extends Component {
  layout = layout;
  tagName = 'span';
  classNameBindings = [`fill:${Classes.FILL}`];

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

  className?: string;

  FILL = Classes.FILL;
  LARGE = Classes.LARGE;
  SMALL = Classes.SMALL;
  INPUT = Classes.INPUT;
  INTENT = Classes.intentClass('none');

  onChange!: (event: any) => void;

  height!: number;
  classBind: string = this.INPUT;

  didReceiveAttrs() {
    this._super(...arguments);

    this.set('INTENT', Classes.intentClass(this.intent));

    this.set('classBind', [(`${this.INPUT} ${this.fill ? this.FILL : ''} ${this.large ? this.LARGE : ''}  ${this.small ? this.SMALL : ''} ${this.INTENT ? this.INTENT : ''} ${this.className ? this.className : ''}`).trim()]);
  }

  @action
  onChangeArea(e: any) {
    if (this.growVertically) {
      this.set('height', e.target.scrollHeight)
        (this.element.querySelector('textarea') as HTMLElement || {}).style.height = this.height + "px";
    }
    if (this.get('onChange'))
      this.get('onChange')(e);
  }
};
