/**
 * title: 本地数据源
 * description: 使用`dataSource`属性，设置本地数据源
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
            children: '更新数据源',
            onClick: () => {
              const dataSource = tableRef.current.table.dataSource;
              tableRef.current.table.dataSource = dataSource.map((item) => ({
                ...item,
                age: item.age + 1,
              }));
            },
          },
          {
            children: '切换分页展示状态',
            onClick: () => {
              const pagination = tableRef.current.table.pagination;
              tableRef.current.table.pagination = pagination === false ? {} : false;
            },
          },
        ]}
      />
      <Table
        ref={tableRef}
        dataSource={[
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
          { id: 11, name: '陈十三', age: 40 },
          { id: 12, name: '陈十四', age: 40 },
        ]}
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
