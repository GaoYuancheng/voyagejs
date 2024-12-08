/**
 * title: 多选、id值
 */
import React, { useState } from 'react';
import { QueryTableSelect } from 'voyagejs';
import { columns, RecordType, remoteDataSource } from 'voyagejs/Table/demos/config';

const Demo = () => {
  const [checked, setChecked] = useState(['1', '2']);

  const onChange = (value) => {
    console.log('value', value);
    setChecked(value);
  };

  return (
    <QueryTableSelect<RecordType>
      rowKey="id"
      labelInValue={false}
      rowSelectionType="checkbox"
      remoteDataSource={remoteDataSource}
      columns={columns}
      onChange={onChange}
      value={checked}
      rowSelection={{
        preserveSelectedRowKeys: true,
      }}
    />
  );
};

export default Demo;
