import { helper } from '@ember/component/helper';

export function rw(params: Array<string> /*, hash*/) {
  let removedWhiteSpace = '';

  for (let index = 0; index < (params || []).length; index++) {
    const element: string = params[index] as string;

    if (element) {
      removedWhiteSpace += element + ' ';
    }
  }

  removedWhiteSpace = removedWhiteSpace.trim(); //trim white spaces

  return removedWhiteSpace.replace(/ {2}/g, ' '); // removes white spaces
}

export default helper(rw);
