/**
 * title: 默认展开
 * description: defaultCollapse设置为false默认展开
 */
import { Input } from 'antd';
import React from 'react';
import { Form, QueryForm } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();

  return (
    <QueryForm
      form={form}
      defaultCollapse={false}
      initialValues={{ name: '张三', age: 18 }}
      onSearch={(values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('values', values);
            resolve(values);
          }, 1000);
        });
      }}
      onReset={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('reset');
            resolve('');
          }, 1000);
        });
      }}
      items={[
        {
          name: 'name',
          label: '名称',
          children: <Input allowClear placeholder="请输入" />,
        },
        {
          name: 'height',
          label: '高度',
          hidden: true,
          children: <Input allowClear placeholder="请输入" />,
        },
        {
          name: 'age',
          label: '年龄',
          children: <Input allowClear placeholder="请输入" />,
        },
        {
          name: 'count',
          label: '数量',
          children: <Input allowClear placeholder="请输入" />,
        },
        {
          name: 'time',
          label: '时间',
          children: <Input allowClear placeholder="请输入" />,
        },
      ]}
    />
  );
};

export default Demo;
