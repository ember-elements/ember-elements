import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class DocsCoreTextArea extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  disabled: boolean = false;
  readOnly: boolean = false;
  fill: boolean = false;
  large: boolean = false;
  small: boolean = false;
  intent!: any;
  INTENT = [
    { label: "None", value: "none" },
    { label: "Primary", value: "primary" },
    { label: "Success", value: "success" },
    { label: "Warning", value: "warning" },
    { label: "Danger", value: "danger" },
  ];
  @action
  onSwitchChange(value: string) {
    if (value == "disabled")
      this.set('disabled', !this.disabled);
    else if (value == "readOnly")
      this.set('readOnly', !this.readOnly);
    else if (value == "fill")
      this.set('fill', !this.fill);
    else if (value == "large")
      this.set('large', !this.large);
    else if (value == "small")
      this.set('small', !this.small);

  }

  @action
  onChangeIntentValue(event: any) {
    this.set('intent', event.target.value);
  }

  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/text-area': DocsCoreTextArea;
  }
}
