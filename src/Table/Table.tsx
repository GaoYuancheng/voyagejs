import { Table as ATable } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { Fragment, forwardRef, useImperativeHandle, useMemo } from 'react';
import type { ModalFormInstance } from '../form';
import { useModalForm } from '../form';
import type { PluginsType } from '../plugins';
import type { TableProps } from './interface';
import { TableStore } from './store';
import { renderColumns } from './utils';

export type TableInstance<RecordType extends object = any, Values = any, P extends PluginsType = PluginsType> = {
  table: TableStore<RecordType>;
  modal: ModalFormInstance<Values, P>;
};

const ITable = <RecordType extends object, P extends PluginsType = PluginsType>(
  props: TableProps<RecordType, P>,
  ref: React.Ref<TableInstance<RecordType, P>>,
) => {
  // @ts-expect-error
  const table = useMemo(() => new TableStore<RecordType>(props), [props]);

  const [modalForm, modalCtx] = useModalForm<P>();

  const { columns } = props;

  useImperativeHandle(
    ref,
    () => ({
      table,
      modal: modalCtx,
    }),
    [table, modalCtx],
  );

  const finalColumns = renderColumns<RecordType, P>(columns!, { initialFilters: props.initialFilters }, () => ({
    table,
    modal: modalCtx,
  }));

  console.log('finalColumns', finalColumns);

  return (
    <Fragment>
      {modalForm}
      <ATable<RecordType>
        rowKey={'id'}
        bordered={false}
        onChange={table.onTableChange}
        {...toJS(table.tableProps)}
        columns={finalColumns}
      />
    </Fragment>
  );
};

export const Table = observer(forwardRef(ITable)) as typeof ITable;
