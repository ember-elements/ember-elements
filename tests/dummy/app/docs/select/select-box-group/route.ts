import Route from '@ember/routing/route';

export default class DocsSelectSelectBoxGroup extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('selected', 'city');
      controller.set('minimal', false);
      controller.set('placement', 'auto');
      controller.set('selected2', 'address1');

    }
  }
}) {
  // normal class body definition here
}
