import { Radio } from 'antd';
import { sleep } from 'radash';
import React, { Fragment, useState } from 'react';
import { DefaultPluginsType, FieldMode, Form } from 'voyagejs';

const { useForm, Group } = Form;

const Demo = () => {
  const [form] = useForm();

  const [mode, setMode] = useState(FieldMode.EDIT);

  return (
    <Fragment>
      <Radio.Group
        value={mode}
        optionType="button"
        style={{ marginBottom: 16 }}
        onChange={(e) => setMode(e.target.value)}
        options={[
          { label: '编辑', value: FieldMode.EDIT },
          { label: '预览', value: FieldMode.VIEW },
          { label: '禁用', value: FieldMode.DISABLED },
          { label: '隐藏', value: FieldMode.HIDDEN },
          { label: '不渲染', value: FieldMode.NONE },
        ]}
      />
      <Form<any, DefaultPluginsType>
        remoteValues={async () => {
          await sleep(2000);
          return {
            name: '张三',
            age: 18,
            address: '北京市海淀区',
            phone: '13800138000',
          };
        }}
        form={form}
      >
        <Group
          items={[
            {
              name: 'name',
              label: '姓名',
              fieldType: 'input',
              fieldProps: {},
            },
            {
              name: 'age',
              label: '年龄',
              fieldType: 'input',
            },
          ]}
        />

        <Group
          container="card"
          containerProps={{ title: '这组表状态被控制', size: 'small' }}
          mode={mode}
          items={[
            {
              name: 'address',
              label: '地址',
              fieldType: 'input',
              fieldProps: {},
            },
            {
              name: 'phone',
              label: '电话',
              fieldType: 'input',
            },
          ]}
        />
      </Form>
    </Fragment>
  );
};

export default Demo;
