import { Form } from 'antd';
import React from 'react';
import { Select } from 'voyagejs';

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
      <Form.Item label="单选" name="a">
        <Select options={options} />
      </Form.Item>
      <Form.Item label="单选预览态" name="a">
        <Select options={options} readOnly />
      </Form.Item>
      <Form.Item label="多选" name="b">
        <Select options={options} mode="multiple" />
      </Form.Item>
      <Form.Item label="多选预览态" name="b">
        <Select options={options} readOnly mode="multiple" />
      </Form.Item>
      <Form.Item label="单选labelInValue" name="c">
        <Select options={options} labelInValue />
      </Form.Item>
      <Form.Item label="单选预览态labelInValue" name="c">
        <Select options={options} readOnly labelInValue />
      </Form.Item>
      <Form.Item label="多选labelInValue" name="d">
        <Select options={options} mode="multiple" labelInValue />
      </Form.Item>
      <Form.Item label="多选预览态labelInValue" name="d">
        <Select options={options} readOnly mode="multiple" labelInValue />
      </Form.Item>
    </Form>
  );
};

export default Demo;
