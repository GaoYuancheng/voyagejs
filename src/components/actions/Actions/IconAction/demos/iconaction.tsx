import { EditOutlined } from '@ant-design/icons';
import { message, Row, Space } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import { IconAction } from 'voyagejs';

const IconActionDemo = () => {
  const onClick = async (e: any) => {
    console.log('click', e);
    await sleep(1500);
    message.success('操作成功');
  };

  return (
    <div>
      <Row>
        <Space>
          <IconAction tooltip="编辑" onClick={onClick} icon={EditOutlined} />
          <IconAction tooltip="编辑" onClick={onClick} icon={EditOutlined} type="error" />
          <IconAction tooltip="编辑" onClick={onClick} icon={EditOutlined} type="primary" />
          <IconAction tooltip="编辑" onClick={onClick} icon={EditOutlined} type="success" />
          <IconAction tooltip="编辑" onClick={onClick} icon={EditOutlined} type="warning" />
        </Space>
      </Row>

      <Row>
        <Space>
          <IconAction onClick={onClick} text="编辑" textPosition="start" icon={EditOutlined} />
          <IconAction onClick={onClick} text="编辑" textPosition="start" icon={EditOutlined} type="error" />
          <IconAction onClick={onClick} text="编辑" textPosition="start" icon={EditOutlined} type="primary" />
          <IconAction onClick={onClick} text="编辑" textPosition="start" icon={EditOutlined} type="success" />
          <IconAction onClick={onClick} text="编辑" textPosition="start" icon={EditOutlined} type="warning" />
        </Space>
      </Row>
    </div>
  );
};

export default IconActionDemo;
