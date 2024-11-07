import React from 'react';
import type { FilterDropdownProps } from '../table/FilterDropdown';

export type PluginType = {
  [key: string]: {
    component: React.ComponentType<any>;
    defaultComponentProps: unknown;
    defaultFormItemProps?: unknown;
    defaultFilterProps?: (ctx: FilterDropdownProps) => any;
  };
};

export type PluginsType = {
  container: PluginType;
  field: PluginType;
  action: PluginType;
};

export type PluginPropsType<
  P extends PluginsType,
  T extends keyof PluginsType,
  CN extends keyof PluginsType[T],
> = P[T][CN]['component'] extends React.ComponentType<infer E> ? E : never;
