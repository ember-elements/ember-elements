import Controller from '@ember/controller';
import { FocusStyleManager } from '../../Accessibility/focusStyleManager';
import { action } from '@ember-decorators/object';

export default class DocsAccessibility extends Controller {
  isChecked: boolean = true;
  // normal class body definition here
  // init() {
  //   FocusStyleManager.onlyShowFocusOnTabs();
  // }
  @action
  onChange() {
    this.toggleProperty('isChecked');
    // if (this.isChecked)
    //   FocusStyleManager.onlyShowFocusOnTabs();
    // else
    //   FocusStyleManager.alwaysShowFocus();
  }
}
// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/accessibility': DocsAccessibility;
  }
}
