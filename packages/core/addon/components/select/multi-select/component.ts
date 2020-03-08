/* eslint-disable prettier/prettier */
// @ts-nocheck
import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';
// @ts-ignore
import { tracked } from '@glimmer/tracking';
// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import multiLayout from './template';

import { action } from '@ember/object';

import * as Classes from '../../../_private/common/classes';
import * as Utils from '../../../_private/common/utils';

import { IQueryListProps } from '../queryList';
import { IListItemsProps, ICreateNewItem } from '../common';
import * as Fun from '../common/listItemsUtils';
import * as FunProps from '../common/listItemsProps';
import * as FunRender from '../common/itemListRenderer';
import { IPopoverProps } from '../../../components/popover/component';
import { TagInputAddMethod } from '../../../components/tag-input/component';

import { Position } from '../../../_private/common/position';
import * as Keys from '../../../_private/common/keys';

export interface IMultiSelectProps<T> extends IListItemsProps<T> {
  /**
   * Whether the component should take up the full width of its container.
   * This overrides `popoverProps.fill` and `tagInputProps.fill`.
   */
  fill?: boolean;

  /**
   * Whether the popover opens on key down or when `TagInput` is focused.
   * @default false
   */
  openOnKeyDown?: boolean;

  /**
   * Input placeholder text. Shorthand for `tagInputProps.placeholder`.
   * @default "Search..."
   */
  placeholder?: string;

  /** Props to spread to `Popover`. Note that `content` cannot be changed. */
  popoverProps?: Partial<IPopoverProps> & object;

  /** Controlled selected values. */
  selectedItems?: T[];

  /** Props to spread to `TagInput`. Use `query` and `onQueryChange` to control the input. */
  tagInputProps?: Partial<ITagInputProps> & object;

  /** Custom renderer to transform an item into tag content. */
  tagRenderer: (item: T) => Array<string>;
}

interface MultiSelectArgs<T> extends IMultiSelectProps<T>, IQueryListProps<T> {
  props?: MultiSelectArgs<T>;
  isOpen?: boolean;
}

class MultiSelect<T> extends Component<MultiSelectArgs<T>> {
  props = this.args.props;
  private itemsParentRef?: HTMLElement | null;

  @reads('props.query') query?: IListItemsProps<T>['query'];
  @reads('props.items') items?: IQueryListProps<T>['items'];
  @reads('props.activeItem') activeItem?: IQueryListProps<T>['activeItem'];
  @reads('props.itemDisabled') itemDisabled?: IQueryListProps<T>['itemDisabled'];
  @reads('props.resetOnQuery') resetOnQuery?: IQueryListProps<T>['resetOnQuery'];
  @reads('props.createNewItemFromQuery')
  createNewItemFromQuery?: IQueryListProps<T>['createNewItemFromQuery'];
  @reads('props.itemsEqual') itemsEqual?: IQueryListProps<T>['itemsEqual'];
  @reads('props.resetOnSelect') resetOnSelect?: IQueryListProps<T>['resetOnSelect'];
  @reads('props.scrollToActiveItem') scrollToActiveItem?: IQueryListProps<T>['scrollToActiveItem'];

  /**
   * Flag indicating that we should check whether selected item is in viewport
   * after rendering, typically because of keyboard change. Set to `true` when
   * manipulating state in a way that may cause active item to scroll away.
   */
  @tracked shouldCheckActiveItemInViewport = false;

  /**
   * The item that we expect to be the next selected active item (based on click
   * or key interactions). When scrollToActiveItem = false, used to detect if
   * an unexpected external change to the active item has been made.
   */
  @tracked expectedNextActiveItem: ICreateNewItem | null = null;

  @tracked createNewItemState = {};
  @tracked queryState = '';
  @tracked filteredItemsState: IListItemsProps<T>['items'] = [];
  @tracked activeItemState: IListItemsProps<T>['activeItem'] = null;

