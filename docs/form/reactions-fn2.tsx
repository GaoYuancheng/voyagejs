/**
 * title: result值函数模式
 * description: `result`函数模式
 */
import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm } = Form;

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
              result: (ctx) => {
                console.log('ctx', ctx);
                const { deps, depValues, target } = ctx;
                // 但这种方式不会触发循环联动
                target.value = depValues[0];
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
              result: (ctx) => {
                console.log('ctx', ctx);
                const { deps, depValues, target } = ctx;
                target.value = depValues[0];
              },
            },
            {
              effects: ['d'],
              result: (ctx) => {
                console.log('ctx', ctx);
                const { deps, depValues, target } = ctx;
                target.value = depValues[0];
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
