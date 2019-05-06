export interface IProps {
    /** A space-delimited list of class names to pass along to a child element. */
    class?: string;
    /**Inline html style to parent element. */
    style?: any;

}
export interface IOptionProps extends IProps {
    /** Whether this option is non-interactive. */
    disabled?: boolean;

    /** Label text for this option. If omitted, `value` is used as the label. */
    label?: string;

    /** Value of this option. */
    value: string | number;
}