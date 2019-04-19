import Route from '@ember/routing/route';

export default class DocsCoreInputGroup extends Route {
  // normal class body definition here
  resetController(controller: any, isExiting: any, transition: any) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('isDisabled', false);
      controller.set('isSmall', false);
      controller.set('isLarge', false);
      controller.set('intent', "none");
      controller.set('tagValue', "");
      controller.set('icon', "lock");
      controller.set('type', "password");
      controller.set('content', "Show Password");
      controller.set('tagValueChange', Math.floor(10000 / Math.max(1, Math.pow(0, 2))));

    }
  }
}