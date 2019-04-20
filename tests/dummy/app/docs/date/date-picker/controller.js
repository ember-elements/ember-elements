import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import moment from 'moment';
export default class DocsDateDatePicker extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-date-picker.js
  minimal: boolean = false;
  placement: string = 'auto';
  format: string = 'DD-MM-YYYY'; //this is default date format 
  date: any = '03/04/2018';
  InputGroupProps: object = {
    leftIcon: 'calendar',
    placeholder: this.format,
  }
  @action
  selectDate(date: any) {
    console.log('date is ', moment(date).format(this.format));// date convertion
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
  @action
  openInputGroupProps() {
    this.set('isOpenDrawer', true);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/date/date-picker': DocsDateDatePicker;
  }
}
