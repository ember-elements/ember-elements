import Route from '@ember/routing/route';

export default class DocsCoreIcon extends Route.extend({
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('value', 16);
      controller.set('intent', "none");
      }
  }
}) {
  // normal class body definition here
}
