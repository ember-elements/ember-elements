/** Alignment along the horizontal axis. */
export const Alignment = {
     CENTER: 'center' as 'center',
     LEFT: 'left' as 'left',
     RIGHT: 'right' as 'right',
};
export type Alignment = typeof Alignment[keyof typeof Alignment];
