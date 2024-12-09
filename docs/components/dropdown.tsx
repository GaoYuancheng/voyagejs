import { Button, message, Space } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import { Dropdown } from 'voyagejs';

import 'antd/lib/style/themes/variable.less';

const Demo = () => {
  return (
    <Space>
      <Dropdown
        items={[
          {
            children: '新增',
            onClick: () => {
              message.success('新增');
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
            children: '隐藏按钮',
            danger: true,
            render: false,
            onClick: (e) => {},
          },
          {
            children: '删除',
            danger: true,
            confirm: '确认删除?',
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
        ]}
      >
        <Button type="primary">划入展开菜单</Button>
      </Dropdown>
    </Space>
  );
};

export default Demo;
