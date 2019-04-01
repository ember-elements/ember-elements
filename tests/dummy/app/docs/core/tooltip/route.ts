import Route from '@ember/routing/route';

export default class DocsCoreTooltip extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('isOpen', false);
      }
  }
}) {
  // normal class body definition here
}
