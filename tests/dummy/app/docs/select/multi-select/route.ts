import Route from '@ember/routing/route';

export default class DocsSelectMultiSelect extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('selected', ['January','April','May']);
      controller.set('minimal', false);
      controller.set('minimalPopover', false);
      controller.set('placement', 'auto');
      controller.set('selected2', ['February','March','April']);
      controller.set('selected3', ['July','August']);

    }
  }
}) {
  // normal class body definition here
}
