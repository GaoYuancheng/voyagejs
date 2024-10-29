import { Input } from 'antd';
import React from 'react';
import { Form, QueryForm } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();

  return (
    <QueryForm
      form={form}
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
          name: 'age',
          label: '年龄',
          children: <Input allowClear placeholder="请输入" />,
        },
      ]}
    />
  );
};

export default Demo;
