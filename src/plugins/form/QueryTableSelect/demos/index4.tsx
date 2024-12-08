/**
 * title: 多选、对象值
 */
import React, { useState } from 'react';
import { QueryTableSelect } from 'voyagejs';
import { columns, RecordType, remoteDataSource } from 'voyagejs/Table/demos/config';

const Demo = () => {
  const [checked, setChecked] = useState([{ id: '1' }, { id: '2' }]);

  const onChange = (value) => {
    console.log('value', value);
    setChecked(value);
  };

  return (
    <QueryTableSelect<RecordType>
      rowKey="id"
      labelInValue={true}
      rowSelectionType="checkbox"
      remoteDataSource={remoteDataSource}
      columns={columns}
      onChange={onChange}
      value={checked}
    />
  );
};

export default Demo;
