import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import TabsMixins from '../../mixins/tabs';
import TabsTemplate from './tab/component';
import * as Classes from '../../-private/common/classes';
import * as Keys from '../../-private/common/keys';
import Ember from 'ember';
import { filter } from '@ember/object/computed';
import { computed, action } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default class Tabs extends Component.extend(TabsMixins, {
  /** Get all children on tabs from tab component*/
  childTabs: filter('children', function (view) {
    return view instanceof TabsTemplate;
  }),

  /** Parse tab related property for creating title from tab component */
  TabsItems: computed('childTabs.@each.{elementId,title,disabled}', function () {
    let items: any = Ember.A();
    let childLength = (this.childTabs || []).length;
    this.get('childTabs').forEach((pane: any, index: number) => {

      let item = pane.getProperties('elementId', 'title', 'disabled', 'titleClassName');
      if (this.selectedTabIndex > 0 && (this.selectedTabIndex - 1) < childLength && index == this.selectedTabIndex - 1) {
        this.set('selectedTabId', (pane.getProperties('elementId') || {}).elementId);
      }
      else if (index == 0 && (this.selectedTabIndex <= 0 || this.selectedTabIndex > childLength || isNaN(this.selectedTabIndex))) {
        this.set('selectedTabIndex', 1);
        this.set('selectedTabId', (pane.getProperties('elementId') || {}).elementId);
      }
      item.titleTabId = item.elementId + "tab" + (index + 1);
      items.pushObject(item);
    });
    return items;
  }),

}) {
  attributeBindings = [`inlineStyle:style`];

  /**
    * Whether the selected tab indicator should animate its movement.
    * @default true
  */
  animate: boolean = true;

  /**
  Default selected tab index is 1. Tabs is rendered based on Default index
 */
  defaultSelectedTabIndex?: number;


  /**
   * If set to `true`, the tab titles will display with larger styling.
   * This will apply large styles only to the tabs at this level, not to nested tabs.
   * @default false
  */
  large?: boolean;

  /**
    * Whether inactive tab panels should be removed from the DOM and unmounted in React.
    * This can be a performance enhancement when rendering many complex panels, but requires
    * careful support for unmounting and remounting.
    * @default false
  */
  renderActiveTabPanelOnly?: boolean;

  /**
    * Selected tab `index`, for controlled usage.
    * Providing this prop will put the component in controlled mode.
    * Unknown ids will result in empty selection (no errors).
  */
  selectedTabIndex?: number;

  /**
  * Whether to show tabs stacked vertically on the left side.
  * @default false
  */
  vertical?: boolean;

  /**
    * A callback function that is invoked when a tab in the tab list is clicked.
  */
  onChange!: (newTabIndex: number, prevTabIndex: number, event: MouseEvent) => void;

  classNameBindings = [`TABS`, `vertical:${Classes.VERTICAL}`];

  selectedTabId?: string;
  tabTitleId?: string;
  indicatorWrapperStyle?: string;

  TAB_LIST = Classes.TAB_LIST;
  LARGE = Classes.LARGE;
  TAB_INDICATOR_WRAPPER = Classes.TAB_INDICATOR_WRAPPER;
  TAB_INDICATOR = Classes.TAB_INDICATOR;
  TAB_SELECTOR = `.${Classes.TAB}`;
  TABS = Classes.TABS;

  firstTabAnimate: boolean = true;

  layout = layout;

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;

  didReceiveAttrs() {
    if (this.defaultSelectedTabIndex) {
      this.set('selectedTabIndex', this.defaultSelectedTabIndex);
    }
    else if (this.selectedTabIndex) {
      this.set('selectedTabIndex', this.selectedTabIndex);
    }
    else {
      this.set('selectedTabIndex', 1);
    }
    if (this.animate) {
      this.moveSelectionIndicator();
    }
  }

  async didUpdate() {
    if (this.animate && this.firstTabAnimate && this.element && this.element.querySelector(`${this.TAB_SELECTOR}[title-tab-id]`)) {
      this.moveSelectionIndicator();
    }
  }

  @action
  handleKeyDown(e: KeyboardEvent) {
    const focusedElement = (document as any).activeElement.closest(this.TAB_SELECTOR);
    // rest of this is potentially expensive and futile, so bail if no tab is focused
    if (focusedElement == null) {
      return;
    }
    // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
    const enabledTabElements = this.getTabElements().filter(el => el.getAttribute("aria-disabled") === "false");
    const focusedIndex = enabledTabElements.indexOf(focusedElement);
    const direction = this.getKeyCodeDirection(e);
    if (focusedIndex >= 0 && direction !== undefined) {
      e.preventDefault();
      const { length } = enabledTabElements;
      // auto-wrapping at 0 and `length`
      const nextFocusedIndex = (focusedIndex + direction + length) % length;
      (enabledTabElements[nextFocusedIndex] as HTMLElement).focus();
    }
  }

  @action
  handleKeyPress(e: KeyboardEvent) {
    const targetTabElement = (e.target as HTMLElement).closest(this.TAB_SELECTOR) as HTMLElement;
    if (targetTabElement != null && Keys.isKeyboardClick(e.which)) {
      e.preventDefault();
      targetTabElement.click();
    }

  }

  @action
  handleTabClick(selectedTabIndex: number, newTabId: number, tabTitleId: number, e: MouseEvent) {
    if (this.get('onChange'))
      this.get('onChange')(selectedTabIndex, this.selectedTabIndex as number, e);
    this.set('selectedTabId', newTabId);
    this.set('selectedTabIndex', selectedTabIndex);
    this.set('tabTitleId', tabTitleId);
    this.moveSelectionIndicator();


  }

  /**
 * Calculate the new height, width, and position of the tab indicator.
 * Store the CSS values so the transition animation can start.
 */
  async moveSelectionIndicator() {
    if (!this.animate || !this.element) {
      return;
    }
    const tabIdSelector = `${this.TAB_SELECTOR}[title-tab-id]`;
    const selectedTabElement = await this.element.querySelectorAll(tabIdSelector)[this.selectedTabIndex as number - 1] as HTMLElement;
    let indicatorWrapperStyle: any;
    if (selectedTabElement != null) {
      const { clientHeight, clientWidth, offsetLeft, offsetTop } = selectedTabElement;
      indicatorWrapperStyle = `height: ${clientHeight}px;transform: translateX(${Math.floor(offsetLeft)}px) translateY(${Math.floor(offsetTop)}px);width: ${clientWidth}px; `;
    }
    this.set('indicatorWrapperStyle', Ember.String.htmlSafe(indicatorWrapperStyle));
    this.set('firstTabAnimate', false);
  }

  /** Queries root HTML element for all tabs with optional filter selector */
  private getTabElements(subselector = "") {
    if (this.element == null) {
      return [];
    }
    return Array.from(this.element.querySelectorAll(this.TAB_SELECTOR + subselector));
  }

  private getKeyCodeDirection(e: KeyboardEvent) {
    if (isEventKeyCode(e, Keys.ARROW_LEFT, Keys.ARROW_UP)) {
      return -1;
    } else if (isEventKeyCode(e, Keys.ARROW_RIGHT, Keys.ARROW_DOWN)) {
      return 1;
    }
    return undefined;
  }

  // normal class body definition here
};

function isEventKeyCode(e: KeyboardEvent, ...codes: number[]) {
  return codes.indexOf(e.which) >= 0;
}

