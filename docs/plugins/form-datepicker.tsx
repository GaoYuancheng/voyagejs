/**
 * title: DatePicker
 * description: 日期选择器，支持`format`设置日期格式
 */
import { Form } from 'antd';
import React from 'react';
import { DatePicker } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 4 }}
    >
      <Form.Item label="TimeString" name="timeString">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Moment" name="moment">
        <DatePicker valueFormat={false} />
      </Form.Item>
      <Form.Item label="UTC" name="utc">
        <DatePicker valueFormat={'utc'} />
      </Form.Item>
      <Form.Item label="YYYY-MM-DD" name="format">
        <DatePicker format={'YYYY-MM-DD'} />
      </Form.Item>
      <Form.Item label="查看态" name="format">
        <DatePicker readOnly />
      </Form.Item>
      <Form.Item label="禁用态" name="format">
        <DatePicker disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
