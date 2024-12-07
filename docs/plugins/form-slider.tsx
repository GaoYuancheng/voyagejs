/**
 * title: Slider
 * description: 滑动输入
 */
import { Form } from 'antd';
import React from 'react';
import { Slider } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 6 }}
    >
      <Form.Item label="Slider" name="a">
        <Slider
          min={0}
          max={100}
          tooltip={{
            formatter: (value) => {
              if (value === 0) {
                return '当天';
              }
              return `${value}`;
            },
          }}
        />
      </Form.Item>
      <Form.Item label="Slider" name="a">
        <Slider
          inputnumberProps={(value) => {
            return { style: { display: 'none' } };
          }}
        />
      </Form.Item>
      <Form.Item label="查看态" name="a">
        <Slider min={0} max={100} readOnly />
      </Form.Item>
      <Form.Item label="禁用态" name="a">
        <Slider min={0} max={100} disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
