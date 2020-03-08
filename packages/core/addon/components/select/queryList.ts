import { ICreateNewItem, IListItemsProps } from './common/index';
import { IProps } from '../../_private/common';

export interface IQueryListProps<T> extends IListItemsProps<T> {
  /**
   * Callback invoked when user presses a key, after processing `QueryList`'s own key events
   * (up/down to navigate active item). This callback is passed to `renderer` and (along with
   * `onKeyUp`) can be attached to arbitrary content elements to support keyboard selection.
   */
  onKeyDown?: KeyboardEvent;

  /**
   * Callback invoked when user releases a key, after processing `QueryList`'s own key events
   * (enter to select active item). This callback is passed to `renderer` and (along with
   * `onKeyDown`) can be attached to arbitrary content elements to support keyboard selection.
   */
  onKeyUp?: KeyboardEvent;

  /**
   * Whether the list is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * An object describing how to render a `QueryList`.
 * A `QueryList` `renderer` receives this object as its sole argument.
 */
export interface IQueryListRendererProps<T>  // Omit `createNewItem`, because it's used strictly for internal tracking.
  extends Pick<IQueryListState<T>, 'activeItem' | 'filteredItems' | 'query'>,
    IProps {
  /**
   * Selection handler that should be invoked when a new item has been chosen,
   * perhaps because the user clicked it.
   */
  handleItemSelect: (item: T, event?: HTMLElement) => void;

  /**
   * Handler that should be invoked when the user pastes one or more values.
   *
   * This callback will use `itemPredicate` with `exactMatch=true` to find a
   * subset of `items` exactly matching the pasted `values` provided, then it
   * will invoke `onItemsPaste` with those found items. Each pasted value that
   * does not exactly match an item will be ignored.
   *
   * If creating items is enabled (by providing both `createNewItemFromQuery`
   * and `createNewItemRenderer`), then pasted values that do not exactly
   * match an existing item will emit a new item as created via
   * `createNewItemFromQuery`.
   *
   * If `itemPredicate` returns multiple matching items for a particular query
   * in `queries`, then only the first matching item will be emitted.
   */
  handlePaste: (queries: string[]) => void;

  /**
   * Keyboard handler for up/down arrow keys to shift the active item.
   * Attach this handler to any element that should support this interaction.
   */
  handleKeyDown: KeyboardEvent;

  /**
   * Keyboard handler for enter key to select the active item.
   * Attach this handler to any element that should support this interaction.
   */
  handleKeyUp: KeyboardEvent;

  /**
   * Change handler for query string. Attach this to an input element to allow
   * `QueryList` to control the query.
   */
  handleQueryChange: HTMLInputElement;

  /** Rendered elements returned from `itemListRenderer` prop. */
  itemList: string;
}

export interface IQueryListState<T> {
  /** The currently focused item (for keyboard interactions). */
  activeItem: T | ICreateNewItem | null;

  /**
   * The item returned from `createNewItemFromQuery(this.state.query)`, cached
   * to avoid continuous reinstantions within `isCreateItemRendered`, where
   * this element will be used to hide the "Create Item" option if its value
   * matches the current `query`.
   */
  createNewItem: T | undefined;

  /** The original `items` array filtered by `itemListPredicate` or `itemPredicate`. */
  filteredItems: T[];

  /** The current query string. */
  query: string;
}
