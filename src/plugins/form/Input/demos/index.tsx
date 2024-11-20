import { Form } from 'antd';
import React from 'react';
import { Input } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 6 }}
    >
      <Form.Item label="Input" name="a">
        <Input />
      </Form.Item>
      <Form.Item label="预览" name="a">
        <Input readOnly />
      </Form.Item>
      <Form.Item label="禁用" name="a">
        <Input disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
