import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import childMixins from '../../../mixins/tab';
import * as Classes from '../../../-private/common/classes';
import { classNames, attribute } from '@ember-decorators/component';
import Ember from 'ember';
@classNames(Classes.TAB_PANEL)
export default class TabsTab extends Component.extend(childMixins, {
}) {
  /**
     * Whether the tab is disabled.
     * @default false
     */
  disabled?: boolean;

  /**Default panel content is hidden  */
  "aria-hidden": string = "true";

  /**append required Attributes  */
  attributeBindings = ['role', 'aria-hidden']

  role: string = "tablist";

  /**Get selected panel id from tab title onClick function */
  selectedTabId?: string;

  @attribute('style') style: any = Ember.String.htmlSafe((this.style));

  didReceiveAttrs() {
    if (this.elementId && this.elementId == this.selectedTabId)
      this.set("aria-hidden", "false")
    else
      this.set("aria-hidden", "true")
  }

  layout = layout;
};
