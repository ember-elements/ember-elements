import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import moment from 'moment';
export default class DocsDateDatePicker extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-date-picker.js

  format: string = 'DD-MM-YYYY'; //this is default date format 
  date: any = '03/04/2018';
  @action
  selectDate(date: any) {
    console.log('date is ', moment(date).format(this.format));// date convertion
  }
  // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/date/date-picker': DocsDateDatePicker;
  }
}
