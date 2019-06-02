import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action } from '@ember/object';
export default class ToggleSwitch extends Component {
  layout = layout;

  data!: boolean;

  onClick!: (data: any) => void;

  @action
  toggle(state: boolean) {
    this.set('data', state);
    if (this.get('onClick'))
      this.get('onClick')(this.get('data'));
  }

};
