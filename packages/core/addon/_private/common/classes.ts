import { Alignment } from './alignment';
import { Intent } from './intent';

import type { Elevation } from './elevation';
import type { Position } from './position';

const NS = 'ee';

// modifiers

export const ACTIVE = `${NS}-active`;
export const ALIGN_LEFT = `${NS}-align-left`;
export const ALIGN_RIGHT = `${NS}-align-right`;

export const DISABLED = `${NS}-disabled`;
export const FILL = `${NS}-fill`;
export const FIXED = `${NS}-fixed`;
export const FIXED_TOP = `${NS}-fixed-top`;
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

export const COLLAPSE = `${NS}-collapse`;
export const COLLAPSE_BODY = `${COLLAPSE}-body`;

export const COLLAPSIBLE_LIST = `${NS}-collapse-list`;

export const CONTROL_GROUP = `${NS}-control-group`;

export const DIALOG = `${NS}-dialog`;
export const DIALOG_CONTAINER = `${DIALOG}-container`;
export const DIALOG_BODY = `${DIALOG}-body`;
export const DIALOG_CLOSE_BUTTON = `${DIALOG}-close-button`;
export const DIALOG_FOOTER = `${DIALOG}-footer`;
export const DIALOG_FOOTER_ACTIONS = `${DIALOG}-footer-actions`;
export const DIALOG_HEADER = `${DIALOG}-header`;

export const DIVIDER = `${NS}-divider`;

export const DRAWER = `${NS}-drawer`;
export const DRAWER_BODY = `${DRAWER}-body`;
export const DRAWER_FOOTER = `${DRAWER}-footer`;
export const DRAWER_HEADER = `${DRAWER}-header`;

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

export const NAVBAR = `${NS}-navbar`;
export const NAVBAR_GROUP = `${NAVBAR}-group`;
export const NAVBAR_HEADING = `${NAVBAR}-heading`;
export const NAVBAR_DIVIDER = `${NAVBAR}-divider`;

export const NUMERIC_INPUT = `${NS}-numeric-input`;

export const MENU = `${NS}-menu`;
export const MENU_ITEM = `${MENU}-item`;
export const MENU_ITEM_LABEL = `${MENU_ITEM}-label`;
export const MENU_SUBMENU = `${NS}-submenu`;
export const MENU_DIVIDER = `${MENU}-divider`;
export const MENU_HEADER = `${MENU}-header`;

export const OVERLAY = `${NS}-overlay`;
export const OVERLAY_BACKDROP = `${OVERLAY}-backdrop`;
export const OVERLAY_CONTAINER = `${OVERLAY}-container`;
export const OVERLAY_CONTENT = `${OVERLAY}-content`;
export const OVERLAY_INLINE = `${OVERLAY}-inline`;
export const OVERLAY_OPEN = `${OVERLAY}-open`;
export const OVERLAY_SCROLL_CONTAINER = `${OVERLAY}-scroll-container`;

export const SPINNER = `${NS}-spinner`;
export const SPINNER_ANIMATION = `${SPINNER}-animation`;
export const SPINNER_HEAD = `${SPINNER}-head`;
export const SPINNER_NO_SPIN = `${NS}-no-spin`;
export const SPINNER_TRACK = `${SPINNER}-track`;

export const PORTAL = `${NS}-portal`;

export const POPOVER = `${NS}-popover`;
export const POPOVER_ARROW = `${POPOVER}-arrow`;
export const POPOVER_BACKDROP = `${POPOVER}-backdrop`;
export const POPOVER_CONTENT = `${POPOVER}-content`;
export const POPOVER_CONTENT_SIZING = `${POPOVER_CONTENT}-sizing`;
export const POPOVER_DISMISS = `${POPOVER}-dismiss`;
export const POPOVER_DISMISS_OVERRIDE = `${POPOVER_DISMISS}-override`;
export const POPOVER_OPEN = `${POPOVER}-open`;
export const POPOVER_TARGET = `${POPOVER}-target`;
export const POPOVER_WRAPPER = `${POPOVER}-wrapper`;
export const TRANSITION_CONTAINER = `${NS}-transition-container`;

export const TAG = `${NS}-tag`;
export const TAG_REMOVE = `${TAG}-remove`;

export const TAG_INPUT = `${NS}-tag-input`;
export const TAG_INPUT_ICON = `${TAG_INPUT}-icon`;
export const TAG_INPUT_VALUES = `${TAG_INPUT}-values`;

export const TOOLTIP = `${NS}-tooltip`;
export const TOOLTIP_INDICATOR = `${TOOLTIP}-indicator`;

export const SIZE_STANDARD = 16;
export const SIZE_LARGE = 20;

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

export function positionClass(position: Position) {
  if (position == null) {
    return undefined;
  }

  return `${NS}-position-${position}`;
}

// select classes goes here
export const MULTISELECT = `${NS}-multi-select`;
export const MULTISELECT_POPOVER = `${MULTISELECT}-popover`;
export const MULTISELECT_TAG_INPUT_INPUT = `${MULTISELECT}-tag-input-input`;
export const OMNIBAR = `${NS}-omnibar`;
export const OMNIBAR_OVERLAY = `${OMNIBAR}-overlay`;
export const SELECT = `${NS}-select`;
export const SELECT_POPOVER = `${SELECT}-popover`;
