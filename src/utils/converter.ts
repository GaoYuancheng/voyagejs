import { isString } from 'radash';

export const toStringKey = (key: any) => {
  if (!key) return;

  if (isString(key)) {
    return key;
  }

  return key.join('.');
};
