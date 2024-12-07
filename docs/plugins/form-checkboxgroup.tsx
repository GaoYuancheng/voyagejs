/**
 * title: CheckboxGroup
 */
import { Form } from 'antd';
import React from 'react';
import { CheckboxGroup } from 'voyagejs';

const Demo = () => {
  const options = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4' },
    { label: '选项5', value: '5' },
    { label: '选项6', value: '6' },
  ];

  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 6 }}
    >
      <Form.Item label="CheckboxGroup" name="a">
        <CheckboxGroup options={options} />
      </Form.Item>
      <Form.Item label="查看态" name="a">
        <CheckboxGroup options={options} readOnly />
      </Form.Item>
      <Form.Item label="禁用态" name="a">
        <CheckboxGroup options={options} disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
