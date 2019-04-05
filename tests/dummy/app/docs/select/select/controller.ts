import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsSelectSelect extends Controller {
  // normal class body definition here
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-select-box.ts
  selected: string = 'April';
  minimal: boolean = false;
  placement:string='auto';
  data: Array < string > =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  selected2: string = 'February';
  data2: Array < string > =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  @action
  optionSelected(selectedValue: string, index: number) {

  }
  @action
  onMinimalPopover() {
    this.set('minimal', !this.minimal);
  }
  @action
  selectPositon(e: any) {
    this.set('placement', e.target.value);
  }
  // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/select/select': DocsSelectSelect;
  }
}

