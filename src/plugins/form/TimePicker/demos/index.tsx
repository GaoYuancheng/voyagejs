import { Form } from 'antd';
import React from 'react';
import { TimePicker } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 4 }}
    >
      <Form.Item label="TimeString" name="timeString">
        <TimePicker />
      </Form.Item>
      <Form.Item label="Moment" name="moment">
        <TimePicker valueFormat={false} />
      </Form.Item>
      <Form.Item label="UTC" name="utc">
        <TimePicker valueFormat={'utc'} />
      </Form.Item>
      <Form.Item label="HH:mm:ss" name="format">
        <TimePicker format={'HH:mm:ss'} />
      </Form.Item>
      <Form.Item label="查看态" name="format">
        <TimePicker readOnly />
      </Form.Item>
      <Form.Item label="禁用态" name="format">
        {/* TODO: 禁用态显示问题 */}
        <TimePicker disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