  public constructor(props: IQueryListProps<T>, context?: any) {
    super(props, context);
    this.queryState = this.findQuery() || '';
    if (this.args.createNewItemFromQuery) {
      this.createNewItemState = this.args.createNewItemFromQuery(this.queryState);
    }
    this.filteredItemsState = this.getFilteredItems(this.queryState);
    this.activeItemState =
      this.findActiveItem() !== undefined
        ? this.findActiveItem()
        : getFirstEnabledItem(this.filteredItemsState, this.findItemDisabled());
  }

  get getActiveItem() {
    if (this.findActiveItem() !== undefined && this.findActiveItem() !== this.activeItemState) {
      this.shouldCheckActiveItemInViewport = true;
      this.activeItemState = this.findActiveItem();
    }
    return this.findActiveItem();
  }

  get getQuery() {
    const query = this.findQuery();
    if (query !== null && this.queryState !== query) {
      // new query
      this.setQuery(query, this.findResetOnQuery(), this.findCreateNewItemFromQuery());
    }
    // else if (
    //   // same query (or uncontrolled query), but items in the list changed
    //   !Utils.shallowCompareKeys(this.props, prevProps, {
    //     include: ['items', 'itemListPredicate', 'itemPredicate'],
    //   })
    // ) {
    //   this.setQuery(this.state.query);
    // }

    return this.findQuery();
  }

  findQuery() {
    let query;
    if (this.args.query != undefined) {
      query = this.args.query;
    } else if (this.query != undefined) {
      query = this.query;
    }
    if (query) this.queryState = query;
    return query;
  }
  findItems() {
    let items;
    if (this.args.items != undefined) {
      items = this.args.items;
    } else if (this.items != undefined) {
      items = this.items;
    }
    return items;
  }

  findActiveItem() {
    let activeItem;
    if (this.args.activeItem != undefined) {
      activeItem = this.args.activeItem;
    } else if (this.activeItem != undefined) {
      activeItem = this.activeItem;
    }
    return activeItem;
  }
  findItemDisabled() {
    let itemDisabled;
    if (this.args.itemDisabled != undefined) {
      itemDisabled = this.args.itemDisabled;
    } else if (this.itemDisabled != undefined) {
      itemDisabled = this.itemDisabled;
    }
    return itemDisabled;
  }
  findResetOnQuery() {
    let resetOnQuery = true;
    if (this.args.resetOnQuery != undefined) {
      resetOnQuery = this.args.resetOnQuery;
    } else if (this.resetOnQuery != undefined) {
      resetOnQuery = this.resetOnQuery;
    }
    return resetOnQuery;
  }
  findCreateNewItemFromQuery() {
    let createNewItemFromQuery;
    if (this.args.createNewItemFromQuery != undefined) {
      createNewItemFromQuery = this.args.createNewItemFromQuery;
    } else if (this.createNewItemFromQuery != undefined) {
      createNewItemFromQuery = this.createNewItemFromQuery;
    }
    return createNewItemFromQuery;
  }

  findItemsEqual() {
    let itemsEqual;
    if (this.args.itemsEqual != undefined) {
      itemsEqual = this.args.itemsEqual;
    } else if (this.itemsEqual != undefined) {
      itemsEqual = this.itemsEqual;
    }
    return itemsEqual;
  }
  findScrollToActiveItem() {
    let scrollToActiveItem = true;
    if (this.args.scrollToActiveItem != undefined) {
      scrollToActiveItem = this.args.scrollToActiveItem;
    } else if (this.scrollToActiveItem != undefined) {
      scrollToActiveItem = this.scrollToActiveItem;
    }
    return scrollToActiveItem;
  }

  findResetOnSelect() {
    let resetOnSelect;
    if (this.args.resetOnSelect != undefined) {
      resetOnSelect = this.args.resetOnSelect;
    } else if (this.resetOnSelect != undefined) {
      resetOnSelect = this.resetOnSelect;
    }
    return resetOnSelect;
  }

  @action
  refHandlers(ref: HTMLElement) {
    this.itemsParentRef = ref;
  }

