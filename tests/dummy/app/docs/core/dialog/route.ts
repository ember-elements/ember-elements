import Route from '@ember/routing/route';

export default class DocsCoreDialog extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('isOpen', false);
      controller.set('autoFocus', true);
      controller.set('enforceFocus', true);
      controller.set('canEscapeKeyClose', true);
      controller.set('usePortal', true);
      controller.set('canOutsideClickClose', true);
    }
  }
}) {
  // normal class body definition here
}
