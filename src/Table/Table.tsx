import { Table as ATable } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { Fragment, forwardRef, useImperativeHandle, useMemo } from 'react';
import type { ModalFormInstance } from '../Form';
import { useModalForm } from '../Form';
import type { TableProps } from './interface';
import { TableStore } from './store';
import { renderColumns } from './utils';

export type TableRef = {
  table: TableStore;
  modal: ModalFormInstance;
};

export const Table = observer(
  forwardRef((props: TableProps, ref: React.Ref<TableRef>) => {
    const table = useMemo(() => new TableStore(props), [props]);

    const [modalForm, modalCtx] = useModalForm();

    const { columns } = props;

    useImperativeHandle(
      ref,
      () => ({
        table,
        modal: modalCtx,
      }),
      [table, modalCtx],
    );

    return (
      <Fragment>
        {modalForm}
        <ATable
          rowKey={'id'}
          bordered={false}
          onChange={table.onTableChange}
          {...toJS(table.tableProps)}
          columns={renderColumns(columns!, { table, modal: modalCtx })}
        />
      </Fragment>
    );
  }),
);
