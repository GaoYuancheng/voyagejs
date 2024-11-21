import { sleep } from 'radash';
import React from 'react';
import { Form, DefaultPluginsType } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form<any, DefaultPluginsType>
      remoteValues={async () => {
        await sleep(2000);
        return {
          name: '张三',
          age: 18,
        };
      }}
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
