export const optionBlock = (options?: any[], props?: any) => {
  const { ['data-voyagejs-filter']: _filter } = props || {};

  if (!_filter) return options;
  if (!options) return options;

  return options.map((option) => {
    return {
      ...option,
      style: { display: 'flex', marginBottom: 8 },
    };
  });
};
