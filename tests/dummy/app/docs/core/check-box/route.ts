import Route from '@ember/routing/route';

export default class DocsCoreCheckBox extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('disabled', false);
      controller.set('inline', false);
      controller.set('large', false);
      controller.set('alignIndicator', "left");
      controller.set('leftActive', true);
      controller.set('rightActive', false);
    }
  }
}) {
  // normal class body definition here
}
