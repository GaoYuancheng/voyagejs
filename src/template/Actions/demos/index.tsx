import { Tag } from 'antd';
import React from 'react';
import { Actions } from 'voyagejs';

const Demo = () => {
  return (
    <Actions
      getCtx={() => {
        return { log: console.log };
      }}
      items={[
        {
          actionType: 'button',
          children: '查看',
          type: 'primary',
          onClick: (e, ctx) => {
            ctx.log(e, ctx);
          },
        },
        {
          type: 'primary',
          children: '编辑',
          onClick: () => {},
        },
        {
          actionType: 'text',
          children: '删除',
          type: 'danger',
          confirm: '确认删除?',
          onClick: () => {
            console.log('删除~');
          },
        },
        {
          actionType: 'dropdown',
          children: <div>更多</div>,
          items: [
            {
              children: '其他',
              onClick: (e, ctx) => {
                ctx.log(e, ctx);
              },
            },
          ],
        },
        (ctx) => {
          return <Tag>自定义</Tag>
        },
      ]}
    />
  );
};

export default Demo;
