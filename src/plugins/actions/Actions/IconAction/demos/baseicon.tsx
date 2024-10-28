import { DeleteOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Space } from 'antd';
import React from 'react';
import { Icon } from '../Icon';

const BaseIcon = () => {
  return (
    <Row>
      <Col span={24}>
        <Space split={<Divider type="vertical" />}>
          <Icon icon={<DeleteOutlined />} />
          <Icon icon={<DeleteOutlined />} loading />
          <Icon icon={<DeleteOutlined />} disabled />
          <Icon icon={<DeleteOutlined />} text="删除" textPosition="start" />
          <Icon icon={<DeleteOutlined />} text="删除" loading textPosition="start" />
          <Icon icon={<DeleteOutlined />} text="删除" disabled textPosition="start" />
          <Icon icon={<DeleteOutlined />} text="删除" />
          <Icon icon={<DeleteOutlined />} text="删除" loading />
          <Icon icon={<DeleteOutlined />} text="删除" disabled />
        </Space>
      </Col>

      <Col span={24}>
        <Space split={<Divider type="vertical" />}>
          <Icon type="primary" icon={<DeleteOutlined />} />
          <Icon type="primary" icon={<DeleteOutlined />} loading />
          <Icon type="primary" icon={<DeleteOutlined />} disabled />
          <Icon type="primary" icon={<DeleteOutlined />} text="删除" textPosition="start" />
          <Icon type="primary" icon={<DeleteOutlined />} text="删除" loading textPosition="start" />
          <Icon type="primary" icon={<DeleteOutlined />} text="删除" disabled textPosition="start" />
          <Icon type="primary" icon={<DeleteOutlined />} text="删除" />
          <Icon type="primary" icon={<DeleteOutlined />} text="删除" loading />
          <Icon type="primary" icon={<DeleteOutlined />} text="删除" disabled />
        </Space>
      </Col>

      <Col span={24}>
        <Space split={<Divider type="vertical" />}>
          <Icon type="success" icon={<DeleteOutlined />} />
          <Icon type="success" icon={<DeleteOutlined />} loading />
          <Icon type="success" icon={<DeleteOutlined />} disabled />
          <Icon type="success" icon={<DeleteOutlined />} text="删除" textPosition="start" />
          <Icon type="success" icon={<DeleteOutlined />} text="删除" loading textPosition="start" />
          <Icon type="success" icon={<DeleteOutlined />} text="删除" disabled textPosition="start" />
          <Icon type="success" icon={<DeleteOutlined />} text="删除" />
          <Icon type="success" icon={<DeleteOutlined />} text="删除" loading />
          <Icon type="success" icon={<DeleteOutlined />} text="删除" disabled />
        </Space>
      </Col>

      <Col span={24}>
        <Space split={<Divider type="vertical" />}>
          <Icon type="error" icon={<DeleteOutlined />} />
          <Icon type="error" icon={<DeleteOutlined />} loading />
          <Icon type="error" icon={<DeleteOutlined />} disabled />
          <Icon type="error" icon={<DeleteOutlined />} text="删除" textPosition="start" />
          <Icon type="error" icon={<DeleteOutlined />} text="删除" loading textPosition="start" />
          <Icon type="error" icon={<DeleteOutlined />} text="删除" disabled textPosition="start" />
          <Icon type="error" icon={<DeleteOutlined />} text="删除" />
          <Icon type="error" icon={<DeleteOutlined />} text="删除" loading />
          <Icon type="error" icon={<DeleteOutlined />} text="删除" disabled />
        </Space>
      </Col>

      <Col span={24}>
        <Space split={<Divider type="vertical" />}>
          <Icon type="warning" icon={<DeleteOutlined />} />
          <Icon type="warning" icon={<DeleteOutlined />} loading />
          <Icon type="warning" icon={<DeleteOutlined />} disabled />
          <Icon type="warning" icon={<DeleteOutlined />} text="删除" textPosition="start" />
          <Icon type="warning" icon={<DeleteOutlined />} text="删除" loading textPosition="start" />
          <Icon type="warning" icon={<DeleteOutlined />} text="删除" disabled textPosition="start" />
          <Icon type="warning" icon={<DeleteOutlined />} text="删除" />
          <Icon type="warning" icon={<DeleteOutlined />} text="删除" loading />
          <Icon type="warning" icon={<DeleteOutlined />} text="删除" disabled />
        </Space>
      </Col>
    </Row>
  );
};

export default BaseIcon;
