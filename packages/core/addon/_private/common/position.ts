export const Position = {
  BOTTOM: 'bottom' as 'bottom',
  BOTTOM_LEFT: 'bottom-left' as 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right' as 'bottom-right',
  LEFT: 'left' as 'left',
  LEFT_BOTTOM: 'left-bottom' as 'left-bottom',
  LEFT_TOP: 'left-top' as 'left-top',
  RIGHT: 'right' as 'right',
  RIGHT_BOTTOM: 'right-bottom' as 'right-bottom',
  RIGHT_TOP: 'right-top' as 'right-top',
  TOP: 'top' as 'top',
  TOP_LEFT: 'top-left' as 'top-left',
  TOP_RIGHT: 'top-right' as 'top-right',
};
export type Position = typeof Position[keyof typeof Position];

export function isPositionHorizontal(position: Position) {
  /* istanbul ignore next */
  return (
    position === Position.TOP ||
    position === Position.TOP_LEFT ||
    position === Position.TOP_RIGHT ||
    position === Position.BOTTOM ||
    position === Position.BOTTOM_LEFT ||
    position === Position.BOTTOM_RIGHT
  );
}

export function getPositionIgnoreAngles(position: Position) {
  if (
    position === Position.TOP ||
    position === Position.TOP_LEFT ||
    position === Position.TOP_RIGHT
  ) {
    return Position.TOP;
  } else if (
    position === Position.BOTTOM ||
    position === Position.BOTTOM_LEFT ||
    position === Position.BOTTOM_RIGHT
  ) {
    return Position.BOTTOM;
  } else if (
    position === Position.LEFT ||
    position === Position.LEFT_TOP ||
    position === Position.LEFT_BOTTOM
  ) {
    return Position.LEFT;
  } else {
    return Position.RIGHT;
  }
}
