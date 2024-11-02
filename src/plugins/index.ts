export * from './actions';
export * from './container';
export * from './form';
export * from './utils';

export * from './interfaces';

import { DEFAULT_CONTAINER_PLUGINS } from './container';
import { DEFAULT_COMPONENT_PLUGINS, DefaultComponentPluginsType } from './form';

// @ts-ignore
export const DEFAULT_PLUGINS = {
  container: DEFAULT_CONTAINER_PLUGINS,
  // TODO: 类型推断错误
  field: DEFAULT_COMPONENT_PLUGINS as DefaultComponentPluginsType,
  action: {},
};
