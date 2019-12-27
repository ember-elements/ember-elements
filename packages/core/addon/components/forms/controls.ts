import { Alignment, IProps } from '../../_private/common';

export interface IControlProps extends IProps {
  /**
   * Alignment of the indicator within container.
   * @default Alignment.LEFT
   */
  alignIndicator?: Alignment;

  /** Whether the control is checked. */
  checked?: boolean;

  /** Whether the control is initially checked (uncontrolled mode). */
  defaultChecked?: boolean;

  /** Whether the control is non-interactive. */
  disabled?: boolean;

  /** Whether the control should appear as an inline element. */
  inline?: boolean;

  /**
   * Text label for the control.
   *
   */
  label?: string;

  /**

   * accepts strings..
   */
  labelElement?: string;

  /** Whether this control should use large styles. */
  large?: boolean;

  /** Event handler invoked when input value is changed. */
  onChange?: (event: HTMLInputElement) => void;
}
