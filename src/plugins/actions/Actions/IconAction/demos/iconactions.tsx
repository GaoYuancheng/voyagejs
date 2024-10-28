import { CopyOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Row, message } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import type { IconActionsProps } from 'voyagejs';
import { IconActions } from 'voyagejs';

const IconActionDemo = () => {
  const iconActions: IconActionsProps['actions'] = [
    {
      icon: EditOutlined,
      tooltip: '编辑',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: CopyOutlined,
      tooltip: '复制~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: EditOutlined,
      tooltip: '编辑',
      onClick: async () => {
        console.log('Action 编辑');
        await sleep(1500);
        message.success('编辑成功');
      },
    },
    {
      icon: DeleteOutlined,
      tooltip: '删除',
      confirm: '确认删除?',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(1500);
        message.success('删除成功');
      },
    },
    {
      icon: DeleteOutlined,
      confirm: '确认删除?',
      type: 'error',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(1500);
        message.error('删除失败');
      },
    },
  ];

  const iconTextActions: IconActionsProps['actions'] = [
    {
      icon: EditOutlined,
      text: '编辑',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: CopyOutlined,
      text: '复制~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: EditOutlined,
      text: '编辑',
      onClick: async () => {
        console.log('Action 编辑');
        await sleep(1500);
        message.success('编辑成功');
      },
    },
    {
      icon: DeleteOutlined,
      text: '删除',
      confirm: '确认删除?',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(1500);
        message.success('删除成功');
      },
    },
    {
      icon: DeleteOutlined,
      confirm: '确认删除?',
      type: 'error',
      text: '删除',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(1500);
        message.error('删除失败');
      },
    },
  ];

  return (
    <div>
      <Row>
        <IconActions actions={iconActions} />
      </Row>
      <Row>
        <IconActions actions={iconTextActions} />
      </Row>
    </div>
  );
};

export default IconActionDemo;
