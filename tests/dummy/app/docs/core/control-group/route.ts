import Route from '@ember/routing/route';

export default class DocsCoreControlGroup extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('fill', false);
      controller.set('vertical', false);
      controller.set('style', undefined);
    }
  }
}) {
  // normal class body definition here
}