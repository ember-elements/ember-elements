import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class DocsCoreRadio extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  disabled: boolean = false;
  inline: boolean = false;
  large: boolean = false;
  alignIndicator: string = "left";
  leftActive: boolean = true;
  rightActive: boolean = false;
  value: string = "one";

  @action
  onChangeProps(type: string) {
    if (type == 'disabled')
      this.set('disabled', !this.disabled);
    else if (type == 'large')
      this.set('large', !this.large);
    else if (type == 'inline')
      this.set('inline', !this.inline);
  }

  @action
  onTextAlign(type: string) {
    if (type == 'left') {
      this.set('alignIndicator', 'left');
      this.set('leftActive', true);
      this.set('rightActive', false);
    }
    else {
      this.set('alignIndicator', 'right');
      this.set('leftActive', false);
      this.set('rightActive', true);
    }
  }
  @action
  handleRadioChange(e: any) {
    this.set('value', e.target.value);
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/radio': DocsCoreRadio;
  }
}
