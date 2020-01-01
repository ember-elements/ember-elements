import { Alignment } from './alignment';
import { Intent } from './intent';
import { Elevation } from './elevation';

const NS = 'ee';

// modifiers

export const ACTIVE = `${NS}-active`;
export const ALIGN_LEFT = `${NS}-align-left`;
export const ALIGN_RIGHT = `${NS}-align-right`;

export const DISABLED = `${NS}-disabled`;
export const FILL = `${NS}-fill`;
export const INLINE = `${NS}-inline`;
export const INTERACTIVE = `${NS}-interactive`;
export const LARGE = `${NS}-large`;
export const LOADING = `${NS}-loading`;
export const MINIMAL = `${NS}-minimal`;
export const ROUND = `${NS}-round`;
export const SMALL = `${NS}-small`;
export const VERTICAL = `${NS}-vertical`;

// text utilities
export const TEXT_MUTED = `${NS}-text-muted`;

// components

export const BUTTON = `${NS}-button`;
export const BUTTON_GROUP = `${BUTTON}-group`;
export const BUTTON_TEXT = `${BUTTON}-text`;

export const ICON = `${NS}-icon`;
export const ICON_STANDARD = `${ICON}-standard`;
export const ICON_LARGE = `${ICON}-large`;

export const CALLOUT = `${NS}-callout`;
export const CALLOUT_ICON = `${CALLOUT}-icon`;

export const CARD = `${NS}-card`;

export const CONTROL_GROUP = `${NS}-control-group`;

export const PROGRESS_BAR = `${NS}-progress-bar`;
export const PROGRESS_METER = `${NS}-progress-meter`;
export const PROGRESS_NO_STRIPES = `${NS}-no-stripes`;
export const PROGRESS_NO_ANIMATION = `${NS}-no-animation`;

// textual elements
export const HEADING = `${NS}-heading`;

export const HTML_SELECT = `${NS}-html-select`;

export const HTML_TABLE = `${NS}-html-table`;
export const HTML_TABLE_BORDERED = `${HTML_TABLE}-bordered`;
export const HTML_TABLE_CONDENSED = `${HTML_TABLE}-condensed`;
export const HTML_TABLE_STRIPED = `${HTML_TABLE}-striped`;

export const INPUT = `${NS}-input`;
export const INPUT_GHOST = `${INPUT}-ghost`;
export const INPUT_GROUP = `${INPUT}-group`;
export const INPUT_ACTION = `${INPUT}-action`;

export const CONTROL = `${NS}-control`;
export const CONTROL_INDICATOR = `${CONTROL}-indicator`;
export const CONTROL_INDICATOR_CHILD = `${CONTROL_INDICATOR}-child`;
export const CHECKBOX = `${NS}-checkbox`;
export const RADIO = `${NS}-radio`;
export const SWITCH = `${NS}-switch`;
export const SWITCH_INNER_TEXT = `${SWITCH}-inner-text`;
export const FILE_INPUT = `${NS}-file-input`;
export const FILE_INPUT_HAS_SELECTION = `${NS}-file-input-has-selection`;
export const FILE_UPLOAD_INPUT = `${NS}-file-upload-input`;
export const FILE_UPLOAD_INPUT_CUSTOM_TEXT = `${NS}-file-upload-input-custom-text`;

export const LABEL = `${NS}-label`;
export const FORM_GROUP = `${NS}-form-group`;
export const FORM_CONTENT = `${NS}-form-content`;
export const FORM_HELPER_TEXT = `${NS}-form-helper-text`;

export const SPINNER = `${NS}-spinner`;
export const SPINNER_ANIMATION = `${SPINNER}-animation`;
export const SPINNER_HEAD = `${SPINNER}-head`;
export const SPINNER_NO_SPIN = `${NS}-no-spin`;
export const SPINNER_TRACK = `${SPINNER}-track`;

export const TAG = `${NS}-tag`;
export const TAG_REMOVE = `${TAG}-remove`;

// text utilities
export const TEXT_OVERFLOW_ELLIPSIS = `${NS}-text-overflow-ellipsis`;

/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time with the `process.env.BLUEPRINT_NAMESPACE` environment variable.
 */
export function getClassNamespace() {
  return NS;
}

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

export function elevationClass(elevation: Elevation) {
  if (elevation == null) {
    return undefined;
  }
  return `${NS}-elevation-${elevation}`;
}
