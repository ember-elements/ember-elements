import Route from '@ember/routing/route';

export default class DocsCoreFileInput extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('hasSelection', false);
      controller.set('disabled', false);
      controller.set('large', false);
      controller.set('fill', false);
    }
  }
}) {
  // normal class body definition here
}

