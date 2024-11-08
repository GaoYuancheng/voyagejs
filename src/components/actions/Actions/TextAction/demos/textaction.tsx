import { message, Space } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import { TextAction } from 'voyagejs';

const TextActionDemo = () => {
  return (
    <Space>
      <TextAction
        {...{
          children: '新增',
          type: 'primary',
          onClick: () => {
            console.log('Action 1');
          },
        }}
      />
      <TextAction
        {...{
          disabled: true,
          children: '新增',
          tooltip: '设置disabled被禁用了~',
          onClick: () => {
            console.log('Action 1');
          },
        }}
      />
      <TextAction
        {...{
          children: '编辑',
          onClick: async () => {
            await sleep(2000);
            message.success('编辑成功');
          },
        }}
      />
      <TextAction
        {...{
          children: '删除',
          type: 'danger',
          confirm: '确认删除?',
          onClick: async (e) => {
            console.log('Action 删除', e);
            await sleep(2000);
            message.error('删除失败');
          },
        }}
      />
      <TextAction
        {...{
          children: '二次弹框删除',
          type: 'danger',
          modalConfirm: '确认删除?',
          onClick: async (e) => {
            console.log('Action 删除', e);
            await sleep(2000);
            message.error('删除失败');
          },
        }}
      />
    </Space>
  );
};

export default TextActionDemo;
