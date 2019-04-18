import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { FocusStyleManager } from '../../-private/Accessibility/focusStyleManager';

export default class Accessibility extends Component {
  layout = layout;
  isFocusOnTabs: boolean = true;
  init() {
    super.init();
    FocusStyleManager.onlyShowFocusOnTabs();
  }
  didReceiveAttrs() {
    if (this.get('isFocusOnTabs'))
      FocusStyleManager.onlyShowFocusOnTabs();
    else
      FocusStyleManager.alwaysShowFocus();

  }
  // normal class body definition here
};
