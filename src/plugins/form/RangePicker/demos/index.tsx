import { Space } from 'antd';
import React, { useState } from 'react';
import { RangePicker } from 'voyagejs';

const Demo = () => {
  const [value, setValue] = useState([]);

  const onChange = (value) => {
    console.log('value', value);
    setValue(value);
  };

  return (
    <Space direction="vertical">
      <RangePicker format={'YYYY-MM-DD'} onChange={onChange} value={value} />
    </Space>
  );
};

export default Demo;
