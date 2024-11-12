import { Space } from 'antd';
import React, { useState } from 'react';
import { OSwitch } from 'voyagejs';

const Demo = () => {
  const [checked, setChecked] = useState('1');

  const onChange = (value) => {
    console.log('value', value);
    setChecked(value);
  };

  return (
    <Space direction="vertical">
      <OSwitch checkedValue={'1'} unCheckedValue={'0'} onChange={onChange} value={checked} />
    </Space>
  );
};

export default Demo;
