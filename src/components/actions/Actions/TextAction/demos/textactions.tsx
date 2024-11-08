import { message } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import type { TextActionsProps } from 'voyagejs';
import { TextActions } from 'voyagejs';

const Demo = () => {
  const textActions: TextActionsProps['actions'] = [
    {
      render: false,
      children: '新增',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      children: '新增',
      tooltip: '前面还有一个没渲染的按钮呀~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      children: '编辑',
      onClick: async () => {
        console.log('Action 编辑');
        await sleep(2000);
        message.success('编辑成功');
      },
    },
    {
      children: '删除',
      confirm: '确认删除?',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(2000);
        message.success('删除成功');
      },
    },
    {
      children: '删除',
      confirm: '确认删除?',
      type: 'danger',
      onClick: (e) => {
        console.log('Action 删除', e);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            message.error('删除失败');
            reject(true);
          }, 2000);
        });
      },
    },
    {
      children: '二次弹框删除',
      modalConfirm: '确认删除?',
      type: 'danger',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(2000);
        message.error('删除失败');
      },
    },
  ];

  return <TextActions actions={textActions} />;
};

export default Demo;
