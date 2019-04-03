import Route from '@ember/routing/route';

export default class DocsCoreButtonGroup extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('fill', false);
      controller.set('large', false);
      controller.set('vertical', false);
      controller.set('minimal', false);
      controller.set('alignText', "center");
      controller.set('leftActive', false);
      controller.set('centerActive', true);
      controller.set('rightActive', false);

      }
  }
}) {
  // normal class body definition here
}
