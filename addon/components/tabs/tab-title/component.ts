import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../../-private/common/classes';

export default class TabsTabTitle extends Component.extend({
}) {
  /** Handler invoked when this tab is clicked. */
  onClick!: (index: number, selectedTabId: string | undefined, elementId: string, event: MouseEvent) => void;

  /** Whether the tab is currently selected. */
  selected?: string;

  disabled?: boolean;

  /**This titleTabId is get rendered in `title-tab-id` attribute and its generated from tabs */
  titleTabId!: string;

  /**Get ordered number of tabs title */
  index?: any;

  tabElementId?: string;

  /** Set -1 for disabled tab other case 0 */
  tabIndex: number = this.disabled ? -1 : 0;

  titleClassName?: string;

  classNameBindings = [`TAB`, 'titleClassName'];

  attributeBindings = ['aria-disabled', 'aria-expanded', 'aria-selected', 'role', 'tabIndex:tabIndex', 'title-tab-id']

  TAB = Classes.TAB;

  role: string = "tab";
  'aria-disabled': string;
  'aria-expanded': string;
  'aria-selected': string;
  'title-tab-id': string;

  layout = layout;

  didReceiveAttrs() {
    this.set("aria-disabled", this.disabled ? "true" : "false");
    this.set("aria-expanded", this.selected ? "true" : "false");
    this.set("aria-selected", this.selected ? "true" : "false");
    this.set("title-tab-id", this.titleTabId);

  }

  click(e: MouseEvent) {
    if (this.get('disabled'))
      return;
    if (this.get('onClick'))
      this.get('onClick')(this.index + 1, this.tabElementId, this.elementId, e);
  }
  // normal class body definition here
};
