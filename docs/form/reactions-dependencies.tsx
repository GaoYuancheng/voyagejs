/**
 * title: 被动联动
 * description: 被动联动：b 状态受 a 控制，联动效果配置在 b 上
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
                value: `$deps[0] ? $deps[0] === '1' ? '1' : '2' : ''`,
                required: `$deps[0] === '1'`,
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
              dependencies: ['b'],
              result: {
                value: `$deps[0] ? $deps[0] === '1' ? '1' : '2' : ''`,
                required: `$deps[0] === '1'`,
              },
            },
          ],
        },
        {
          name: 'd',
          label: 'd',
          fieldType: 'input',
          reactions: [
            {
              dependencies: ['c'],
              result: {
                value: `$deps[0] ? $deps[0] === '1' ? '1' : '2' : ''`,
                required: `$deps[0] === '1'`,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Demo;
