import { Tabs } from 'antd';
import React from 'react';
import { default as QueryTable } from './querytable';

export default () => {
  return (
    <Tabs
      defaultActiveKey="1"
      destroyInactiveTabPane
      items={[
        {
          label: 'Tab 1',
          key: '1',
          children: (
            <div>
              <QueryTable />
            </div>
          ),
        },
        {
          label: 'Tab 2',
          key: '2',
          children: (
            <div>
              <QueryTable />
            </div>
          ),
        },
      ]}
    />
  );
};
