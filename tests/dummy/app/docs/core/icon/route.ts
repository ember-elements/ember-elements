import Route from '@ember/routing/route';

export default class DocsCoreIcon extends Route.extend({
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('value', 16);
      controller.set('intent', "none");
      }
  }
}) {
  // normal class body definition here
}
