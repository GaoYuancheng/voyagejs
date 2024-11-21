import { sleep } from 'radash';
import React from 'react';
import { Form, DefaultPluginsType } from 'voyagejs';

const { useForm, Group } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      remoteValues={async () => {
        await sleep(2000);
        return {
          name: '张三',
          age: 18,
          address: '北京市海淀区',
        };
      }}
    >
      <Group container="card">
        <Group<any, DefaultPluginsType>
          container="card"
          containerProps={{ title: '基础信息', type: 'inner' }}
          labelCol={{ style: { width: 100 } }}
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
          container="card"
          containerProps={{ title: '其他信息', type: 'inner' }}
          labelCol={{ style: { width: 100 } }}
          items={[
            {
              name: 'address',
              label: '地址',
              fieldType: 'input',
            },
          ]}
        />
      </Group>
    </Form>
  );
};

export default Demo;
