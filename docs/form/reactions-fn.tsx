/**
 * title: result函数格式
 * description: `result`中每一项值为函数格式
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
              result: {
                value: (ctx) => {
                  console.log('ctx', ctx);
                  return ctx.depValues[0];
                },
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
                value: (ctx) => {
                  return ctx.depValues[0];
                },
              },
            },
            {
              effects: ['d'],
              result: {
                value: (ctx) => {
                  console.log('ctx', ctx);
                  return ctx.selfValue;
                },
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
