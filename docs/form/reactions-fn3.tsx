/**
 * title: 更改组件属性
 * description: 只更改组件的某一个属性
 */
import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form<any, DefaultPluginsType>
      form={form}
      formGroupProps={{ rowProps: { gutter: 16 } }}
      items={[
        {
          name: 'value',
          label: '目标值',
          span: 18,
          fieldType: 'inputnumber',
          fieldProps: {
            min: 0,
            style: { width: '100%' },
          },
          rules: [{ required: true, message: '请输入值' }],
        },
        {
          name: 'percent',
          span: 6,
          initialValue: false,
          valuePropName: 'checked',
          fieldType: 'checkbox',
          fieldProps: { children: '百分数' },
          reactions: [
            {
              effects: ['value'],
              result: (ctx) => {
                const { target, selfValue } = ctx;
                target.fieldProps.addonAfter = selfValue ? '%' : undefined;
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Demo;
