import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsSelectSelectBoxGroup extends Controller {
   // BEGIN-SNIPPET docs-example-basic-select-box-group.ts
   selected: string = 'city';
   data: Array<object> = [
     { groupName: 'address', options: ['address', 'city', 'state'] },
     { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
     { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
     { options: ['hi12', 'hi13'] }
 
   ];
   selected2: string = 'hi2';
   data2: Array<object> = [
     { groupName: 'address', options: ['address', 'city', 'state'] },
     { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
     { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
     { options: ['hi12', 'hi13'] }
 
   ];
   selected3: string = 'state';
   data3: Array<object> = [
     { groupName: 'address', options: ['address', 'city', 'state'] },
     { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
     { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
     { options: ['hi12', 'hi13'] }
 
   ];
   @action
   optionSelected(selectedValue: string, index: number,optionIndex:number) {
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
