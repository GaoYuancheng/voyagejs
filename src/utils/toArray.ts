export const toArray = (value: any) => {
  return Array.isArray(value) ? value : [value];
};

export const isNill = (data: any) => {
  return data === undefined || data === null;
};
