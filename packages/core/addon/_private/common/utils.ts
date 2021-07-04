import { CLAMP_MIN_MAX } from './_errors';

/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
export function clamp(val: number, min: number, max: number) {
  if (val == null) {
    return val;
  }

  if (max < min) {
    throw new Error(CLAMP_MIN_MAX);
  }

  return Math.min(Math.max(val, min), max);
}

/** Returns whether the value is a function. Acts as a type guard. */
// eslint-disable-next-line  @typescript-eslint/ban-types
export function isFunction(value: any): value is Function { // eslint-disable-line
  return typeof value === 'function';
}

/** Returns the number of decimal places in the given number. */
export function countDecimalPlaces(num: number) {
  if (!isFinite(num)) {
    return 0;
  }

  let e = 1,
    p = 0;

  while (Math.round(num * e) / e !== num) {
    e *= 10;
    p++;
  }

  return p;
}
