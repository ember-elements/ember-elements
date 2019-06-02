import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsCoreCard extends Controller {
  // BEGIN-SNIPPET docs-example-basic-card.js

  elevation: number = 0;
  isInteractive: boolean = false;
  @action
  selectElevation(e: any) {
    this.set('elevation', e.target.value);
  }
  @action
  toggleInteractive() {
    this.toggleProperty('isInteractive');
    console.log('isInteractive', this.isInteractive)
  }
  //END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/card': DocsCoreCard;
  }
}
