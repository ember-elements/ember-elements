import Route from '@ember/routing/route';

export default class DocsCoreHtmlSelect extends Route.extend({
  // anything which *must* be merged to prototype here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('disabled', false);
      controller.set('fill', false);
      controller.set('large', false);
      controller.set('minimal', false);
      controller.set('isOpenIconDrawer', false);
      controller.set('isOpenOptionDrawer', false);

    }
  }
}) {
  // normal class body definition here
}