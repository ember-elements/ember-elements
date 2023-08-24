/**
 * The four basic intents.
 */
export const Intent = {
  NONE: 'none' as const,
  PRIMARY: 'primary' as const,
  SUCCESS: 'success' as const,
  WARNING: 'warning' as const,
  DANGER: 'danger' as const,
};
export type Intent = (typeof Intent)[keyof typeof Intent];
