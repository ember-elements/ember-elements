import Route from '@ember/routing/route';

export default class DocsDateDateRangePicker extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('minimal', false);
      controller.set('placement', 'auto');
      controller.set('range', {
        start: new Date('3/1/2018'),
        end: new Date('3/20/2018')
      });
    }
  }
}) {
  // normal class body definition here
}
