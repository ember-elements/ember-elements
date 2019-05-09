import { Intent } from "../common/intent";

export interface IIconProps {
    /** A space-delimited list of class names to pass along to a child element. */
    class?: string;

    /**
     * Inline html style to parent element.
     */
    style?: any;

    /** Visual intent color to apply to element. */
    intent?: Intent;

    /**Name of the icons to render  */
    icon?: string;

    /***
     * Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and chooses the appropriate resolution based on this prop.
     */
    iconSize?: number;

    /**Description string. This string does not appear in normal browsers, but it increases accessibility. For instance, screen readers will use it for aural feedback. By default, this is set to the icon's name. */
    title?: string;

    /**Color of icon. This is used as the fill attribute on the <svg> image so it will override any CSS color property, including that set by intent. If this prop is omitted, icon color is inherited from surrounding text. */
    color?: string;
}