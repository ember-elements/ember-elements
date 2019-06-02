
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { readOnly } from '@ember/object/computed';
export default class ToggleSwitchItem extends Component {
  layout = layout;

  @readOnly('active') Active!: boolean;

  classNameBindings = ['rounded', 'px1', 'flex-auto', 'center', 'cursor-pointer', 'link-quiet', 'Active:text-white', 'Active:gray', 'Active:cursor-default',];
  // attributeBindings: ['type'],

  // normal class body definition here
};
