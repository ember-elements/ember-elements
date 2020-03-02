/**
 * The three basic button style types.
 */
export const StyleType = {
  CALLTOACTION: 'calltoaction' as 'calltoaction',
  ACTION: 'action' as 'action',
  ICON: 'icon' as 'icon',
};
export type StyleType = typeof StyleType[keyof typeof StyleType];
