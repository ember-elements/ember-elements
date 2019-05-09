import Route from '@ember/routing/route';

export default class DocsCoreNumericInput extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('disabled', false);
      controller.set('fill', false);
      controller.set('large', false);
      controller.set('intent', "none");
      controller.set('leftIcon', "");
      controller.set('allowNumericCharactersOnly', true);
      controller.set('value', "");
      controller.set('selectAllOnFocus', false);
      controller.set('selectAllOnIncrement', false);
      controller.set('min', 0);
      controller.set('max', 100);
      controller.set('buttonPosition', "right");

    }
  }
}) {
  // normal class body definition here
}
