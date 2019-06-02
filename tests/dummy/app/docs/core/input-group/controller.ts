import Controller from '@ember/controller';
import { action } from '@ember/object';
import Ember from 'ember';

export default class DocsCoreInputGroup extends Controller {
  // normal class body definition here
  isDisabled: boolean = false;
  intent: string = 'none';
  isSmall: boolean = false;
  isLarge: boolean = false;
  tagValue: string = "";
  icon: string = "lock";
  type: string = "password";
  content: string = "Show Password";
  data: Array<string> = ['can edit', 'can view'];
  selected: string = 'can edit';
  tagValueChange: number = Math.floor(10000 / Math.max(1, Math.pow(this.tagValue.length, 2)));
  ButtonProps: any = {
    minimal: true,
    rightIcon: 'caret-down',
    disabled: this.isDisabled
  }
  // BEGIN-SNIPPET docs-example-basic-input-group.ts
  @action
  OnClick() {
    if (this.type == 'password') {
      this.set('type', 'text');
      this.set('content', 'Hide Password');
      this.set('icon', 'unlock');
    }
    else {
      this.set('type', 'password');
      this.set('icon', 'lock');
      this.set('content', 'Show Password');
    }
  }
  @action
  onkeyDown(data: string, event: object) { //value of text input and events 
    console.log(data, event);
    this.set('tagValue', data);
    this.set('tagValueChange', Math.floor(10000 / Math.max(1, Math.pow(this.tagValue.length, 2))));

  }

  // END-SNIPPET
  @action
  optionSelected(selectedValue: string, index: number) {
    console.log(selectedValue, index);
  }
  @action
  selectIntent(e: any) {
    this.set('intent', e.target.value);
  }
  @action
  disableFun() {
    this.toggleProperty('isDisabled');
    Ember.set(this.ButtonProps, 'disabled', this.isDisabled);
  }
  @action
  smallFun() {
    this.toggleProperty('isSmall');
  }
  @action
  largeFun() {
    this.toggleProperty('isLarge');

  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/input-group': DocsCoreInputGroup;
  }
}
