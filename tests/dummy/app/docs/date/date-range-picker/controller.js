import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import moment from 'moment';
export default class DocsDateDateRangePicker extends Controller{
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-date-range-picker.ts
  range: object = {
    start: new Date('3/1/2018'),
    end: new Date('3/20/2018')
  };
  format: string = 'DD-MM-YYYY'; //this is default date format 
  @action
  selectDate(date: object) {
    console.log('start date is ', moment(date.start).format(this.format));// date convertion
    console.log('end date is ', moment(date.end).format(this.format));// date convertion
  }
  // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/date/db-date-range-picker': DocsDateDateRangePicker;
  }
}
