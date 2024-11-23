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
                value: (ctx) => {
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
                value: (ctx) => {
                  return ctx.depValues[0];
                },
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Demo;
