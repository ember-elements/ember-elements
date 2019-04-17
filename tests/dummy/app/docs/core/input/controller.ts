import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreInput extends Controller {
  // normal class body definition here
  isDisabled: boolean = false;
  intent: string = 'none';
  isFill: boolean = false;
  isRound: boolean = false;
  isReadOnly: boolean = false;
  isLarge: boolean = false;
  // BEGIN-SNIPPET docs-example-basic-text-input.ts


  @action
  onkeyDown(data: string, event: object) { //value of text input and events 
    console.log(data, event);
  }

  // END-SNIPPET
  @action
  selectIntent(e: any) {
    this.set('intent', e.target.value);
  }
  @action
  disableFun() {
    this.toggleProperty('isDisabled');
  }
  @action
  roundFun() {
    this.toggleProperty('isRound');
  }
  @action
  fillFun() {
    this.toggleProperty('isFill');
  }
  @action
  readOnlyFun() {
    this.toggleProperty('isReadOnly');
  }
  @action
  largeFun() {
    this.toggleProperty('isLarge');

  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/input': DocsCoreInput;
  }
}
