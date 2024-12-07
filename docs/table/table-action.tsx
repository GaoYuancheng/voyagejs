/**
 * title: 表格刷新
 */
import { sleep } from 'radash';
import React, { Fragment, useRef } from 'react';
import { ButtonActions, Table, TableInstance, TextActions } from 'voyagejs';

const Demo = () => {
  const tableRef = useRef<TableInstance>(null);

  return (
    <Fragment>
      <ButtonActions
        actions={[
          {
            children: '刷新',
            onClick: () => {
              tableRef.current?.table.refresh();
            },
          },
          {
            children: '新增',
            onClick: () => {
              tableRef.current?.modal.open({
                title: '新增',
                items: [
                  {
                    name: 'name',
                    label: '姓名',
                    fieldType: 'input',
                    rules: [{ required: true, message: '请输入姓名' }],
                  },
                  {
                    name: 'age',
                    label: '年龄',
                    fieldType: 'input',
                    rules: [{ required: true, message: '请输入年龄' }],
                  },
                ],
                onOk: async (e, { values }) => {
                  await sleep(2000);
                  tableRef.current!.modal.close();
                  tableRef.current!.table.refresh();
                },
              });
            },
          },
        ]}
      />
      <Table
        ref={tableRef}
        remoteDataSource={async (params) => {
          console.log('actionparams', params);
          await sleep(2000);
          return {
            data: [
              { id: 1, name: '张三', age: 18 },
              { id: 2, name: '李四', age: 20 },
              { id: 3, name: '王五', age: 22 },
              { id: 4, name: '赵六', age: 25 },
              { id: 5, name: '孙七', age: 28 },
              { id: 6, name: '周八', age: 30 },
              { id: 7, name: '吴九', age: 32 },
              { id: 8, name: '郑十', age: 35 },
              { id: 9, name: '冯十一', age: 38 },
              { id: 10, name: '陈十二', age: 40 },
            ],
            total: 100,
          };
        }}
        columns={[
          {
            key: 'name',
            title: '姓名',
          },
          {
            key: 'age',
            title: '年龄',
          },
          {
            key: 'operator',
            title: '操作',
            render: (ctx) => {
              return (
                <TextActions
                  actions={[
                    {
                      children: '编辑',
                      onClick: async () => {
                        ctx.modal.open({
                          title: '编辑',
                          initialValues: ctx.record,
                          formProps: {
                            labelCol: { span: 4 },
                          },
                          items: [
                            {
                              name: 'name',
                              label: '姓名',
                              fieldType: 'input',
                              rules: [{ required: true, message: '请输入姓名' }],
                            },
                            {
                              name: 'age',
                              label: '年龄',
                              fieldType: 'input',
                              rules: [{ required: true, message: '请输入年龄' }],
                            },
                          ],
                          onOk: async (e, { values }) => {
                            await sleep(2000);
                            ctx.modal.close();
                            ctx.table.refresh();
                          },
                        });
                      },
                    },
                    {
                      children: '删除',
                      confirm: '确定删除吗？',
                      type: 'danger',
                      onClick: async () => {
                        await sleep(2000);
                        ctx.table.refresh();
                      },
                    },
                  ]}
                />
              );
            },
          },
        ]}
      />
    </Fragment>
  );
};

export default Demo;
