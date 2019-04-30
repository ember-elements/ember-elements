import Route from '@ember/routing/route';

export default class DocsCoreSwitch extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('alignIndicator', 'left');
      controller.set('disabled', false);
      controller.set('inline', false);
      controller.set('large', false);
      controller.set('leftActive', true);
      controller.set('rightActive', true);

    }
  }
}) {
  // normal class body definition here
}