  checkViewPort() {
    if (this.shouldCheckActiveItemInViewport) {
      // update scroll position immediately before repaint so DOM is accurate
      // (latest filteredItems) and to avoid flicker.
      requestAnimationFrame(() => this.scrollActiveItemIntoView());
      // reset the flag
      this.shouldCheckActiveItemInViewport = false;
    }
  }

  public scrollActiveItemIntoView() {
    const scrollToActiveItem = this.findScrollToActiveItem() !== false;
    const externalChangeToActiveItem = !FunProps.executeItemsEqual(
      this.findItemsEqual(),
      Fun.getActiveItem(this.expectedNextActiveItem),
      Fun.getActiveItem(this.findActiveItem())
    );
    this.expectedNextActiveItem = null;

    if (!scrollToActiveItem && externalChangeToActiveItem) {
      return;
    }

    const activeElement = this.getActiveElement();
    if (this.itemsParentRef != null && activeElement != null) {
      const { offsetTop: activeTop, offsetHeight: activeHeight } = activeElement;
      const {
        offsetTop: parentOffsetTop,
        scrollTop: parentScrollTop,
        clientHeight: parentHeight,
      } = this.itemsParentRef;
      // compute padding on parent element to ensure we always leave space
      const { paddingTop, paddingBottom } = this.getItemsParentPadding();

      // compute the two edges of the active item for comparison, including parent padding
      const activeBottomEdge = activeTop + activeHeight + paddingBottom - parentOffsetTop;
      const activeTopEdge = activeTop - paddingTop - parentOffsetTop;

      if (activeBottomEdge >= parentScrollTop + parentHeight) {
        // offscreen bottom: align bottom of item with bottom of viewport
        this.itemsParentRef.scrollTop = activeBottomEdge + activeHeight - parentHeight;
      } else if (activeTopEdge <= parentScrollTop) {
        // offscreen top: align top of item with top of viewport
        this.itemsParentRef.scrollTop = activeTopEdge - activeHeight;
      }
    }
  }

  private getItemsParentPadding() {
    // assert ref exists because it was checked before calling
    const { paddingTop, paddingBottom } = getComputedStyle(this.itemsParentRef!);
    return {
      paddingBottom: pxToNumber(paddingBottom),
      paddingTop: pxToNumber(paddingTop),
    };
  }

  private getActiveElement() {
    const activeItem = this.activeItemState;
    if (this.itemsParentRef != null) {
      if (Fun.isCreateNewItem(activeItem)) {
        return this.itemsParentRef.children.item(this.filteredItemsState.length) as HTMLElement;
      } else {
        const activeIndex = this.getActiveIndex();
        return this.itemsParentRef.children.item(activeIndex) as HTMLElement;
      }
    }
    return undefined;
  }

  private getFilteredItems(query: string) {
    const items = this.findItems() || [];
    const itemPredicate = this.args.itemPredicate;
    const itemListPredicate = this.args.itemListPredicate;
    if (Utils.isFunction(this.args.itemListPredicate) && itemListPredicate) {
      // note that implementations can reorder the items here

      return itemListPredicate(query, items);
    } else if (Utils.isFunction(itemPredicate) && itemPredicate) {
      return items.filter((item, index) => itemPredicate(query, item, index));
    }
    return items;
  }

  public setQuery(
    query: string,
    resetActiveItem = this.findResetOnQuery(),
    createNewItemFromQuery
  ) {
    this.shouldCheckActiveItemInViewport = true;
    const hasQueryChanged = query !== this.queryState;
    if (hasQueryChanged) {
      this.onQueryChange(query);
    }

    const filteredItems = this.getFilteredItems(query);
    const createNewItem =
      createNewItemFromQuery != null && query !== '' ? createNewItemFromQuery(query) : undefined;
    this.createNewItemState = createNewItem;
    this.filteredItemsState = filteredItems;
    this.queryState = query;

    // always reset active item if it's now filtered or disabled
    const activeIndex = this.getActiveIndex(filteredItems);
    const shouldUpdateActiveItem =
      resetActiveItem ||
      activeIndex < 0 ||
      isItemDisabled(
        Fun.getActiveItem(this.findItemsEqual()),
        activeIndex,
        this.findItemDisabled()
      );
    if (shouldUpdateActiveItem) {
      this.setActiveItem(getFirstEnabledItem(filteredItems, this.findItemDisabled()));
    }
    this.checkViewPort();
  }

