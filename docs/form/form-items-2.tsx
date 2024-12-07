/**
 * title: 嵌套使用
 * description: items支持分组，可嵌套使用
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
          title: '分组1',
          span: 12,
          items: [
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
          ],
        },
        {
          title: '分组2',
          span: 24,
          items: [
            {
              name: 'address',
              label: '地址',
              children: <Input placeholder="请输入地址" />,
            },
          ],
        },
      ]}
    />
  );
};

export default Demo;
