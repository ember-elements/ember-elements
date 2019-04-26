import Route from '@ember/routing/route';

export default class DocsCoreTabs extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('animate', false);
      controller.set('vertical', false);
      controller.set('heading', "Home");
      controller.set('renderActiveTabPanelOnly', false);
    }
  }
}) {
  // normal class body definition here
}
