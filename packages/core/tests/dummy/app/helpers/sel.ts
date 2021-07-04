import { helper } from '@ember/component/helper';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sel(params: Array<any> /*, hash*/) {
  return params[0].find((ele: { title: string }) => {
    return ele.title === params[1].title;
  });
}

export default helper(sel);
