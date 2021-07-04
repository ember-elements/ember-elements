/** Alignment along the horizontal axis. */
export const Alignment = {
  CENTER: 'center' as const,
  LEFT: 'left' as const,
  RIGHT: 'right' as const,
};
export type Alignment = typeof Alignment[keyof typeof Alignment];
