export const Position = {
  BOTTOM: 'bottom' as const,
  BOTTOM_LEFT: 'bottom-left' as const,
  BOTTOM_RIGHT: 'bottom-right' as const,
  LEFT: 'left' as const,
  LEFT_BOTTOM: 'left-bottom' as const,
  LEFT_TOP: 'left-top' as const,
  RIGHT: 'right' as const,
  RIGHT_BOTTOM: 'right-bottom' as const,
  RIGHT_TOP: 'right-top' as const,
  TOP: 'top' as const,
  TOP_LEFT: 'top-left' as const,
  TOP_RIGHT: 'top-right' as const,
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
