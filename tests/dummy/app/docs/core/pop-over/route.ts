import Route from '@ember/routing/route';

export default class DocsCorePopOver extends Route {
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('placement', 'auto');
      controller.set('arrow', true);
      controller.set('canOutsideClickClose', true);
      controller.set('canEscapeKeyClose', true);

    }
  }
  // normal class body definition here
}
