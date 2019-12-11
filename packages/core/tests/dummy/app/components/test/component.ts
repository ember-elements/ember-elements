import Component from '@glimmer/component';
import { action, set } from '@ember/object';

interface TestArgs {}

export default class Test extends Component<TestArgs> {
  propsObject = {
    active: true,
    large: true,
    fill: false,
    intent: 'primary',
    icon: 'calendar',
    rightIcon: 'add',
  };
  text = 'button';
  @action
  onClick() {
    set(this.propsObject, 'active', !this.propsObject.active);
    set(this.propsObject, 'intent', 'success');
  }
  @action
  onKeyDown() {
    // console.log('onKeyDown');
  }
  @action
  onKeyUp() {
    // console.log('onKeyUp');
  }
}
