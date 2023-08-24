export interface IItemModifiers {
  /** Whether this is the "active" (focused) item, meaning keyboard interactions will act upon it. */
  active: boolean;

  /** Whether this item is disabled and should ignore interactions. */
  disabled: boolean;

  /** Whether this item matches the predicate. A typical renderer could hide `false` values. */
  matchesPredicate: boolean;
}

/**
 * An object describing how to render a particular item.
 * An `itemRenderer` receives the item as its first argument, and this object as its second argument.
 */
export interface IItemRendererProps {
  /** Click event handler'react'ect this item. */
  handleClick: MouseEvent;

  index?: number;

  /** Modifiers that describe how to render this im, such as `active` ordisabled`. */
  modifiers: IItemModifiers;

  /** The current que string used to filter t items. */
  query: string;
}

/** Type alias for a function that receives an item and props   renders a JSX element (or `null`). */
export type ItemRenderer<T> = (
  item: T,
  itemProps: IItemRendererProps
) => string | null;
