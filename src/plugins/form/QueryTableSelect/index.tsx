import { TableRowSelection } from 'antd/lib/table/interface';
import React, { useEffect, useMemo, useRef } from 'react';
import type { PluginsType } from '../../../plugins';
import { QueryTable, QueryTableInstance, QueryTableProps } from '../../../template';

type BaseValueType = React.Key;

export type QueryTableSelectProps<
  RecordType extends object = any,
  Values = any,
  P extends PluginsType = PluginsType,
> = Omit<QueryTableProps<RecordType, Values, P>, 'remoteDataSource' | 'rowKey' | 'rowSelection' | 'onChange'> & {
  rowKey?: string;
  disabled?: boolean;
  rowSelection?: TableRowSelection<RecordType>;
} & (
    | {
        labelInValue?: false;
        onChange?: (val?: BaseValueType) => void;
        value?: BaseValueType;
        rowSelectionType: 'radio';
      }
    | {
        labelInValue: true;
        onChange?: (val?: RecordType) => void;
        value?: RecordType;
        rowSelectionType: 'radio';
      }
    | {
        labelInValue?: false;
        onChange?: (val?: BaseValueType[]) => void;
        value?: BaseValueType[];
        rowSelectionType?: 'checkbox';
      }
    | {
        labelInValue: true;
        onChange?: (val?: RecordType[]) => void;
        value?: RecordType[];
        rowSelectionType?: 'checkbox';
      }
  );

export const QueryTableSelect = <RecordType extends object = any, Values = any, P extends PluginsType = PluginsType>(
  props: QueryTableSelectProps<RecordType, Values, P>,
) => {
  const { value, onChange, rowSelectionType, rowKey = 'id', labelInValue, rowSelection, ...rest } = props;

  const isSingleMode = rowSelectionType === 'radio';

  const queryTableRef = useRef<QueryTableInstance<RecordType, Values, P>>(null);

  const finalRowSelection: TableRowSelection<RecordType> = useMemo(() => {
    return {
      type: rowSelectionType,
      ...rowSelection,
      getCheckboxProps: (record) => {
        const { getCheckboxProps } = rowSelection || {};
        const { disabled: checkboxDisabled, ...restCheckboxProps } = getCheckboxProps?.(record) || {};
        return {
          ...restCheckboxProps,
          disabled: props.disabled || checkboxDisabled,
        };
      },
      onChange: (key, rows) => {
        if (isSingleMode && labelInValue) {
          // TODO: 打包报错
          onChange?.(rows[0] as any);
          return;
        }

        if (isSingleMode && !labelInValue) {
          onChange?.(key[0] as any);
          return;
        }
        if (!isSingleMode && labelInValue) {
          onChange?.(rows as any);
          return;
        }
        if (!isSingleMode && !labelInValue) {
          onChange?.(key as any);
          return;
        }
      },
    };
  }, [rowSelectionType, labelInValue]);

  useEffect(() => {
    if (value === undefined || value === null) return;

    if (isSingleMode && !labelInValue) {
      queryTableRef.current!.table.selectedRows = [{ [rowKey]: value } as RecordType];
      return;
    }

    if (isSingleMode && labelInValue) {
      queryTableRef.current!.table.selectedRows = [value as RecordType];
      return;
    }

    if (!isSingleMode && !labelInValue) {
      queryTableRef.current!.table.selectedRows = (value as BaseValueType[]).map((i) => ({
        [rowKey]: i,
      })) as RecordType[];
      return;
    }

    if (!isSingleMode && labelInValue) {
      queryTableRef.current!.table.selectedRows = value as RecordType[] as RecordType[];
      return;
    }
  }, [isSingleMode, value]);

  return (
    <QueryTable<RecordType, Values, P> {...rest} rowKey={rowKey} rowSelection={finalRowSelection} ref={queryTableRef} />
  );
};
