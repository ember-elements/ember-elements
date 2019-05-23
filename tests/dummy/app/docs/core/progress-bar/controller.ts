import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreProgressBar extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  value: any = null;
  disabled = true;
  intent = "none";

  INTENT = [
    { label: "None", value: "none" },
    { label: "Primary", value: "primary" },
    { label: "Success", value: "success" },
    { label: "Warning", value: "warning" },
    { label: "Danger", value: "danger" },
  ];

  @action
  onSwitchChange() {
    this.set('disabled', !this.disabled);
  }

  @action
  onChangeIntentValue(event: any) {
    this.set('intent', event.target.value);
  }
  @action
  onValueChange(value: number) {
    this.set('value', value);
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/progress-bar': DocsCoreProgressBar;
  }
}
