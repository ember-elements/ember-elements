import Route from '@ember/routing/route';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
  beforeModel() {
    this.transitionTo('docs');
  }
}) {
  // normal class body definition here
}
