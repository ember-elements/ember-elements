import Route from '@ember/routing/route';

export default class DocsCoreOverflowList extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('fromValue', "START");
      controller.set('value', 50);
      }
  }
}) {
  // normal class body definition here
}
