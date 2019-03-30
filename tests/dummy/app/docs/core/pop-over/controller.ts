import Controller from '@ember/controller';

export default class DocsCorePopOver extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/pop-over': DocsCorePopOver;
  }
}
