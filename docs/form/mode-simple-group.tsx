import React, { Fragment } from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm, Group } = Form;

const Demo = () => {
  const [form] = useForm();

  return (
    <Fragment>
      <Form<any, DefaultPluginsType> form={form}>
        <Group
          container="card"
          containerProps={{ title: '隐藏组' }}
          hidden
          items={[
            {
              name: 'hidden1',
              label: '隐藏组1',
              fieldType: 'input',
            },
            {
              name: 'hidden2',
              label: '隐藏组2',
              fieldType: 'input',
            },
          ]}
        />
        <Group
          container="card"
          containerProps={{ title: '不渲染组' }}
          render={false}
          items={[
            {
              name: 'render1',
              label: '不渲染组1',
              fieldType: 'input',
            },
            {
              name: 'render2',
              label: '不渲染组2',
              fieldType: 'input',
            },
          ]}
        />
        <Group
          container="card"
          containerProps={{ title: '禁用组 ' }}
          disabled
          items={[
            {
              name: 'disabled1',
              label: '禁用组1',
              fieldType: 'input',
            },
            {
              name: 'disabled2',
              label: '禁用组2',
              fieldType: 'input',
            },
          ]}
        />
        <Group
          container="card"
          containerProps={{ title: '只读组 ' }}
          readOnly
          items={[
            {
              name: 'readOnly1',
              label: '只读组1',
              fieldType: 'input',
            },
            {
              name: 'readOnly2',
              label: '只读组2',
              fieldType: 'input',
            },
          ]}
        />
      </Form>
    </Fragment>
  );
};

export default Demo;
