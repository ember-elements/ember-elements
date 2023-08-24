export const Elevation = {
  ZERO: 0 as const,
  ONE: 1 as const,
  TWO: 2 as const,
  THREE: 3 as const,
  FOUR: 4 as const,
};
export type Elevation = (typeof Elevation)[keyof typeof Elevation];
