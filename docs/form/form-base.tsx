import { Input } from 'antd';
import React from 'react';
import { Form } from 'voyagejs';

const { Item, useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Item name="name" label="姓名">
        <Input placeholder="请输入姓名" />
      </Item>
      <Item name="age" label="年龄">
        <Input placeholder="请输入年龄" />
      </Item>
    </Form>
  );
};

export default Demo;
