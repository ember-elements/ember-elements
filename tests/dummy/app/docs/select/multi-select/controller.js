import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsSelectMultiSelect extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-multi-select-box.ts
  minimal: boolean = false;
  minimalPopover: boolean = false;
  placement: string = 'auto';
  selected: Array<string> = ['January', 'April', 'May'];
  data: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  selected2: Array<string> = ['February', 'March', 'April'];
  data2: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  selected3: Array<string> = ['July', 'August'];
  data3: Array<string> = ["July", "August", "September", "October", "November", "December",];
  @action
  optionSelected(options: Array<string>) {

  }
  @action
  onDelete(options: Array<string>) {

  }
  @action
  onMinimalPopover() {
    this.set('minimalPopover', !this.minimalPopover);
  }
  @action
  selectPositon(e: any) {
    this.set('placement', e.target.value);
  }
  @action
  onMinimalTag() {
    this.set('minimal', !this.minimal);

  }
  // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/select/multi-select': DocsSelectMultiSelect;
  }
}
