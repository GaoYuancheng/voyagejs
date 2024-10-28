import { Input } from 'antd';
import React from 'react';
import { Form, QueryForm } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <QueryForm
      form={form}
      onSubmit={(values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('values', values);
            resolve(values);
          }, 1000);
        });
      }}
      items={[
        {
          name: 'name',
          label: '名称',
          children: <Input placeholder="请输入搜索名称" />,
        },
      ]}
    />
  );
};

export default Demo;
