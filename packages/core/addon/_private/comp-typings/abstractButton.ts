import type { Alignment, Intent } from '../common';

/**
 * A shared base interface for all ember elements component props.
 */
export interface IProps {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
}

export interface IIntentProps {
  /** Visual intent color to apply to element. */
  intent?: Intent;
}

/**
 * Interface for a clickable action, such as a button or menu item.
 * These props can be spready directly to a `<Button>` or `<MenuItem>` element.
 */
export interface IActionProps extends IIntentProps, IProps {
  /** Whether this action is non-interactive. */
  disabled?: boolean;

  /** Name of a Blueprint UI icon  to render before the text. */
  icon?: string;

  /** Click event handler. */
  onClick?: (event: MouseEvent) => void;

  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;

  /** Action text. */
  text?: string;
}

export interface IButtonProps extends IActionProps {
  /**
   * If set to `true`, the button will display in an active state.
   * This is equivalent to setting `className={Classes.ACTIVE}`.
   * @default false
   */
  active?: boolean;

  /**
   * Text alignment within button. By default, icons and text will be centered
   * within the button. Passing `"left"` or `"right"` will align the button
   * text to that side and push `icon` and `rightIcon` to either edge. Passing
   * `"center"` will center the text and icons together.
   * @default Alignment.CENTER
   */
  alignText?: Alignment;

  /** A ref handler that receives the native HTML element backing this component. */
  elementRef?: (ref: HTMLElement | null) => void;

  /** Whether this button should expand to fill its container. */
  fill?: boolean;

  /** Whether this button should use large styles. */
  large?: boolean;

  /**
   * If set to `true`, the button will display a centered loading spinner instead of its contents.
   * The width of the button is not affected by the value of this prop.
   * @default false
   */
  loading?: boolean;

  /** Whether this button should use minimal styles. */
  minimal?: boolean;

  /** Name of a Blueprint UI icon (update it later) to render after the text. */
  rightIcon?: string;

  /** Whether this button should use small styles. */
  small?: boolean;

  /**
   * HTML `type` attribute of button. Accepted values are `"button"`, `"submit"`, and `"reset"`.
   * Note that this prop has no effect on `AnchorButton`; it only affects `Button`.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  isActive: boolean;
}

export interface IButtonState {
  isActive: boolean;
}
