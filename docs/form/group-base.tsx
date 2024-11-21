import React from 'react';
import { Form, DefaultPluginsType } from 'voyagejs';

const { useForm, Group } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Group<any, DefaultPluginsType>
        span={12}
        rowProps={{}}
        labelCol={{ style: { width: 100 } }}
        title="基础信息"
        items={[
          {
            name: 'name',
            label: '姓名',
            fieldType: 'input',
          },
          {
            name: 'age',
            label: '年龄',
            fieldType: 'input',
          },
        ]}
      />

      <Group<any, DefaultPluginsType>
        title="其他信息"
        span={12}
        rowProps={{}}
        labelCol={{ style: { width: 100 } }}
        items={[
          {
            name: 'address',
            label: '地址',
            fieldType: 'input',
          },
        ]}
      />
    </Form>
  );
};

export default Demo;
