
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { reads } from '@ember-decorators/object/computed';
import { classNames, tagName } from '@ember-decorators/component';
@tagName('div')
@classNames('rounded', 'px1', 'flex-auto', 'center', 'cursor-pointer', 'link-quiet')
export default class ToggleSwitchItem extends Component {
  layout = layout;
  
  @reads('active') Active!: boolean;
  
  classNameBindings = [ 'Active:text-white', 'Active:gray','Active:cursor-default'];
  // attributeBindings: ['type'],

  // normal class body definition here
};
