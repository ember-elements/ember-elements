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
  className = 'hii';
  propsValue = {
    className: 'hgh',
    intent: 'primary',
    icon: 'tick',
  };
  size = 100;
  calloutText = `The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered `;
  elevationText = 'elevationText';
  elevation = 4;
  value = 0.4;
  @action
  onClick() {
    set(this.propsObject, 'active', !this.propsObject.active);
    set(this.propsObject, 'intent', 'success');
    set(this, 'className', '123');
    set(this.propsValue, 'icon', 'add');
    set(this, 'elevation', 2);
    set(this, 'size', 200);
    set(this, 'value', 0.8);
  }
  @action
  onKeyDown() {
    // console.log('onKeyDown');
  }
  @action
  onKeyUp() {
    // console.log('onKeyUp');
  }
  @action
  handleEnabledChange() {
    // console.log('hii');
  }
}
