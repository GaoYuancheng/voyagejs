/**
 * title: 主搜索模式
 * description: 只有一个字段时，单一展示
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
      enableMainSearch
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
      ]}
    />
  );
};

export default Demo;
