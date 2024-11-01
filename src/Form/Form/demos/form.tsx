import { sleep } from 'radash';
import React from 'react';
import { DEFAULT_PLUGINS, Form, useForm } from 'voyagejs';

function RemoteValues() {
  const [form] = useForm();

  return (
    <div data-testid="container">
      <Form<any, typeof DEFAULT_PLUGINS>
        form={form}
        onValuesChange={(_, values) => {
          console.log('values', values);
        }}
        spinProps={{ size: 'large' }}
        remoteValues={async () => {
          await sleep(2000);
          return {
            a: '1',
            b: '2',
            c: '3',
            d: '4',
          };
        }}
        items={[
          {
            name: 'a',
            label: 'a',
            component: 'input',
            componentProps: {
              allowClear: true,
            },
          },
          {
            name: 'b',
            label: 'b',
            component: 'input',
            componentProps: {
              placeholder: '请输入',
            },
          },
          {
            name: 'c',
            label: 'c',
            component: 'input',
            componentProps: {
              placeholder: '请输入',
            },
          },
          {
            name: 'd',
            label: 'd',
            component: 'input',
            componentProps: {
              placeholder: '请输入',
            },
          },
        ]}
      />
    </div>
  );
}

export default RemoteValues;
