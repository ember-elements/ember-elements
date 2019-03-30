import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsSelectSelectBox extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-select-box.ts
  selected: string = 'hi1';
  data: Array<string> = ['hi1', 'hi2', 'hi3', 'hi4', 'hi5', 'hi6', 'hi7', 'hi8', 'hi9', 'hi10', 'hi11', 'hi12'];
  selected2: string = 'hi2';
  data2: Array<string> = ['hi1', 'hi2', 'hi3', 'hi4', 'hi5', 'hi6', 'hi7', 'hi8', 'hi9', 'hi10', 'hi11', 'hi12'];
  selected3: string = 'hi6';
  data3: Array<string> = ['hi1', 'hi2', 'hi3', 'hi4', 'hi5', 'hi6',];

  @action
  optionSelected(selectedValue: string, index: number) {

  }
  // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/select/select-box': DocsSelectSelectBox;
  }
}
