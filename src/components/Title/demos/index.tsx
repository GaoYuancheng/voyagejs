import { Divider, Space } from 'antd';
import React from 'react';
import { Title } from 'voyagejs';

const Demo = () => {
  return (
    <Space split={<Divider type="vertical" />}>
      <Title>标题</Title>
    </Space>
  );
};

export default Demo;
