import { isString } from 'radash';
import React from 'react';
import type { PluginType } from '..';

// 使用插件
export const parsePlugin = (
  plugins: PluginType,
  pluginName?: any,
  props?: any,
  ctx?: any,
): { element: React.ReactNode; defaultFormItemProps?: any } => {
  if (!isString(pluginName)) {
    return { element: pluginName };
  }

  const plugin = plugins[pluginName.toLocaleLowerCase()];

  if (!plugin) {
    console.error(`Plugin ${pluginName} not found`);
    return { element: null };
  }

  const { component: Com, defaultComponentProps, defaultFilterProps, ...rest } = plugin;

  return {
    // @ts-expect-error
    element: <Com {...(defaultComponentProps as any)} {...defaultFilterProps?.(ctx)} {...props} />,
    ...rest,
  };
};
