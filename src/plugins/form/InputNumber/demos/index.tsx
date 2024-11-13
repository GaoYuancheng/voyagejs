import { Form } from 'antd';
import React from 'react';
import { InputNumber } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 6 }}
    >
      <Form.Item label="InputNumber" name="a">
        <InputNumber />
      </Form.Item>
      <Form.Item label="预览" name="a">
        <InputNumber readOnly />
      </Form.Item>
      <Form.Item label="禁用" name="a">
        <InputNumber disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
