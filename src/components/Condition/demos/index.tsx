import React from 'react';
import { If } from 'voyagejs';

const Demo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <If condition={true}>显示</If>
      <If condition={false}>隐藏</If>
    </div>
  );
};

export default Demo;
