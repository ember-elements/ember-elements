import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsSelectMultiSelect extends Controller {
  // normal class body definition here
   // BEGIN-SNIPPET docs-example-basic-multi-select-box.ts
   selected: Array<string> = ['hi1','hi2','hi3','hi4','hi5'];
   data: Array<string> = ['hi1','hi2','hi3','hi4','hi5','hi6','hi7','hi8','hi9','hi10','hi11','hi12'];
   selected2: Array<string> = ['hi1','hi2','hi3','hi4','hi5'];
   data2: Array<string> = ['hi1','hi2','hi3','hi4','hi5','hi6','hi7','hi8','hi9','hi10','hi11','hi12'];
   selected3: Array<string> = ['hi1','hi2'];
   data3: Array<string> = ['hi1','hi2','hi3','hi4','hi5','hi6',];
   tagColor:Array<object> = [
     {
       bgColor: 'red',
       fgColor: 'green',
       tagName: 'hi1',
     },
     {
       bgColor: '#d73a4a',
       fgColor: 'white',
       tagName: 'hi2',
     },
     {
       bgColor: '#db5ea5',
       fgColor: 'white',
       tagName: 'hi3',
     },
     {
       bgColor: '#a7f9f3',
       fgColor: 'white',
       tagName: 'hi4',
     },
     {
       bgColor: '#37cc61',
       fgColor: 'black',
       tagName: 'hi5',
     },
    ];
   @action
   optionSelected(options:Array<string>)
   {
 
   }
   @action
   onDelete(options:Array<string>)
   {
 
   }
   // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/select/multi-select': DocsSelectMultiSelect;
  }
}
