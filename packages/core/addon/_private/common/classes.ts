import { Alignment } from './alignment';
import { Intent } from './intent';

const NS = 'ee';

// modifiers

export const ACTIVE = `${NS}-active`;
export const ALIGN_LEFT = `${NS}-align-left`;
export const ALIGN_RIGHT = `${NS}-align-right`;

export const DISABLED = `${NS}-disabled`;
export const FILL = `${NS}-fill`;
export const LARGE = `${NS}-large`;
export const LOADING = `${NS}-loading`;
export const MINIMAL = `${NS}-minimal`;
export const SMALL = `${NS}-small`;
export const VERTICAL = `${NS}-vertical`;

// components

export const BUTTON = `${NS}-button`;
export const BUTTON_GROUP = `${BUTTON}-group`;
export const BUTTON_TEXT = `${BUTTON}-text`;

export const ICON = `${NS}-icon`;
export const ICON_STANDARD = `${ICON}-standard`;
export const ICON_LARGE = `${ICON}-large`;

/** Return CSS class for alignment. */
export function alignmentClass(alignment: Alignment) {
  switch (alignment) {
    case Alignment.LEFT:
      return ALIGN_LEFT;
    case Alignment.RIGHT:
      return ALIGN_RIGHT;
    default:
      return undefined;
  }
}

/** Return CSS class for intent. */
export function intentClass(intent?: Intent) {
  if (intent == null || intent === Intent.NONE) {
    return undefined;
  }
  return `${NS}-intent-${intent.toLowerCase()}`;
}

/** Returns CSS class for icon name. */
export function iconClass(iconName?: string) {
  if (iconName == null) {
    return undefined;
  }
  // prettier-ignore
  return iconName.indexOf(`${NS}-icon-`) === 0 ? iconName : `${NS}-icon-${iconName}`;
}
