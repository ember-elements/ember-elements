/**
 * The four basic intents.
 */
export const Intent = {
  NONE: 'none' as 'none',
  PRIMARY: 'primary' as 'primary',
  SUCCESS: 'success' as 'success',
  WARNING: 'warning' as 'warning',
  DANGER: 'danger' as 'danger',
};
export type Intent = typeof Intent[keyof typeof Intent];
