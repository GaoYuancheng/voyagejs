/**
 * title: 同时使用
 * description: b 状态受 a 控制，同时控制 c 状态
 */
import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm, Item } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form<any, DefaultPluginsType>
      form={form}
      items={[
        {
          name: 'a',
          label: 'a',
          fieldType: 'input',
        },
        {
          name: 'b',
          label: 'b',
          fieldType: 'input',
          reactions: [
            {
              dependencies: ['a'],
              result: {
                value: `$self ? $self === '1' ? '1' : '2' : ''`,
                required: `$self === '1'`,
              },
            },
            {
              effects: ['c'],
              result: {
                value: `$self ? $self === '1' ? '1' : '2' : ''`,
                required: `$self === '1'`,
              },
            },
          ],
        },
        {
          name: 'c',
          label: 'c',
          fieldType: 'input',
          reactions: [
            {
              effects: ['d'],
              result: {
                value: `$self ? $self === '1' ? '1' : '2' : ''`,
                required: `$self === '1'`,
              },
            },
          ],
        },
        {
          name: 'd',
          label: 'd',
          fieldType: 'input',
        },
      ]}
    />
  );
};

export default Demo;
