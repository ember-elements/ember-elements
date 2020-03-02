/**
 * The four basic intents.
 */
export const Intent = {
  NONE: 'none' as 'none',
  ELEMENTARY: 'elementary' as 'elementary',
  SECONDARY: 'secondary' as 'secondary',
  NEGATIVE: 'negative' as 'negative',
  NEGATIVE_STROKE: 'negative_stroke' as 'negative_stroke',
  PRIMARY: 'primary' as 'primary',
  SUCCESS: 'success' as 'success',
  WARNING: 'warning' as 'warning',
  DANGER: 'danger' as 'danger',
};
export type Intent = typeof Intent[keyof typeof Intent];
