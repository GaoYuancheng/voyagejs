/**
 * title: 文本类型
 * description: 不同样式文本展示
 */
import React from 'react';
import type { TextActionProps } from 'voyagejs';
import { TextActions } from 'voyagejs';

const Demo = () => {
  const textActions: TextActionProps['actions'] = [
    {
      children: 'primary',
      type: 'primary',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'title',
      type: 'title',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'text',
      type: 'text',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'secondary',
      type: 'secondary',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'description',
      type: 'description',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'success',
      type: 'success',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'warning',
      type: 'warning',
      onClick: () => {
        console.log('Action');
      },
    },
    {
      children: 'danger',
      type: 'danger',
      onClick: () => {
        console.log('Action');
      },
    },
  ];

  return <TextActions actions={textActions} />;
};

export default Demo;