  private getActiveIndex(items = this.filteredItemsState) {
    const activeItem = this.activeItemState;
    if (activeItem == null || Fun.isCreateNewItem(activeItem)) {
      return -1;
    }
    // NOTE: this operation is O(n) so it should be avoided in render(). safe for events though.
    for (let i = 0; i < items.length; ++i) {
      if (FunProps.executeItemsEqual(this.findItemsEqual(), items[i], activeItem)) {
        return i;
      }
    }
    return -1;
  }

  private setActiveItem(activeItem: T | ICreateNewItem | null) {
    this.expectedNextActiveItem = activeItem;
    if (this.findActiveItem() === undefined) {
      // indicate that the active item may need to be scrolled into view after update.
      this.shouldCheckActiveItemInViewport = true;
      this.activeItemState = activeItem;
    }

    if (Fun.isCreateNewItem(activeItem) && this.args.onActiveItemChange) {
      this.args.onActiveItemChange(null, true);
    } else if (this.args.onActiveItemChange) {
      this.args.onActiveItemChange(activeItem, false);
    }
    this.checkViewPort();
  }

  private handlePaste = (queries: string[]) => {
    let nextActiveItem: T | undefined;
    const nextQueries = [];

    // eslint-disable-next-line no-irregular-whitespace
    /*Find an existing item that exactly matches each pasted value, or
    create a new item if possible. Ignore unmatched values if creating
    items is disabled.*/
    const pastedItemsToEmit = [];

    for (const query of queries) {
      const equalItem = getMatchingItem(query, this.args);

      if (equalItem !== undefined) {
        nextActiveItem = equalItem;
        pastedItemsToEmit.push(equalItem);
      } else if (this.canCreateItems()) {
        const newItem = this.args.createNewItemFromQuery(query);
        if (newItem !== undefined) {
          pastedItemsToEmit.push(newItem);
        }
      } else {
        nextQueries.push(query);
      }
    }

    // UX nicety: combine all unmatched queries into a single
    // comma-separated query in the input, so we don't lose any information.
    // And don't reset the active item; we'll do that ourselves below.
    this.setQuery(nextQueries.join(', '), false);

    // UX nicety: update the active item if we matched with at least one
    // existing item.
    if (nextActiveItem !== undefined) {
      this.setActiveItem(nextActiveItem);
    }
    if (this.args.onItemsPaste) {
      this.args.onItemsPaste(pastedItemsToEmit);
    }
  };

  //multi select -------------------
  input!: HTMLInputElement;
  popperTarget!: HTMLElement;

  BOTTOM_LEFT = Position.BOTTOM_LEFT;
  MULTISELECT_POPOVER = Classes.MULTISELECT_POPOVER;
  MULTISELECT = Classes.MULTISELECT;
  MULTISELECT_TAG_INPUT_INPUT = Classes.MULTISELECT_TAG_INPUT_INPUT;
  MENU = Classes.MENU;
  MENU_ITEM = Classes.MENU_ITEM;
  ACTIVE = Classes.ACTIVE;
  INTENT_PRIMARY = Classes.intentClass('primary');
  POPOVER_DISMISS = Classes.POPOVER_DISMISS;

  @reads('props.className') className?: MultiSelectArgs<T>['className'];
  @reads('props.tagRenderer') tagRenderer?: MultiSelectArgs<T>['tagRenderer'];
  @reads('props.isOpen') isOpen?: boolean;
  @reads('props.initialContent') initialContent?: MultiSelectArgs<T>['initialContent'];
  @reads('props.disabled') disabled?: MultiSelectArgs<T>['disabled'];
  @reads('props.selectedItems') selectedItems?: MultiSelectArgs<T>['selectedItems'];

