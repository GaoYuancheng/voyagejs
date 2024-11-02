import { message } from 'antd';
import { toJS } from 'mobx';
import React, { useEffect, useRef } from 'react';
import { QueryFormInstance, QueryTable } from 'voyagejs';
import { columns, remoteDataSource } from 'voyagejs/table/demos/config';

const Demo = () => {
  const ref = useRef<QueryFormInstance>();

  useEffect(() => {
    console.log('ref.current?.table.selectedRows.length', ref.current?.table.selectedRows.length);
  }, []);

  return (
    <QueryTable
      ref={ref}
      remoteDataSource={remoteDataSource}
      rowSelection
      initialValues={{ name: '张三', age: '18' }}
      // actions={[]}
      actions={{
        left: [{ actionType: 'text', type: 'title', children: '标题' }],
        right: [
          {
            actionType: 'button',
            children: '新增',
            type: 'primary',
            onClick: (e, ctx) => {
              console.log('新增~', ctx);
              ctx.modal.open({
                title: '新增',
                children: <div>新增</div>,
                onOk: () => {
                  ctx.modal.close();
                  message.success('新增成功');
                  ctx.table.refresh();
                },
              });
            },
          },
          {
            type: 'primary',
            disabled: () => ref.current?.table.selectedRows.length === 0,
            children: '清空选中行',
            onClick: (e, ctx) => {
              console.log('选中行~', toJS(ctx.table.selectedRows));
              ctx.table.selectedRows = [];
              console.log('选中行清空~', toJS(ctx.table.selectedRows));
            },
          },
        ],
      }}
      fields={[
        {
          name: 'name',
          label: '名称',
          component: 'input',
        },
        {
          name: 'age',
          label: '年龄',
          component: 'input',
        },
      ]}
      columns={columns}
    />
  );
};

export default Demo;
