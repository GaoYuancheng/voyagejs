import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Form, FormStore } from '../../form';
import type { PluginsType } from '../../plugins';
import { Table, TableInstance, type TableProps } from '../../table';
import { type ActionsProps } from '../Actions';
import { QueryForm, type QueryFormProps } from '../QueryForm';
import { QueryActions, type QueryActionsProps } from './QueryActions';

const { useForm } = Form;

export interface QueryTableProps<RecordType = any, Values = any, P extends PluginsType = PluginsType>
  extends Pick<TableProps<RecordType>, 'columns' | 'remoteDataSource'> {
  fields: QueryFormProps<Values, P>['items'];
  formProps?: Omit<QueryFormProps<Values>, 'form' | 'items' | 'initialValues'>;
  tableProps?: Omit<TableProps, 'columns' | 'remoteDataSource'>;
  actions?: QueryActionsProps<TableInstance>['items'];
  style?: React.CSSProperties;
  className?: string;
  actionsProps?: Omit<ActionsProps<TableInstance>, 'items'>;
  rowSelection?: TableProps<RecordType>['rowSelection'];
  initialValues?: Values;
}

export interface QueryFormInstance<RecordType = any, Values = any, P extends PluginsType = PluginsType>
  extends TableInstance<RecordType> {
  form: FormStore<Values, P>;
}

const IQueryTable = <RecordType, Values = any, P extends PluginsType = PluginsType>(
  props: QueryTableProps<RecordType, Values, P>,
  ref: React.Ref<QueryFormInstance<RecordType, Values, P>>,
) => {
  const [form] = useForm();

  const tableRef = useRef<TableInstance>();

  const [, update] = useState({});

  const forceUpdate = useCallback(() => {
    return update({});
  }, []);

  useEffect(() => {
    // QueryActions在没加载完成时，无法拿到table实例
    forceUpdate();
  }, []);

  const {
    fields = [],
    columns = [],
    remoteDataSource,
    formProps,
    tableProps,
    actions,
    style,
    className,
    actionsProps,
    rowSelection,
    initialValues,
  } = props;
  const { onReset: onResetForm, onSearch: onSearchForm } = formProps || {};

  const onSearch = async (values: Values) => {
    const { table } = tableRef.current!;
    if (table?.pagination) {
      table.pagination.current = 1;
    }
    // @ts-expect-error
    table.params = values;
    onSearchForm?.(values);
    await tableRef.current?.table.refresh(values);
  };

  const onReset = () => {
    onResetForm?.();
    tableRef.current?.table.reset();
  };

  useImperativeHandle(ref, () => {
    return {
      table: tableRef.current!.table,
      modal: tableRef.current!.modal,
      form: form,
    };
  });

  return (
    <div style={style} className={className}>
      <QueryForm<Values, P>
        {...formProps}
        initialValues={initialValues}
        items={fields}
        form={form}
        onSearch={onSearch}
        onReset={onReset}
      />
      <QueryActions<TableInstance> {...actionsProps} items={actions} getCtx={() => tableRef.current!} />
      <Table<RecordType>
        {...tableProps}
        columns={columns}
        remoteDataSource={remoteDataSource}
        initialParams={initialValues}
        ref={tableRef}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export const QueryTable = forwardRef(IQueryTable) as typeof IQueryTable;
