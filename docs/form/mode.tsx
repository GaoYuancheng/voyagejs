import { Button, Radio } from 'antd';
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
      />
      <Form<any, DefaultPluginsType>
        mode={mode}
        remoteValues={async () => {
          await sleep(2000);
          return {
            // hidden: '隐藏',
            // edit: '编辑',
            // view: '查看',
            // disabled: '禁用',
            // visible: '显示',
          };
        }}
        form={form}
        items={[
          {
            name: 'hidden',
            label: '隐藏',
            hidden: true,
            rules: [{ required: true }],
            fieldType: 'input',
          },
          {
            name: 'visible',
            label: '显示',
            visible: false,
            rules: [{ required: true }],
            fieldType: 'input',
          },
          {
            name: 'edit',
            label: '编辑',
            rules: [{ required: true }],
            fieldType: 'input',
          },
          {
            name: 'disabled',
            label: '禁用',
            disabled: true,
            rules: [{ required: true }],
            fieldType: 'input',
          },
          {
            name: 'view',
            label: '查看',
            readOnly: true,
            rules: [{ required: true }],
            fieldType: 'input',
          },
        ]}
      />
      <Button
        onClick={async () => {
          await form.validateFields();
        }}
      >
        设置隐藏
      </Button>
    </Fragment>
  );
};

export default Demo;
