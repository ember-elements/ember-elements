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
