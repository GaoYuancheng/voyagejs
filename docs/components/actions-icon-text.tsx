/**
 * title: 图标和文本一起用
 * description: 图标组件支持设置文本
 */
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Space, message } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import type { IconActionProps } from 'voyagejs';
import { IconAction } from 'voyagejs';

import 'antd/lib/style/themes/variable.less';

const Demo = () => {
  const iconActions: IconActionProps['actions'] = [
    {
      text: '新增',
      type: 'primary',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      text: '隐藏',
      render: false,
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      text: '设置disabled被禁用了~前面有个隐藏项',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      text: '编辑',
      icon: <EditOutlined />,
      onClick: async () => {
        console.log('Action 编辑');
        await sleep(2000);
        message.success('编辑成功');
      },
    },
    {
      text: '删除',
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
      text: '二次弹框删除',
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
    <Space>
      {iconActions.map((action, idx) => {
        return <IconAction {...action} key={idx} />;
      })}
    </Space>
  );
};

export default Demo;
