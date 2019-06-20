import Route from '@ember/routing/route';

export default class DocsCoreAlert extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('isOpenError', false);
      controller.set('isOpen', false);
      controller.set('canEscapeKeyCancel', false);
      controller.set('canOutsideClickCancel', false);
    }
  }
}) {
  // normal class body definition here
}