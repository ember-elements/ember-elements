import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreNumericInput extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  disabled: boolean = false;
  fill: boolean = false;
  large: boolean = false;
  leftIcon: boolean = false;
  allowNumericCharactersOnly: boolean = true;
  selectAllOnFocus: boolean = false;
  selectAllOnIncrement: boolean = false;
  min: number = 0;
  intent: string = "none";
  max: number = 100;
  value: number = -11;
  buttonPosition: string = "right";
  MIN_VALUES = [
    { label: "None", value: -Infinity },
    { label: "-10", value: -10 },
    { label: "0", value: 0, selected: true },
    { label: "20", value: 20 },
  ];

  MAX_VALUES = [
    { label: "None", value: +Infinity },
    { label: "20", value: 20 },
    { label: "50", value: 50 },
    { label: "100", value: 100, selected: true },
  ];

  BUTTON_POSITIONS = [
    { label: "None", value: "none" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right", selected: true },
  ];
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
    else if (value == "fill")
      this.set('fill', !this.fill);
    else if (value == "large")
      this.set('large', !this.large);
    else if (value == "leftIcon")
      this.set('leftIcon', !this.leftIcon);
    else if (value == "allowNumericCharactersOnly")
      this.set('allowNumericCharactersOnly', !this.allowNumericCharactersOnly);
    else if (value == "selectAllOnFocus")
      this.set('selectAllOnFocus', !this.selectAllOnFocus);
    else if (value == "selectAllOnIncrement")
      this.set('selectAllOnIncrement', !this.selectAllOnIncrement);
  }
  @action
  onChangeMinValue(event: any) {
    this.set('min', +(event.target.value));
  }

  @action
  onChangeMaxValue(event: any) {
    this.set('max', +(event.target.value));
  }
  @action
  onChangePosValue(event: any) {
    this.set('buttonPosition', event.target.value);
  }
  @action
  onChangeIntentValue(event: any) {
    this.set('intent', event.target.value);
  }


  //2nd example
  @action
  handleBlur() {
    console.log('handleBlur');
  }
  @action
  handleKeyDown() {
    console.log('handleKeyDown');
  }
  @action
  handleValueChange() {
    console.log('handleValueChange');
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/numeric-input': DocsCoreNumericInput;
  }
}
