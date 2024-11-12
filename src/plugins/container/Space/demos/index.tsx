import React from 'react';
import { Form, FormGroup, useForm } from 'voyagejs';

function SpaceDemo() {
  const [form] = useForm();

  return (
    <Form
      form={form}
      onValuesChange={(_, values) => {
        console.log('values', values);
      }}
    >
      <FormGroup
        container="space"
        containerProps={{
          direction: 'vertical',
          size: 'middle',
          style: { display: 'flex' },
        }}
        items={[
          {
            name: 'group1',
            span: 24,
            items: [
              {
                name: 'a',
                label: 'a',
                fieldType: 'input',
              },
              {
                name: 'b',
                label: 'b',
                fieldType: 'input',
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
                fieldType: 'input',
              },
              {
                name: 'd',
                label: 'd',
                fieldType: 'input',
              },
            ],
          },
        ]}
      />
    </Form>
  );
}

export default SpaceDemo;
