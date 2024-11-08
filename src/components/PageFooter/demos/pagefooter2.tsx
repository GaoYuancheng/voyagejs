/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Form, PageFooter } from 'voyagejs';

const { useForm } = Form;

const PageFooterDemo = () => {
  const [form] = useForm();

  return (
    <div style={{ background: '#f0f2f5', height: '100vh' }}>
      <div style={{ height: '500px' }} />
      <PageFooter
        contentStyle={{}}
        items={[
          {
            children: '返回',
            onClick: () => {},
          },
          {
            children: '提交',
            type: 'primary',
            onClick: async () => {
              await form.validateFields();
              console.log(form.values);
            },
          },
        ]}
      >
        <Form
          form={form}
          items={[
            {
              name: 'a',
              label: 'a',
              rules: [{ required: true, message: '请输入a' }],
              component: 'input',
            },
          ]}
        />
      </PageFooter>
    </div>
  );
};

export default PageFooterDemo;
