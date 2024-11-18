import React from 'react';
import { TableInstance } from 'voyagejs/table';
import type { FilterDropdownProps } from '../table/FilterDropdown';

export type PluginType = {
  [key: string]: {
    component: React.ComponentType<any>;
    defaultComponentProps: any;
    defaultFormItemProps?: any;
    defaultFilterProps?: (ctx: FilterDropdownProps) => any;
  };
};

export type PluginsType = {
  container: PluginType;
  field: PluginType;
  action: PluginType;
  cell: PluginType;
};

export type PluginPropsType<
  P extends PluginsType,
  T extends keyof PluginsType,
  CN extends keyof PluginsType[T],
> = P[T][CN]['component'] extends React.ComponentType<infer E> ? E : never;

export interface FieldBaseProps {
  /** 禁用态 */
  readOnly?: boolean;
}

export interface CellBaseProps<RecordType extends object = any> extends TableInstance<RecordType> {
  record: RecordType;
  index: number;
  value: any;
}
