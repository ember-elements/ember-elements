import Route from '@ember/routing/route';

export default class DocsCoreProgressBar extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('value', null);
      controller.set('disabled', true);
      controller.set('intent', "none");
    }
  }
}) {
  // normal class body definition here
}