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
          fieldType: 'input',
          fieldProps: {},
        },
        {
          name: 'age',
          label: '年龄',
          fieldType: 'input',
        },
      ]}
    />
  );
};

export default Demo;
