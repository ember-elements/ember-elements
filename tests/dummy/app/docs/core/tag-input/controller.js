import Controller from '@ember/controller';
import {
  action
} from '@ember-decorators/object';
import Ember from 'ember';

export default class DocsCoreTagInput extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-tag-input.js

  leftIcon: boolean = true;
  large: boolean = false;
  disabled: boolean = false;
  addOnBlur: boolean = false;
  addOnPaste: boolean = true;
  fill: boolean = false;
  values: Array<any> = ['<strong key="al">Albert</strong>', ["Bar", '<em key="thol">thol</em>', "omew"], "Casper", undefined,];
  getTagProps: object = {
    minimal: false,
  }
  INTENT = [
    { label: "None", value: "none" },
    { label: "Primary", value: "primary" },
    { label: "Success", value: "success" },
    { label: "Warning", value: "warning" },
    { label: "Danger", value: "danger" },
  ];
  // END-SNIPPET
  @action
  onSwitchChange(type) {
    if (type == "large") {
      this.set('large', !this.large);
    }
    else if (type == "disabled") {
      this.set('disabled', !this.disabled);
    }
    else if (type == "leftIcon") {
      this.set('leftIcon', !this.leftIcon);
    }
    else if (type == "addOnBlur") {
      this.set('addOnBlur', !this.addOnBlur);
    }
    else if (type == "addOnPaste") {
      this.set('addOnPaste', !this.addOnPaste);
    }
    else if (type == "fill") {
      this.set('fill', !this.fill);
    }
    else if (type == "minimal") {
      this.set('getTagProps.minimal', !this.getTagProps.minimal);
    }

  }
  @action
  onChangeIntentValue(event: any) {
    this.set('intent', event.target.value);
  }
  @action
  handleClear() {
    if (this.values.length > 0)
      this.set('values', []);
    else
      this.set('values', [' <strong key="al">Albert</strong>', ["Bar", '<em key="thol">thol</em>', "omew"], "Casper", undefined,]);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/tag-input': DocsCoreTagInput;
  }
}
