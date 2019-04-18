import Route from '@ember/routing/route';

export default class DocsCoreDrawer extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('isOpenDrawer', false);
      controller.set('vertical', false);
      controller.set('autoFocus', true);
      controller.set('enforceFocus', true);
      controller.set('hasBackdrop', true);
      controller.set('usePortal', true);
      controller.set('canOutsideClickClose', true);
      controller.set('canEscapeKeyClose', true);
      controller.set('isLeft', false);
      }
  }
}) {
  // normal class body definition here
}