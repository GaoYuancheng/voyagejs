import { isString } from 'radash';
import type { PluginsType } from '../../interfaces';

// 使用插件
export const parsePlugin = (plugins: PluginsType, pluginName: string) => {
  if (!isString(pluginName)) {
    return pluginName;
  }

  const plugin = plugins[pluginName];

  if (!plugin) {
    console.error(`Plugin ${pluginName} not found`);
    return null;
  }

  const { component, defaultComponentProps, ...rest } = plugin;
  return { component, defaultComponentProps, ...rest };
};
