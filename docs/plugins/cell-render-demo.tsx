/**
 * title: 表头筛选插件
 */
import { sleep } from 'radash';
import React from 'react';
import { Table } from 'voyagejs';

const statusOptions = [
  { label: '成功', value: 'success', color: 'success', status: 'success' },
  { label: '警告', value: 'warn', color: 'warning', status: 'warning' },
  { label: '失败', value: 'fail', color: 'error', status: 'error' },
  { label: '其他', value: 'other', color: 'cyan', status: 'cyan' },
];

const Demo = () => {
  return (
    <Table
      remoteDataSource={async (params) => {
        console.log('表头筛选params', params);
        await sleep(2000);
        return {
          data: [
            { id: 1, name: '张三', age: 18, status: 'success' },
            { id: 2, name: '', age: 20, status: 'warn' },
            { id: 3, name: '王五', age: 22, status: 'fail' },
            { id: 4, name: '赵六', age: 25, status: 'other' },
            { id: 5, name: '孙七', age: 28, status: 'other' },
            { id: 6, name: '周八', age: 30, status: 'other' },
            { id: 7, name: '吴九', age: 32, status: 'other' },
            { id: 8, name: '郑十', age: 35, status: 'other' },
            { id: 9, name: '冯十一', age: 38 },
            { id: 10, name: '陈十二', age: 40 },
          ],
          total: 100,
        };
      }}
      columns={[
        {
          key: 'index',
          title: '序号',
          render: 'index',
        },
        {
          key: 'name',
          title: '姓名',
          render: 'holder',
        },
        {
          key: 'status',
          title: '状态',
          options: statusOptions.map((item) => ({ label: item.label, value: item.value })),
          render: 'select',
        },
        {
          key: 'status',
          title: '状态',
          options: statusOptions.map((i) => {
            const { status, ...rest } = i;
            return rest;
          }),
          render: 'tag',
        },
        {
          key: 'status',
          title: '状态',
          options: statusOptions.map((i) => {
            const { color, ...rest } = i;
            return rest;
          }),
          render: 'badge',
        },
        {
          key: 'operator',
          title: '操作',
        },
      ]}
    />
  );
};

export default Demo;
