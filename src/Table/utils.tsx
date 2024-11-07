import type { ColumnType as AColumnType } from 'antd/lib/table';
import type { FilterDropdownProps } from 'antd/lib/table/interface';
import { isString } from 'radash';
import React from 'react';
import type { ModalFormInstance } from '../form';
import type { PluginsType } from '../plugins';
import { FilterDropdown } from './FilterDropdown';
import type { ColumnType } from './interface';
import type { TableStore } from './store';

export function renderColumns<RecordType extends object = any, P extends PluginsType = PluginsType>(
  columns: ColumnType<RecordType>[],
  getCtx: () => { table: TableStore; modal: ModalFormInstance },
  callback?: (columnData: any) => void,
): AColumnType<RecordType>[] {
  return columns
    .filter((column) => column.visible !== false)
    .map((column) => {
      const { children, filterField, filterFieldProps, filterDropdown } = column;

      //  ===== 改写render =====
      const finalRender = column.render
        ? (value: any, record: RecordType, index: number) => column.render!({ value, record, index, ...getCtx() })
        : undefined;

      const table = getCtx().table;

      //  ===== filterDropdown支持插件 =====
      const getFilterDropDownProps = () => {
        if (isString(filterField)) {
          table.filterConvert[column.key || column.dataIndex] = (value: any[]) => {
            return Array.isArray(value) ? value[0] : value;
          };

          return {
            filterDropdown: (props: FilterDropdownProps) => (
              <FilterDropdown<RecordType, P>
                {...props}
                ctx={{ column }}
                dataIndex={column.key!}
                component={filterField}
                componentProps={filterFieldProps}
              />
            ),
          };
        }

        return { filterDropdown };
      };

      return {
        dataIndex: column.key,
        ...column,
        ...getFilterDropDownProps(),
        children: children ? renderColumns(children, ctx, callback) : undefined,
        render: finalRender,
        ...(callback ? callback(column) : {}),
      };
    });
}
