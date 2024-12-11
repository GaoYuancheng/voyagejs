/**
 * title: 更改组件属性
 * description: 只更改组件属性的某一个值
 */
import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form<any, DefaultPluginsType>
      form={form}
      formGroupProps={{ rowProps: { gutter: 16 }, labelCol: { style: { width: 120 } } }}
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

        {
          span: 8,
          label: '是否同意',
          name: 'agree',
          rules: [{ required: true, message: '请选择是否同意' }],
          fieldType: 'radio.group',
          options: [
            { label: '同意', value: true },
            { label: '不同意', value: false },
          ],
        },
        {
          span: 24,
          label: '意见',
          name: 'opinion',
          fieldType: 'input',
          rules: [{ required: false, message: '请输入意见' }],
          reactions: [
            {
              dependencies: ['agree'],
              result: (ctx) => {
                const { target, depValues } = ctx;
                target!.rules = [{ required: depValues[0], message: '请输入意见' }];
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Demo;
