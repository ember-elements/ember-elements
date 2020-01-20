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
