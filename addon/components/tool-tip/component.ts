import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { readOnly } from '@ember/object/computed';
import { computed, get } from '@ember/object';
export default class ToolTip extends Component {
  tagName = 'span';
  attributeBindings = [`tabIndex:tabIndex`];

  @readOnly('content') Content!: string;

  @readOnly('targetClassName') targetclass!: string;

  @computed('Content')
  get toolTipContent() {
    return this.Content ? this.Content : `<em>This tooltip contains an <strong>em</strong> tag.</em>`;
  }

  tabIndex = '0';
  intent!: string;
  popOverClass!: string;
  layout = layout;
  placement: string = this.setPlacement();
  isOpen!: boolean;
  defaultIsOpen!: boolean;
  // normal class body definition here

  onMouseEnter!: (event: any) => void;
  onFocusIn!: (event: any) => void;

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

  focusIn(e: any) {
    if (this.isOpen != undefined)
      return;
    this.set('defaultIsOpen', true);
    if (this.get('onFocusIn'))
      this.get('onFocusIn')(e)
  }

  setPlacement() {
    return get(this, 'placement') == undefined ? 'top' : get(this, 'placement');
  }

};
