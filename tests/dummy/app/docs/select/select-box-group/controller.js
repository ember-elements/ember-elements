import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsSelectSelectBoxGroup extends Controller {
   // BEGIN-SNIPPET docs-example-basic-select-box-group.ts
   selected: string = 'city';
   minimal: boolean = false;
   placement:string='auto';
   data: Array<object> = [
     { groupName: 'address', options: ['address', 'city', 'state'] },
     { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
     { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
     { options: ['phone', 'telephone'] }
 
   ];
   selected2: string = 'address1';
   data2: Array<object> = [
     { groupName: 'address', options: ['address', 'city', 'state'] },
     { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
     { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
     { options: ['phone', 'telephone'] }
 
   ];
   @action
   optionSelected(selectedValue: string, index: number,optionIndex:number) {
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
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/select/select-box-group': DocsSelectSelectBoxGroup;
  }
}
