import { toJS } from 'mobx';
import { shake } from 'radash';

export const filterUndefinedProps = (data: any) => {
  return shake(toJS(data), (p) => p === undefined);
};
