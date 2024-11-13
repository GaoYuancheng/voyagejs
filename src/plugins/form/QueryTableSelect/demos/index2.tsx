/**
 * title: 单选、对象值
 */
import React, { useState } from 'react';
import { QueryTableSelect } from 'voyagejs';
import { columns, RecordType, remoteDataSource } from 'voyagejs/table/demos/config';

const Demo = () => {
  const [checked, setChecked] = useState({ id: '1' });

  const onChange = (value) => {
    console.log('value', value);
    setChecked(value);
  };

  return (
    <QueryTableSelect<RecordType>
      rowKey="id"
      labelInValue={true}
      rowSelectionType="radio"
      remoteDataSource={remoteDataSource}
      columns={columns}
      onChange={onChange}
      value={checked}
    />
  );
};

export default Demo;
