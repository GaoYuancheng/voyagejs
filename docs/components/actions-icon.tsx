import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Space, message } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import type { IconActionProps } from 'voyagejs';
import { IconAction, IconActions } from 'voyagejs';

const Demo = () => {
  const iconActions: IconActionProps['actions'] = [
    {
      children: '新增',
      type: 'primary',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      children: '隐藏',
      render: false,
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      children: '新增',
      tooltip: '设置disabled被禁用了~前面有个隐藏项',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      children: '编辑',
      icon: <EditOutlined />,
      onClick: async () => {
        console.log('Action 编辑');
        await sleep(2000);
        message.success('编辑成功');
      },
    },
    {
      children: '删除',
      type: 'danger',
      confirm: '确认删除?',
      icon: <DeleteOutlined />,
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(2000);
        message.error('删除失败');
      },
    },
    {
      children: '二次弹框删除',
      type: 'danger',
      modalConfirm: '确认删除?',
      icon: <DeleteOutlined />,
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(2000);
        message.error('删除失败');
      },
    },
  ];

  return (
    <Space style={{ display: 'flex' }} direction="vertical">
      <Card title="按钮组 IconActions">
        <IconActions actions={iconActions} />
      </Card>
      <Card title="按钮 IconAction">
        <Space>
          {iconActions.map((action, idx) => {
            return <IconAction {...action} key={idx} />;
          })}
        </Space>
      </Card>
    </Space>
  );
};

export default Demo;
