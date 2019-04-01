import Route from '@ember/routing/route';

export default class DocsCoreCard extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('elevation', 0);
      controller.set('isInteractive', false);
      }
  }
}) {
  // normal class body definition here
}