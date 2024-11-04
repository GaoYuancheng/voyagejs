import type { ColumnType as AColumnType } from 'antd/lib/table';
import type { FilterDropdownProps } from 'antd/lib/table/interface';
import { isString } from 'radash';
import React from 'react';
import type { ModalFormInstance } from '../form';
import { FilterDropdown } from './FilterDropdown';
import type { ColumnType } from './interface';
import type { TableStore } from './store';

export function renderColumns<RecordType extends object = any>(
  columns: ColumnType<RecordType>[],
  ctx: { table: TableStore; modal: ModalFormInstance },
  callback?: (columnData: any) => void,
): AColumnType<RecordType>[] {
  return columns
    .filter((column) => column.visible !== false)
    .map((column) => {
      const { children, filterField, filterFieldProps, filterDropdown } = column;

      //  ===== 改写render =====
      const finalRender = column.render
        ? (value: any, record: RecordType, index: number) => column.render!({ value, record, index, ...ctx })
        : undefined;

      //  ===== filterDropdown支持插件 =====
      const getFilterDropDown = () => {
        if (isString(filterField)) {
          return (props: FilterDropdownProps) => (
            <FilterDropdown
              {...props}
              ctx={{ column }}
              table={ctx.table}
              dataIndex={column.key!}
              component={filterField}
              componentProps={filterFieldProps}
            />
          );
        }

        return filterDropdown;
      };

      return {
        dataIndex: column.key,
        ...column,
        filterDropdown: getFilterDropDown(),
        children: children ? renderColumns(children, ctx, callback) : undefined,
        render: finalRender,
        ...(callback ? callback(column) : {}),
      };
    });
}
