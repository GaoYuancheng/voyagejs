/**
 * title: 图标按钮
 * description: 单个图标按钮
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
      tooltip: '新增',
      type: 'primary',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      tooltip: '隐藏',
      render: false,
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      tooltip: '设置disabled被禁用了~前面有个隐藏项',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      tooltip: '编辑',
      icon: <EditOutlined />,
      onClick: async () => {
        console.log('Action 编辑');
        await sleep(2000);
        message.success('编辑成功');
      },
    },
    {
      tooltip: '删除',
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
      tooltip: '二次弹框删除',
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
