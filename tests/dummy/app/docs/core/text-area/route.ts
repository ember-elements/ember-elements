import Route from '@ember/routing/route';

export default class DocsCoreTextArea extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('disabled', false);
      controller.set('fill', false);
      controller.set('large', false);
      controller.set('intent', "none");
      controller.set('leftIcon', "");
      controller.set('small', false);
      controller.set('readOnly', false);

    }
  }
}) {
  // normal class body definition here
}
