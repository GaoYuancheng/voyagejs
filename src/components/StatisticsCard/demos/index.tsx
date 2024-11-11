import { XOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React, { useState } from 'react';
import { StatisticsCard, StatisticsCardGroup, StatisticsCardItem } from 'voyagejs';

const Demo = () => {
  const [value, setValue] = useState<any>();

  return (
    <Space direction="vertical" style={{ background: '#f6f7f9', padding: 20, display: 'flex' }}>
      <StatisticsCardItem
        items={[
          { label: '总共', value: 1 },
          { label: '已处理', value: 2 },
          { label: '未处理', value: 3, unit: '%' },
        ]}
      />

      <StatisticsCard icon={<XOutlined />} label="总访问量" value="123456" unit="次" name="total-visit" />

      <StatisticsCard label="总访问量" value="123456" unit="次" name="total-visit" />

      <StatisticsCard
        label="总访问量"
        value="123456"
        unit="次"
        name="total-visit"
        icon={<XOutlined />}
        items={[
          { label: '总共', value: 1 },
          { label: '已处理', value: 2 },
          { label: '未处理', value: 3, unit: '%' },
        ]}
      />

      <StatisticsCard
        label="总访问量"
        value="123456"
        unit="次"
        name="total-visit"
        items={[
          { label: '总共', value: 1 },
          { label: '已处理', value: 2 },
          { label: '未处理', value: 3, unit: '%' },
        ]}
      />

      <StatisticsCardGroup
        labelInValue
        value={value}
        onChange={setValue}
        options={[
          { label: '总访问量1', value: '1', unit: '次', name: 'name1' },
          { label: '总访问量2', value: '2', unit: '次', name: 'name2' },
          { label: '总访问量3', value: '3', unit: '次', name: 'name3' },
        ]}
      />
    </Space>
  );
};

export default Demo;
