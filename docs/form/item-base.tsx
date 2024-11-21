import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm, Item } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Item<any, DefaultPluginsType> name="name" label="姓名" fieldType="input" />
      <Item<any, DefaultPluginsType> name="age" label="年龄" fieldType="input" />
      <Item<any, DefaultPluginsType>
        name="sex"
        label="性别"
        fieldType="select"
        options={[
          { label: '男', value: '1' },
          { label: '女', value: '2' },
        ]}
      />
    </Form>
  );
};

export default Demo;