  @tracked isOpenState = false;
  @tracked createItemView = null;
  @tracked isScheduleUpdate = false;

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      className = this.className;
    }

    return className;
  }

  get getIsOpen() {
    if (this.isOpenState) {
      // scroll active item into view after popover transition completes and all dimensions are stable.
      setTimeout(() => {
        this.scrollActiveItemIntoView();
      }, 300);
    }
    return this.isOpenState;
  }

  get getTagRenderer() {
    let tagRenderer;
    if (this.args.tagRenderer != undefined) {
      tagRenderer = this.args.tagRenderer;
    } else if (this.tagRenderer != undefined) {
      tagRenderer = this.tagRenderer;
    }

    return this.findSelectedItems().map(tagRenderer);
  }

  get getSelectedItems() {
    return this.findSelectedItems();
  }

  findSelectedItems() {
    let selectedItems;
    if (this.args.selectedItems != undefined) {
      selectedItems = this.args.selectedItems;
    } else if (this.selectedItems != undefined) {
      selectedItems = this.selectedItems;
    }
    return selectedItems || [];
  }

  findInitialContent() {
    let initialContent;
    if (this.args.initialContent != undefined) {
      initialContent = this.args.initialContent;
    } else if (this.initialContent != undefined) {
      initialContent = this.initialContent;
    }
    return initialContent;
  }

  get getFindInitialContent() {
    return this.findInitialContent();
  }

  get getMenuContent() {
    const listProps = {
      activeItem: this.activeItemState,
      filteredItems: this.filteredItemsState,
      items: this.findItems(),
      query: this.queryState,
      renderItem: this.renderItem,
    };
    const maybeNoResults = this.isCreateItemRendered() ? null : this.args.noResults;
    const menuContent = FunRender.renderFilteredItems(
      listProps,
      maybeNoResults,
      this.findInitialContent()
    );
    this.createItemView = this.isCreateItemRendered()
      ? this.renderCreateItemMenuItem(this.queryState)
      : null;

    if (menuContent == null && this.createItemView == null) {
      return null;
    }
    return menuContent;
  }

  findDisabled() {
    let disabled = false;
    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.disabled != undefined) {
      disabled = this.disabled;
    }
    return disabled;
  }

  /** wrapper around `itemRenderer` to inject props */
  private renderItem = (item: T, index: number) => {
    if (this.findDisabled() !== true) {
      const activeItem = this.activeItemState;
      const query = this.queryState;

      const matchesPredicate = this.filteredItemsState.indexOf(item) >= 0;
      const modifiers = {
        active: FunProps.executeItemsEqual(
          this.findItemsEqual(),
          Fun.getActiveItem(activeItem),
          item
        ),
        disabled: isItemDisabled(item, index, this.findItemDisabled()),
        matchesPredicate,
        item,
      };
      const itemValue = {
        index,
        modifiers,
        query,
        ...item,
      };
      return itemValue;
    }

    return null;
  };

  private renderCreateItemMenuItem = (query: string) => {
    const activeItem = this.activeItemState;

    const isActive = Fun.isCreateNewItem(activeItem);
    return this.args.createNewItemRenderer ? { query, active: isActive } : null;
  };

  @action
  handleClick(query: string, evt: HTMLElement) {
    this.handleItemCreate(query, evt);
  }

  @action
  handleItemSelectClick(item: T, evt: HTMLElement) {
    this.handleItemSelect(item, evt);
  }

  @action
  refHandlersInput(element: HTMLInputElement) {
    this.input = element;
  }

  @action
  popperTargetRef(element: HTMLElement) {
    this.popperTarget = element;
  }
  @action
  popperTargetRender() {
    this.isScheduleUpdate = true;
  }

  @action
  getTagInputKeyDownHandler(e: KeyboardEvent) {
    const { which } = e;

    if (which === Keys.ESCAPE || which === Keys.TAB) {
      // By default the escape key will not trigger a blur on the
      // input element. It must be done explicitly.
      if (this.input != null) {
        this.input.blur();
      }
      this.isOpenState = false;
    } else if (
      !(which === Keys.BACKSPACE || which === Keys.ARROW_LEFT || which === Keys.ARROW_RIGHT)
    ) {
      this.isOpenState = true;
    }

    const isTargetingTagRemoveButton =
      (e.target as HTMLElement).closest(`.${Classes.TAG_REMOVE}`) != null;

    if (this.isOpenState && !isTargetingTagRemoveButton) {
      this.handleKeyDown(e);
    }
  }

  @action
  handleKeyDown(event: KeyboardEvent) {
    const { keyCode } = event;
    if (keyCode === Keys.ARROW_UP || keyCode === Keys.ARROW_DOWN) {
      event.preventDefault();
      const nextActiveItem = this.getNextActiveItem(keyCode === Keys.ARROW_UP ? -1 : 1);
      if (nextActiveItem != null) {
        this.setActiveItem(nextActiveItem);
      }
    }
    if (this.args.onKeyDown) {
      this.args.onKeyDown(event);
    }
  }

  /**
   * Get the next enabled item, moving in the given direction from the start
   * index. A `null` return value means no suitable item was found.
   * @param direction amount to move in each iteration, typically +/-1
   * @param startIndex item to start iteration
   */
  private getNextActiveItem(
    direction: number,
    startIndex = this.getActiveIndex()
  ): T | ICreateNewItem | null {
    if (this.isCreateItemRendered()) {
      const reachedCreate =
        (startIndex === 0 && direction === -1) ||
        (startIndex === this.filteredItemsState.length - 1 && direction === 1);
      if (reachedCreate) {
        return Fun.getCreateNewItem();
      }
    }
    return getFirstEnabledItem(
      this.filteredItemsState,
      this.findItemDisabled(),
      direction,
      startIndex
    );
  }

  private isCreateItemRendered(): boolean {
    return (
      this.canCreateItems() &&
      this.queryState !== '' &&
      // this check is unfortunately O(N) on the number of items, but
      // alas, hiding the "Create Item" option when it exactly matches an
      // existing item is much clearer.
      !this.wouldCreatedItemMatchSomeExistingItem()
    );
  }

  private canCreateItems(): boolean {
    return this.findCreateNewItemFromQuery() != null && this.args.createNewItemRenderer != null;
  }

  private wouldCreatedItemMatchSomeExistingItem() {
    // search only the filtered items, not the full items list, because we
    // only need to check items that match the current query.
    return this.filteredItemsState.some(item =>
      FunProps.executeItemsEqual(this.findItemsEqual(), item, this.createNewItemState)
    );
  }

  @action
  getTagInputKeyUpHandler(e: KeyboardEvent) {
    const isTargetingInput = (e.target as HTMLElement).classList.contains(
      Classes.MULTISELECT_TAG_INPUT_INPUT
    );

    // only handle events when the focus is on the actual <input> inside the TagInput, as that's
    // what QueryList is designed to do
    if (this.isOpenState && isTargetingInput) {
      this.handleKeyUp(e);
    }
  }

  @action
  handleKeyUp(event: KeyboardEvent) {
    const activeItem = this.activeItemState;
    // using keyup for enter to play nice with Button's keyboard clicking.
    // if we were to process enter on keydown, then Button would click itself on keyup
    // and the popvoer would re-open out of our control :(.
    if (event.keyCode === Keys.ENTER) {
      event.preventDefault();
      if (activeItem == null || Fun.isCreateNewItem(activeItem)) {
        this.handleItemCreate(this.queryState, event);
      } else {
        this.handleItemSelect(activeItem, event);
      }
    }
  }

  private handleItemCreate(query: string, evt?: HTMLElement) {
    // we keep a cached createNewItem in state, but might as well recompute
    // the result just to be sure it's perfectly in sync with the query.
    const item = this.args.createNewItemFromQuery ? this.args.createNewItemFromQuery(query) : null;
    if (item != null) {
      if (this.args.onItemSelect) {
        this.args.onItemSelect(item, evt);
      }
      this.setQuery('', true, null);
    }
  }
  private handleItemSelect(item: T, event?: HTMLElement) {
    this.setActiveItem(item);
    if (this.args.onItemSelect) {
      this.args.onItemSelect(item, event);
    }
    if (this.findResetOnSelect()) {
      this.setQuery('', true, null);
    }
  }

  @action
  handleTagInputAdd(values: any[], method: TagInputAddMethod) {
    if (method === 'paste') {
      this.handlePaste(values);
    }
  }

  @action
  handleQueryChange(event?: HTMLInputElement) {
    const query = event == null ? '' : event.target.value;
    this.setQuery(query);
    this.onQueryChange(query, event);
  }

  private onQueryChange = (query: string, evt?: HTMLInputElement) => {
    this.isOpenState = query.length > 0 || !this.args.openOnKeyDown;

    if (this.args.onQueryChange) {
      this.args.onQueryChange(query, evt);
    }
  };

  @action
  onFocusTagInput() {
    if (!this.args.openOnKeyDown) {
      this.isOpenState = true;
    }
  }

  @action
  onClose() {
    requestAnimationFrame(() => {
      if (this.input != null && this.input !== document.activeElement) {
        // the input is no longer focused so we can close the popover
        this.isOpenState = false;
      } else if (!this.args.openOnKeyDown) {
        // the input is no longer focused so we can close the popover
        this.isOpenState = true;
      }
    });
  }
}
export default setComponentTemplate(multiLayout, MultiSelect);

