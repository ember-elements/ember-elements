import Route from '@ember/routing/route';

export default class DocsCoreNavBar extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('align', "left");
    }
  }
  // normal class body definition here
}
