import { isString } from 'radash';
import React from 'react';
import type { PluginType } from '..';

// 使用插件
export const parsePlugin = (
  plugins: PluginType,
  pluginName?: any,
  props?: any,
): { element: React.ReactNode; defaultFormItemProps?: any } => {
  if (!isString(pluginName)) {
    return { element: pluginName };
  }

  const plugin = plugins[pluginName];

  if (!plugin) {
    console.error(`Plugin ${pluginName} not found`);
    return { element: null };
  }

  const { component: Com, defaultComponentProps, ...rest } = plugin;

  return {
    // @ts-expect-error
    element: <Com {...(defaultComponentProps as any)} {...props} />,
    ...rest,
  };
};
