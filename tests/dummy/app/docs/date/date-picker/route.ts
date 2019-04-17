import Route from '@ember/routing/route';

export default class DocsDateDatePicker extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('minimal', false);
      controller.set('placement', 'auto');
      controller.set('date', '03/04/2018');
    }
  }
}) {
  // normal class body definition here
}