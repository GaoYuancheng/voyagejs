import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm, Item } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Item<any, DefaultPluginsType>
        {...{
          name: 'name',
          label: '姓名',
          fieldType: 'input',
        }}
      />
      <Item<any, DefaultPluginsType>
        name="age"
        label="年龄"
        fieldType="input"
        reactions={[
          {
            dependencies: ['name'],
            result: {
              value: `$deps[0] ? +  $deps[0] +'长生不老' : ''`,
            },
          },
        ]}
      />
    </Form>
  );
};

export default Demo;
