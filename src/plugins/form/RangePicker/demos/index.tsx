import { Form } from 'antd';
import React from 'react';
import { RangePicker } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 4 }}
    >
      <Form.Item label="TimeString" name="timeString">
        <RangePicker />
      </Form.Item>
      <Form.Item label="Moment" name="moment">
        <RangePicker valueFormat={false} />
      </Form.Item>
      <Form.Item label="UTC" name="utc">
        <RangePicker valueFormat={'utc'} />
      </Form.Item>
      <Form.Item label="YYYY-MM-DD" name="format">
        <RangePicker format={'YYYY-MM-DD'} />
      </Form.Item>
      <Form.Item label="查看态" name="format">
        <RangePicker readOnly />
      </Form.Item>
      <Form.Item label="禁用态" name="format">
        <RangePicker disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
