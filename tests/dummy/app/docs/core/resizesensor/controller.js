import Controller from '@ember/controller';
import { action } from '@ember/object';

import Ember from 'ember';
interface IResizeEntry {
  /** Measured dimensions of the target. */
  contentRect: DOMRectReadOnly;

  /** The resized element. */
  target: Element;
}
export default class DocsCoreResizesensor extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-resizesensor.ts

  width!: number;
  @action
  handleResize(entries: IResizeEntry[]) {
    console.log(entries.map(e => `${e.contentRect.width} x ${e.contentRect.height}`));
    for (const entry of entries) {
      const { left, top, width, height } = entry.contentRect;
      this.set('width', Ember.String.htmlSafe(`width:${width}`));
    }
  }
  //END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/resizesensor': DocsCoreResizesensor;
  }
}
