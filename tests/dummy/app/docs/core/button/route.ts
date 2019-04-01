import Route from '@ember/routing/route';

export default class DocsCoreButton extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('fill', false);
      controller.set('text', 'sample button');
      controller.set('active', false);
      controller.set('minimal', false);
      controller.set('disabled', false);
      controller.set('intent', "none");
      controller.set('small', false);
      controller.set('large', false);
      controller.set('icon', 'floppy-disk');
      controller.set('rightIcon', '');

      }
  }
}) {
  // normal class body definition here
}
