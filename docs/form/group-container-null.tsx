import React from 'react';
import { Form, DefaultPluginsType } from 'voyagejs';

const { useForm, Group } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Group<any, DefaultPluginsType>
        container={null}
        labelCol={{ style: { width: 100 } }}
        items={[
          {
            name: 'name',
            label: '姓名',
            // 不起作用
            span: 12,
            fieldType: 'input',
          },
          {
            name: 'age',
            label: '年龄',
            // 不起作用
            span: 12,
            fieldType: 'input',
          },
        ]}
      />
    </Form>
  );
};

export default Demo;
