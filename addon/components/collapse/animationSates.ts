
/**
 * `Collapse` can be in one of six states, enumerated here.
 * When changing the `isOpen` prop, the following happens to the states:
 * isOpen={true}  : CLOSED -> OPEN_START -> OPENING -> OPEN
 * isOpen={false} : OPEN -> CLOSING_START -> CLOSING -> CLOSED
 */
export enum AnimationStates {
    /**
     * The body is re-rendered, height is set to the measured body height and
     * the body Y is set to 0.
     */
    OPEN_START,

    /**
     * Animation begins, height is set to auto. This is all animated, and on
     * complete, the state changes to OPEN.
     */
    OPENING,

    /**
     * The collapse height is set to auto, and the body Y is set to 0 (so the
     * element can be seen as normal).
     */
    OPEN,

    /**
     * Height has been changed from auto to the measured height of the body to
     * prepare for the closing animation in CLOSING.
     */
    CLOSING_START,

    /**
     * Height is set to 0 and the body Y is at -height. Both of these properties
     * are transformed, and then after the animation is complete, the state
     * changes to CLOSED.
     */
    CLOSING,

    /**
     * The contents of the collapse is not rendered, the collapse height is 0,
     * and the body Y is at -height (so that the bottom of the body is at Y=0).
     */
    CLOSED,
}