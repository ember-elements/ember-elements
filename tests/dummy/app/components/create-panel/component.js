import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action } from '@ember/object';

import Ember from 'ember';
export default class CreatePanel extends Component {
  // BEGIN-SNIPPET docs-example-basic-create-panel.js

  panelList: Array<object>;
  sendComponentName!: (ComponentName: string) => void;
  @action
  openNewpanel() {

    Ember.A(this.get('panelList'));
    this.panelList.pushObject({ title: `panel ${this.panelList.length + 1}`, component: 'create-panel' });
    if (this.get('sendComponentName'))
      this.get('sendComponentName')('create-panel');
  }
  // END-SNIPPET
  layout = layout;
  // normal class body definition here
};
