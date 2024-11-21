import React from 'react';
import { DefaultPluginsType, FieldMode, Form } from 'voyagejs';

const { useForm, Item } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Item<any, DefaultPluginsType>
        {...{
          name: 'mode',
          label: '模式',
          fieldType: 'radio.group',
          fieldProps: {
            optionType: 'button',
          },
          options: [
            { label: '编辑', value: FieldMode.EDIT },
            { label: '预览', value: FieldMode.VIEW },
            { label: '禁用', value: FieldMode.DISABLED },
            { label: '隐藏(display: none)', value: FieldMode.HIDDEN },
            { label: '不渲染(DOM结构消失)', value: FieldMode.NONE },
          ],
        }}
      />
      <Item<any, DefaultPluginsType>
        name="name"
        label="姓名"
        fieldType="input"
        initialValue="金龟岛主"
        reactions={[
          {
            dependencies: ['mode'],
            result: {
              mode: '$deps[0]',
            },
          },
        ]}
      />
      <Item<any, DefaultPluginsType>
        name="sex"
        label="性别"
        fieldType="select"
        initialValue="1"
        options={[
          { label: '男', value: '1' },
          { label: '女', value: '2' },
        ]}
        reactions={[
          {
            dependencies: ['mode'],
            result: {
              mode: '$deps[0]',
            },
          },
        ]}
      />
    </Form>
  );
};

export default Demo;
