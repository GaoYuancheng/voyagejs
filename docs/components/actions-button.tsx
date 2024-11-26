import { Card, Space, message } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import type { ButtonActionsProps } from 'voyagejs';
import { ButtonAction, ButtonActions } from 'voyagejs';

const Demo = () => {
  const buttonActions: ButtonActionsProps['actions'] = [
    {
      children: '新增',
      type: 'primary',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      children: '隐藏',
      render: false,
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      children: '新增',
      tooltip: '设置disabled被禁用了~前面有个隐藏项',
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
      danger: true,
      confirm: '确认删除?',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(2000);
        message.error('删除失败');
      },
    },
    {
      children: '二次弹框删除',
      danger: true,
      modalConfirm: '确认删除?',
      onClick: async (e) => {
        console.log('Action 删除', e);
        await sleep(2000);
        message.error('删除失败');
      },
    },
  ];

  return (
    <Space style={{ display: 'flex' }} direction="vertical">
      <Card title="按钮组 ButtonActions">
        <ButtonActions actions={buttonActions} />
      </Card>
      <Card title="按钮 ButtonAction">
        <Space>
          {buttonActions.map((action, idx) => {
            return <ButtonAction {...action} key={idx} />;
          })}
        </Space>
      </Card>
    </Space>
  );
};

export default Demo;
