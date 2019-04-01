import Route from '@ember/routing/route';

export default class DocsCoreInput extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('isDisabled', false);
      controller.set('isRound', false);
      controller.set('isFill', false);
      controller.set('isReadOnly', false);
      controller.set('isLarge', false);
      controller.set('intent', "none");

      }
  }
}) {
  // normal class body definition here
}