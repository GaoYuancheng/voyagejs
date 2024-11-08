import React from 'react';
import { ColumnTitle } from 'voyagejs';

const Demo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <ColumnTitle required>标题</ColumnTitle>
      <ColumnTitle tooltip={'标题'}>标题</ColumnTitle>
      <ColumnTitle required tooltip={'标题'}>
        标题
      </ColumnTitle>
    </div>
  );
};

export default Demo;
