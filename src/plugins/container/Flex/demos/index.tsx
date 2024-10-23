import React from 'react';
import { Form, useForm, FormGroup } from '@voyagejs/form';
import { DEFAULT_COMPONENT_PLUGINS, DEFAULT_CONTAINER_PLUGINS } from '@voyagejs/plugins';

export function FlexPlugin() {
  const [form] = useForm({ plugins: Object.assign({}, DEFAULT_COMPONENT_PLUGINS, DEFAULT_CONTAINER_PLUGINS) });

  return (
    <Form
      form={form}
      onValuesChange={(_, values) => {
        console.log('values', values);
      }}
    >
      <FormGroup
        container="flex"
        containerProps={{
          vertical: false,
        }}
        items={[
          {
            name: 'group1',
            span: 24,
            items: [
              {
                name: 'a',
                label: 'a',
                component: 'input',
              },
              {
                name: 'b',
                label: 'b',
                component: 'input',
              },
            ],
          },
          {
            name: 'group2',
            span: 24,
            items: [
              {
                name: 'c',
                label: 'c',
                component: 'input',
              },
              {
                name: 'd',
                label: 'd',
                component: 'input',
              },
            ],
          },
        ]}
      />
    </Form>
  );
}
