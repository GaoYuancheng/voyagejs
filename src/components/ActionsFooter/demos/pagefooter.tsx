/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { ActionsFooter } from 'voyagejs';

const PageFooterDemo = () => {
  return (
    <div style={{ background: '#f0f2f5', height: '100vh' }}>
      <div style={{ height: '500px' }} />
      <ActionsFooter
        items={[
          {
            children: '返回',
            onClick: () => {},
          },
          {
            children: '提交',
            type: 'primary',
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
};

export default PageFooterDemo;
