import { isFunction, isString } from 'radash';
import React, { cloneElement, isValidElement } from 'react';
import type { PluginType } from '../interfaces';

// 使用插件
export const parsePlugin = (
  plugins: PluginType,
  pluginName?: any,
  pluginProps?: any,
  ctx?: any,
): { element: React.ReactNode; defaultFormItemProps?: any } => {
  if (isFunction(pluginName)) {
    return { element: pluginName(ctx) };
  }

  if (isValidElement(pluginName)) {
    return { element: cloneElement(pluginName, pluginProps) };
  }

  if (!isString(pluginName)) {
    return { element: pluginName };
  }

  // 插件名转成小写匹配，并去除特殊字符
  const plugin = plugins[pluginName.toLocaleLowerCase() /** replace(/[^\w\s]/g, '') */];

  if (!plugin) {
    console.error(`Plugin ${pluginName} not found`);
    return { element: null };
  }

  const { component: Com, defaultComponentProps, defaultFilterProps, ...rest } = plugin;

  const { _filter } = ctx || {};

  return {
    element: (
      <Com
        {...(isFunction(defaultComponentProps) ? defaultComponentProps(ctx) : (defaultComponentProps as any))}
        {...(_filter && defaultFilterProps ? defaultFilterProps(ctx) : {})}
        {...pluginProps}
        data-voyagejs-filter={_filter}
      />
    ),
    ...rest,
  };
};
