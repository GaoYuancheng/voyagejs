import { TableRowSelection } from 'antd/lib/table/interface';
import React, { useEffect, useMemo, useRef } from 'react';
import type { PluginsType } from '../../../plugins';
import { QueryTable, QueryTableInstance, QueryTableProps } from '../../../template';

export type QueryTableSelectProps<
  RecordType extends object = any,
  Values = any,
  P extends PluginsType = PluginsType,
> = Omit<QueryTableProps<RecordType, Values, P>, 'remoteDataSource' | 'rowKey' | 'rowSelection'> & {
  rowKey?: string;
  disabled?: boolean;
  rowSelection?: TableRowSelection<RecordType>;
} & (
    | {
        labelInValue?: false;
        onChange?: (val?: string | number) => void;
        value?: string | number;
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
        onChange?: (val?: (string | number)[]) => void;
        value?: (string | number)[];
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

  const queryTableRef = useRef<QueryTableInstance<RecordType, Values, P>>();

  const finalRowSelection: TableRowSelection<RecordType> = useMemo(() => {
    return {
      type: rowSelectionType,
      ...rowSelection,
      onChange(key, rows) {
        if (isSingleMode && labelInValue) {
          onChange?.(rows[0]);
          return;
        }

        if (isSingleMode && !labelInValue) {
          onChange?.(key[0]);
          return;
        }
        if (!isSingleMode && labelInValue) {
          onChange?.(rows);
          return;
        }
        if (!isSingleMode && !labelInValue) {
          onChange?.(key);
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
      queryTableRef.current!.table.selectedRows = value.map((i) => ({ [rowKey]: i })) as RecordType[];
      return;
    }

    if (!isSingleMode && labelInValue) {
      queryTableRef.current!.table.selectedRows = value as RecordType[];
      return;
    }
  }, [isSingleMode, value]);

  return (
    <QueryTable<RecordType, Values, P>
      {...rest}
      // @ts-expect-error
      rowKey={rowKey}
      rowSelection={finalRowSelection}
      ref={queryTableRef}
    />
  );
};
