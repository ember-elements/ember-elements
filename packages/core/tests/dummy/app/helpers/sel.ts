import { helper } from '@ember/component/helper';

export function sel(params: Array<any> /*, hash*/) {
  return params[0].find((ele: { title: string }) => {
    return ele.title === params[1].title;
  });
}

export default helper(sel);
