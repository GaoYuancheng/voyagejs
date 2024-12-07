/**
 * title: 图标按钮组
 * description: 不同样式的图标按钮
 */
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import type { IconActionProps } from 'voyagejs';
import { IconActions } from 'voyagejs';

const Demo = () => {
  const iconActions: IconActionProps['actions'] = [
    {
      type: 'primary',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      type: 'error',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      type: 'danger',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      type: 'success',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      type: 'warning',
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: <PlusOutlined />,
      onClick: () => {
        console.log('Action 1');
      },
    },
  ];

  return <IconActions actions={iconActions} />;
};

export default Demo;
