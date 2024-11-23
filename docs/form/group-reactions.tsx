import { sleep } from 'radash';
import React from 'react';
import { DefaultPluginsType, FieldMode, Form } from 'voyagejs';

const { useForm, Group } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      remoteValues={async () => {
        await sleep(2000);
        return {
          name: '张三',
          age: 18,
          address: '北京市海淀区',
        };
      }}
    >
      <Group<any, DefaultPluginsType>
        name="gruop1"
        items={[
          {
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
          },
        ]}
      />

      <Group<any, DefaultPluginsType>
        labelCol={{ style: { width: 100 } }}
        // Group联动一定要配置name属性
        name="gruop"
        title="表单组"
        reactions={[
          {
            dependencies: ['mode'],
            result: {
              mode: '$deps[0]',
            },
          },
        ]}
        items={[
          {
            name: 'name',
            label: '姓名',
            fieldType: 'input',
          },
          {
            name: 'age',
            label: '年龄',
            fieldType: 'input',
          },
        ]}
      />
    </Form>
  );
};

export default Demo;
