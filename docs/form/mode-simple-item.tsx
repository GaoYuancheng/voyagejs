import { Button } from 'antd';
import React, { Fragment } from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm } = Form;

const Demo = () => {
  const [form] = useForm();

  return (
    <Fragment>
      <Form<any, DefaultPluginsType>
        form={form}
        items={[
          {
            name: 'render',
            label: '隐藏，不被校验',
            render: false,
            rules: [{ required: true }],
            fieldType: 'input',
          },
          {
            name: 'hidden',
            label: '隐藏，会被校验',
            hidden: true,
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
        校验
      </Button>
    </Fragment>
  );
};

export default Demo;
