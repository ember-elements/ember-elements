import Route from '@ember/routing/route';

export default class DocsCorePanelStack extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('componentName', "create-panel");
      controller.set('title', "panel1");
      controller.set('panelList', [
        {
          title: 'panel1',
          component: 'create-panel'
        }
      ]);

      }
  }
}) {
  // normal class body definition here
}