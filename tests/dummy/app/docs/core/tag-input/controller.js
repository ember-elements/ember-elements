import Controller from '@ember/controller';
import Ember from 'ember';
import { action } from '@ember/object';

export default class DocsCoreTagInput extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-tag-input.js

  data: Array<string> = ['sku1', 'sku2'];
  @action
  saveTag(text: string) {
    Ember.A(this.data);
    var findDup = this.data.find((value) => {
      return value == text
    });
    if (findDup)
      return;
    this.data.pushObject(text);
  }
  @action
  deleteTag(index: number) {
    Ember.A(this.data);
    this.data.removeObject(this.data[index]);

  }
  // END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/tag-input': DocsCoreTagInput;
  }
}
