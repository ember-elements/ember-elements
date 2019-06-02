import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import childMixins from '../../../mixins/tab';
import * as Classes from '../../../-private/common/classes';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class TabsTab extends Component.extend(childMixins, {
}) {
  classNameBindings = [`TAB_PANEL`];
  /**
     * Whether the tab is disabled.
     * @default false
     */
  disabled?: boolean;

  /**Default panel content is hidden  */
  "aria-hidden": string = "true";

  /**append required Attributes  */
  attributeBindings = ['role', 'aria-hidden', `inlineStyle:style`];

  role: string = "tablist";

  /**Get selected panel id from tab title onClick function */
  selectedTabId?: string;

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  TAB_PANEL = Classes.TAB_PANEL;

  didReceiveAttrs() {
    if (this.elementId && this.elementId == this.selectedTabId)
      this.set("aria-hidden", "false")
    else
      this.set("aria-hidden", "true")
  }

  layout = layout;
};
