/**
 * title: QueryTableSelect
 */
import React, { useState } from 'react';
import { QueryTableSelect } from 'voyagejs';
import { columns, RecordType, remoteDataSource } from 'voyagejs/table/demos/config';

const Demo = () => {
  const [value, setValue] = useState('1');

  const onChange = (value) => {
    console.log('value', value);
    setValue(value);
  };

  return (
    <QueryTableSelect<RecordType>
      rowKey="id"
      labelInValue={false}
      rowSelectionType="radio"
      remoteDataSource={remoteDataSource}
      columns={columns}
      onChange={onChange}
      value={value}
    />
  );
};

export default Demo;
