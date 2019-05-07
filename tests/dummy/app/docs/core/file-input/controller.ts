import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreFileInput extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  hasSelection: boolean = false;
  disabled: boolean = false;
  large: boolean = false;
  fill: boolean = false;
  @action
  onSwitchChange(value: string) {
    if (value == "hasSelection")
      this.set('hasSelection', !this.hasSelection);
    else if (value == "disabled")
      this.set('disabled', !this.disabled);
    else if (value == "fill")
      this.set('fill', !this.fill);
    else if (value == "large")
      this.set('large', !this.large);
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/file-input': DocsCoreFileInput;
  }
}
