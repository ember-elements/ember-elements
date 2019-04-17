import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { tagName, attribute } from '@ember-decorators/component';
import { readOnly } from '@ember-decorators/object/computed';
import { computed } from '@ember-decorators/object';
@tagName('span')
export default class ToolTip extends Component {
  @attribute tabindex = '0';

  @readOnly('content') Content!: string;

  @readOnly('targetClassName') targetclass!: string;
  
  @computed('Content')
  get toolTipContent() {
    return this.Content ? this.Content : `<em>This tooltip contains an <strong>em</strong> tag.</em>`;
  }

  intent!: string;
  popOverClass!: string;
  layout = layout;
  onMouseEnter!: (event: any) => void;
  onFocusIn!: (event: any) => void;
  placement: string = this.placement == undefined ? 'top' : this.placement;
  isOpen!: boolean;
  defaultIsOpen!: boolean;
  // normal class body definition here

  didReceiveAttrs() {
    if (this.get('isOpen') != undefined)
      this.set('defaultIsOpen', this.get('isOpen'));
    this.set('popOverClass', 'tooltip-popper ' + this.targetclass + ' ' + this.intent);
  }

  mouseLeave() {
    if (this.isOpen != undefined)
      return;
    this.set('defaultIsOpen', false);
  }

  mouseEnter(e: any) {
    if (this.isOpen != undefined)
      return;
    this.set('defaultIsOpen', true);
    if (this.get('onMouseEnter'))
      this.get('onMouseEnter')(e)
  }

  focusOut() {
    if (this.isOpen != undefined)
      return;
    this.set('defaultIsOpen', false);
  }

  focusIn(e:any) {
    if (this.isOpen != undefined)
      return;
    this.set('defaultIsOpen', true);
    if (this.get('onFocusIn'))
    this.get('onFocusIn')(e)
  }

};
