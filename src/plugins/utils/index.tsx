import { isString } from 'radash';
import type { PluginType } from '..';

// 使用插件
export const parsePlugin = (plugins: PluginType, pluginName?: any) => {
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
