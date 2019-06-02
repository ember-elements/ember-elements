import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class DocsCoreFormGroup extends Controller {
  // normal class body definition here
  helperText: string = "";
  label = "Label";
  requiredLabel = "(required)";
  disabled: boolean = false;
  inline: boolean = false;
  intent: string = 'none';
  @action
  onDisabled() {
    this.set('disabled', !this.disabled);
  }
  @action
  onInline() {
    this.set('inline', !this.inline);
  }
  @action
  onHelperText() {
    if (this.helperText != "") {
      this.set('helperText', "");
    }
    else
      this.set('helperText', "Helper text with details...");
  }
  @action
  onShowLabel() {
    if (this.label) {
      this.set('label', "");
    }
    else
      this.set('label', "Label");
  }
  @action
  onLabelInfo() {
    if (this.requiredLabel) {
      this.set('requiredLabel', "");
    }
    else
      this.set('requiredLabel', "(required)");
  }
  @action
  selectIntent(e: any) {
    this.set('intent', e.target.value);
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/form-group': DocsCoreFormGroup;
  }
}
