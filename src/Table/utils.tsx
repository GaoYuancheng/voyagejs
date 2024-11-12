import type { ColumnType as AColumnType } from 'antd/lib/table';
import type { FilterDropdownProps } from 'antd/lib/table/interface';
import { isString } from 'radash';
import React from 'react';
import { ColumnTitle } from '../components';
import type { ModalFormInstance } from '../form';
import type { PluginsType } from '../plugins';
import { toStringKey } from '../utils';
import { FilterDropdown } from './FilterDropdown';
import type { ColumnType } from './interface';
import type { TableStore } from './store';
import { TableSearchStatus } from './store';

export function renderColumns<RecordType extends object = any, P extends PluginsType = PluginsType>(
  columns: ColumnType<RecordType>[],
  props: any,
  getCtx: () => { table: TableStore; modal: ModalFormInstance },
  callback?: (columnData: any) => void,
): AColumnType<RecordType>[] {
  return columns
    .filter((column) => column.visible !== false)
    .map((column) => {
      const { children, filterFieldType, filterFieldProps, filterDropdown, title, required, tooltip } = column;
      const { initialFilters } = props;

      const dataIndex: string = toStringKey(column.dataIndex) || column.key!;

      //  ===== 改写render参数类型，增加 table modal实例传参 =====
      const finalRender = column.render
        ? (value: any, record: RecordType, index: number) => column.render!({ value, record, index, ...getCtx() })
        : undefined;

      const table = getCtx().table;

      //  ===== filterDropdown支持插件 =====
      const getFilterDropDownProps = () => {
        if (isString(filterFieldType)) {
          table.filterConvert[dataIndex] = (value: any[]) => {
            return Array.isArray(value) ? value[0] : value;
          };

          return {
            filterDropdown: (p: FilterDropdownProps) => (
              <FilterDropdown<RecordType, P>
                {...p}
                ctx={{ column }}
                dataIndex={column.key!}
                fieldType={filterFieldType}
                fieldProps={filterFieldProps}
              />
            ),
          };
        }

        return { filterDropdown };
      };

      // ===== 表头处理 =====
      const realTitle = (
        <ColumnTitle required={required} tooltip={tooltip}>
          {title}
        </ColumnTitle>
      );

      // ===== 过滤值处理 =====
      const defaultFilteredValue = initialFilters?.[dataIndex] ? [initialFilters[dataIndex]] : [];

      const filteredValue =
        table.searchStatus === TableSearchStatus.RESET
          ? defaultFilteredValue
          : table.filter[dataIndex] && table.filterConvert[dataIndex]
          ? [table.filter[dataIndex]]
          : table.filter[dataIndex] || [];

      return {
        dataIndex: column.key,
        defaultFilteredValue,
        filterResetToDefaultFilteredValue: true,
        ...column,
        ...getFilterDropDownProps(),
        title: realTitle,
        // TODO: Columns should all contain `filteredValue` or not contain `filteredValue`
        ...(filteredValue ? { filteredValue } : {}),
        children: children ? renderColumns(children, props, getCtx, callback) : undefined,
        render: finalRender,
        ...(callback ? callback(column) : {}),
      };
    });
}
