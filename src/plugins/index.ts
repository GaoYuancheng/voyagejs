export * from './container';
export * from './form';
export * from './utils';

export * from './interfaces';

import { DEFAULT_CELL_PLUGINS } from './cell';
import { DEFAULT_CONTAINER_PLUGINS } from './container';
import { DEFAULT_COMPONENT_PLUGINS } from './form';

export const DEFAULT_PLUGINS = {
  container: DEFAULT_CONTAINER_PLUGINS,
  field: DEFAULT_COMPONENT_PLUGINS,
  action: {},
  cell: DEFAULT_CELL_PLUGINS,
};

export type DefaultPluginsType = typeof DEFAULT_PLUGINS;
