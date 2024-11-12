import { message, Tag } from 'antd';
import React from 'react';
import { ButtonAction, QueryActions } from 'voyagejs';

const Demo = () => {
  return (
    <div>
      <QueryActions<{ a: number; b: number }>
        getCtx={() => {
          return {
            a: 12,
            b: 34,
          };
        }}
        items={[
          {
            children: '返回',
            onClick: (e, ctx) => {
              message.info('返回');
            },
          },
          {
            actionType: 'button',
            children: '新增',
            type: 'primary',
            onClick: (e, ctx) => {
              console.log('新增~', ctx);
            },
          },
          (ctx) => {
            return <Tag color="green">自定义</Tag>;
          },
          {
            actionType: 'dropdown',
            children: <ButtonAction onClick={() => {}}>更多</ButtonAction>,
            items: [
              {
                children: '删除',
                onClick: (e, ctx) => {
                  message.info('删除');
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Demo;