/** Wrap number around min/max values: if it exceeds one bound, return the other. */
function wrapNumber(value: number, min: number, max: number) {
  if (value < min) {
    return max;
  } else if (value > max) {
    return min;
  }
  return value;
}

function isItemDisabled<T>(
  item: T | null,
  index: number,
  itemDisabled?: IListItemsProps<T>['itemDisabled']
) {
  if (itemDisabled == null || item == null) {
    return false;
  } else if (Utils.isFunction(itemDisabled)) {
    return itemDisabled(item, index);
  }
  return !!item[itemDisabled];
}

/**
 * Get the next enabled item, moving in the given direction from the start
 * index. A `null` return value means no suitable item was found.
 * @param items the list of items
 * @param itemDisabled callback to determine if a given item is disabled
 * @param direction amount to move in each iteration, typically +/-1
 * @param startIndex which index to begin moving from
 */
export function getFirstEnabledItem<T>(
  items: T[],
  itemDisabled?: keyof T | ((item: T, index: number) => boolean),
  direction = 1,
  startIndex = items.length - 1
): T | ICreateNewItem | null {
  if (items.length === 0) {
    return null;
  }
  // remember where we started to prevent an infinite loop
  let index = startIndex;
  const maxIndex = items.length - 1;
  do {
    // find first non-disabled item
    index = wrapNumber(index + direction, 0, maxIndex);
    if (!isItemDisabled(items[index], index, itemDisabled)) {
      return items[index];
    }
  } while (index !== startIndex && startIndex !== -1);
  return null;
}

function pxToNumber(value: string | null) {
  return value == null ? 0 : parseInt(value.slice(0, -2), 10);
}

function getMatchingItem<T>(
  query: string,
  { items, itemPredicate }: IQueryListProps<T>
): T | undefined {
  if (Utils.isFunction(itemPredicate)) {
    // .find() doesn't exist in ES5. Alternative: use a for loop instead of
    // .filter() so that we can return as soon as we find the first match.
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (itemPredicate(query, item, i, true)) {
        return item;
      }
    }
  }
  return undefined;
}
