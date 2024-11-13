import { Form } from 'antd';
import React from 'react';
import { Switch } from 'voyagejs';

const Demo = () => {
  return (
    <Form
      onValuesChange={(value, values) => {
        console.log('values', value, values);
      }}
      labelCol={{ span: 6 }}
    >
      <Form.Item label="设置选中值和未选中值格式" name="a">
        <Switch checkedValue={'1'} unCheckedValue={'0'} />
      </Form.Item>
      <Form.Item label="查看态" name="a">
        <Switch checkedValue={'1'} unCheckedValue={'0'} readOnly />
      </Form.Item>
      <Form.Item label="禁用态" name="a">
        <Switch checkedValue={'1'} unCheckedValue={'0'} disabled />
      </Form.Item>
    </Form>
  );
};

export default Demo;
