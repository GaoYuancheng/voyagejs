import { Divider, Space } from 'antd';
import React from 'react';
import { Text } from 'voyagejs';

const Demo = () => {
  return (
    <Space split={<Divider type="vertical" />}>
      <Text>文本</Text>
      <Text loading>文本</Text>
      <Text disabled>文本</Text>
      <Text type="title">文本</Text>
      <Text type="primary">文本</Text>
      <Text type="description">文本</Text>
      <Text ellipsis style={{ width: 300 }}>
        文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本
      </Text>
    </Space>
  );
};

export default Demo;
