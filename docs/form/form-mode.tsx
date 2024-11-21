import { Radio } from 'antd';
import { sleep } from 'radash';
import React, { Fragment, useState } from 'react';
import { DefaultPluginsType, FieldMode, Form } from 'voyagejs';

const { useForm } = Form;

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
        mode={mode}
        remoteValues={async () => {
          await sleep(2000);
          return {
            name: '张三',
            age: 18,
          };
        }}
        form={form}
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
    </Fragment>
  );
};

export default Demo;
