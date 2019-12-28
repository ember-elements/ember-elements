import { Intent } from './intent';

export interface IProps {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
}

export interface IIntentProps {
  /** Visual intent color to apply to element. */
  intent?: Intent;
}

export interface IActionProps extends IIntentProps, IProps {
  /** Whether this action is non-interactive. */
  disabled?: boolean;

  /** Name of a Blueprint UI icon to render before the text. */
  icon?: string;

  /** Click event handler. */
  onClick?: (event: MouseEvent) => void;

  /** Action text. will update later */
  text?: string | HTMLElement;
}

/**
 * An interface for an option in a list, such as in a `<select>` or `RadioGroup`.
 * These props can be spread directly to an `<option>` or `<Radio>` element.
 */
export interface IOptionProps extends IProps {
  /** Whether this option is non-interactive. */
  disabled?: boolean;

  /** Label text for this option. If omitted, `value` is used as the label. */
  label?: string;

  /** Value of this option. */
  value: string | number;
}

/** Interface for a controlled input. */
export interface IControlledProps {
  /** Initial value of the input, for uncontrolled usage. */
  defaultValue?: string;

  /** Change event handler. Use `event.target.value` for new value. */
  onChange?: (event: HTMLElement) => void;

  /** Form value of the input, for controlled usage. */
  value?: string;
}
