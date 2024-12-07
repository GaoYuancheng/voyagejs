/**
 * title: 基础使用
 * description: 使用 items 属性快速编写表单
 */

import { Input } from 'antd';
import React from 'react';
import { Form } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      items={[
        {
          name: 'name',
          label: '姓名',
          children: <Input placeholder="请输入姓名" />,
        },
        {
          name: 'age',
          label: '年龄',
          children: <Input placeholder="请输入年龄" />,
        },
      ]}
    />
  );
};

export default Demo;
