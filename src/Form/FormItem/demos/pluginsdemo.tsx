import { Divider } from 'antd';
import React from 'react';
import { Form, FormGroup, FormItem, DEFAULT_PLUGINS as plugins, useForm, type DefaultPluginsType } from 'voyagejs';

function Plugins() {
  const [form] = useForm({ plugins });

  return (
    <Form<any, DefaultPluginsType>
      form={form}
      labelCol={{ style: { width: 50 } }}
      onValuesChange={(_, values) => {
        console.log('values', values);
      }}
    >
      <FormItem<any, DefaultPluginsType> name={'a1'} label="a1" component="inputnumber" componentProps={{}} />
      <FormItem<any, DefaultPluginsType>
        name={'a2'}
        label="a2"
        component="input"
        componentProps={{
          allowClear: true,
        }}
      />

      <FormItem<any, DefaultPluginsType>
        name={'b'}
        label="b"
        component="select"
        componentProps={{ placeholder: '请选择xx' }}
        remoteOptions={async () => {
          return [
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
            { label: 'c', value: 'c' },
          ];
        }}
      />

      <Divider />
      <FormGroup<any, DefaultPluginsType>
        span={24}
        labelCol={{ style: { width: 60 } }}
        name="group1"
        items={[
          {
            name: 'x1',
            label: 'x1',
            rules: [{ required: true, message: '请输入xx' }],
            component: 'input',
            componentProps: {
              placeholder: '请输入xx',
            },
          },
          {
            name: 'x2',
            label: 'x2',
            component: 'inputnumber',
            componentProps: {
              placeholder: '请输入数字',
              style: { width: '100%' },
            },
            reactions: [
              {
                dependencies: ['a1'],
                result: {
                  value: `$deps[0]`,
                },
              },
            ],
          },
          {
            name: 'x3',
            label: 'x3',
            component: 'select',
            options: [
              { label: 'a', value: 'a' },
              { label: 'b', value: 'b' },
              { label: 'c', value: 'c' },
            ],
            componentProps: {
              style: { width: '100%' },
              placeholder: '请选择',
            },
          },
        ]}
      />
    </Form>
  );
}

export default Plugins;
