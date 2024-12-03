import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Form, FormStore, type FormProps } from '../../form';
import type { PluginsType } from '../../plugins';
import { Table, TableInstance, TableSearchStatus, type TableProps } from '../../table';
import { type ActionsProps } from '../Actions';
import { QueryForm, type QueryFormProps } from '../QueryForm';
import { QueryActions, type QueryActionsProps } from './QueryActions';

export * from './QueryActions';

const { useForm } = Form;

export interface QueryTableProps<RecordType extends object = any, Values = any, P extends PluginsType = PluginsType>
  extends Pick<TableProps<RecordType>, 'rowKey' | 'columns' | 'remoteDataSource' | 'initialFilters'> {
  fields: QueryFormProps<Values, P>['items'];
  formProps?: Omit<QueryFormProps<Values, P>, 'form' | 'items' | 'initialValues'>;
  tableProps?: Omit<TableProps<RecordType>, 'columns' | 'remoteDataSource'>;
  actions?: QueryActionsProps<TableInstance>['items'];
  style?: React.CSSProperties;
  className?: string;
  actionsProps?: Omit<ActionsProps<TableInstance>, 'items'>;
  rowSelection?: TableProps<RecordType>['rowSelection'];
  initialValues?: FormProps<Values, P>['initialValues'];
  pagination?: TableProps<RecordType, P>['pagination'];
}

export interface QueryTableInstance<RecordType extends object = any, Values = any, P extends PluginsType = PluginsType>
  extends TableInstance<RecordType> {
  form: FormStore<Values, P>;
}

const IQueryTable = <RecordType extends object = any, Values = any, P extends PluginsType = PluginsType>(
  props: QueryTableProps<RecordType, Values, P>,
  ref: React.Ref<QueryTableInstance<RecordType, Values, P>>,
) => {
  const [form] = useForm<Values, P>();

  const tableRef = useRef<TableInstance<RecordType>>();

  const [, update] = useState({});

  const forceUpdate = useCallback(() => {
    return update({});
  }, []);

  const {
    rowKey,
    fields = [],
    columns = [],
    remoteDataSource,
    formProps,
    tableProps,
    actions,
    style,
    className,
    pagination,
    actionsProps,
    rowSelection,
    initialValues,
    initialFilters,
  } = props;
  const { onReset: onResetForm, onSearch: onSearchForm } = formProps || {};

  const onSearch = async (values: Values) => {
    const { table } = tableRef.current!;
    table.searchStatus = TableSearchStatus.SEARCH;
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
    tableRef.current?.table.reset(form.values as any);
  };

  useEffect(() => {
    // QueryActions在没加载完成时，无法拿到table实例
    forceUpdate();
    tableRef.current!.table.params = form.values as any;
    tableRef.current?.table.refresh();
  }, []);

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
        items={fields as any}
        form={form}
        onSearch={onSearch}
        onReset={onReset}
      />
      <QueryActions<TableInstance<RecordType>>
        actionProps={{ style: { marginBottom: 16 } }}
        {...actionsProps}
        items={actions}
        getCtx={() => tableRef.current!}
      />
      <Table<RecordType>
        {...tableProps}
        rowKey={rowKey}
        pagination={pagination}
        columns={columns}
        remoteDataSource={remoteDataSource}
        initialFilters={initialFilters}
        requestOnMount={false}
        // @ts-expect-error
        ref={tableRef}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export const QueryTable = forwardRef(IQueryTable) as typeof IQueryTable;
