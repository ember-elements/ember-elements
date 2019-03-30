import { FOCUS_DISABLED } from "../common/classes";
import { InteractionModeEngine } from "../common/interactionMode";

/* istanbul ignore next */
const fakeFocusEngine = {
    isActive: () => true,
    start: () => true,
    stop: () => true,
};

const focusEngine =
    typeof document !== "undefined"
        ? new InteractionModeEngine(document.documentElement, FOCUS_DISABLED)
        : fakeFocusEngine;

export const FocusStyleManager = {
    alwaysShowFocus: () => focusEngine.stop(),
    isActive: () => focusEngine.isActive(),
    onlyShowFocusOnTabs: () => focusEngine.start(),
};