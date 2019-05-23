import Route from '@ember/routing/route';

export default class DocsCoreCallout extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('intent', 'none');
      controller.set('title', 'Visually important content');
      controller.set('icon', undefined);
    }
  }
}) {
  // normal class body definition here
}