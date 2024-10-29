import React from 'react';
import { QueryTable } from 'voyagejs';
import { columns, remoteDataSource } from 'voyagejs/table/demos/config';

const Demo = () => {
  return (
    <QueryTable
      remoteDataSource={remoteDataSource}
      items={[
        {
          name: 'name',
          label: '名称',
          component: 'input',
        },
        {
          name: 'age',
          label: '年龄',
          component: 'input',
        },
      ]}
      columns={columns}
    />
  );
};

export default Demo;
