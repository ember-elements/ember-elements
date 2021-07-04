import { helper } from '@ember/component/helper';

export function eq(params: Array<string | number> /*, hash*/) {
  return params[0] == params[1];
}

export default helper(eq);
