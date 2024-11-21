import React from 'react';
import { Form, DefaultPluginsType } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form<any, DefaultPluginsType>
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
