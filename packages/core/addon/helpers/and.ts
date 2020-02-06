import { helper } from '@ember/component/helper';

export function and(params: Array<string | number | boolean> /*, hash*/) {
  return params[0] && params[1];
}

export default helper(and);
