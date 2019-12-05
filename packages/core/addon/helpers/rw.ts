import { helper } from '@ember/component/helper';

export function rw(params: Array<string> /*, hash*/) {
  let removedWhiteSpace: string = '';

  for (let index = 0; index < (params || []).length; index++) {
    const element: string = params[index];
    if (element) {
      removedWhiteSpace += element + ' ';
    }
  }

  removedWhiteSpace = removedWhiteSpace.trim(); //trim white spaces

  return removedWhiteSpace.replace(/  /g, ' '); // removes white spaces
}

export default helper(rw);
