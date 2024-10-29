import React, { useRef } from 'react';
import { Form } from '../../form';
import { Table, TableRef, type TableProps } from '../../table';
import { QueryForm, QueryFormProps } from '../QueryForm';

const { useForm } = Form;

export interface QueryTableProps<RecordType extends Object = any, Values = any>
  extends Pick<QueryFormProps<Values>, 'items'>,
    Pick<TableProps<RecordType>, 'columns' | 'remoteDataSource'> {
  formProps?: Omit<QueryFormProps<Values>, 'form' | 'items'>;
  tableProps?: Omit<TableProps, 'columns' | 'remoteDataSource'>;
}

export const QueryTable = <RecordType extends Object = any, Values = any>(
  props: QueryTableProps<RecordType, Values>,
) => {
  const [form] = useForm();

  const tableRef = useRef<TableRef>();

  const { items = [], columns = [], remoteDataSource, formProps, tableProps } = props;
  const { onReset: onResetForm, onSearch: onSearchForm } = formProps || {};

  const onSearch = async (values: Values) => {
    const { table } = tableRef.current!;
    if (table?.pagination) {
      table.pagination.current = 1;
    }
    table!.params = values;
    onSearchForm?.(values);
    await tableRef.current?.table.refresh(values);
  };

  const onReset = () => {
    onResetForm?.();
    tableRef.current?.table.reset();
  };

  return (
    <div>
      <QueryForm<Values> {...formProps} items={items} form={form} onSearch={onSearch} onReset={onReset} />
      <Table columns={columns} remoteDataSource={remoteDataSource} {...tableProps} ref={tableRef} />
    </div>
  );
};
