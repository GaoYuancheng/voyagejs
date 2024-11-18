import { Space } from 'antd';
import React from 'react';
import { usePrefixCls } from '../../../context';

import './index.less';

export type StatisticsCardItemType = {
  label: string;
  value: number;
  unit?: string;
};

export interface StatisticsCardItemProps {
  items: StatisticsCardItemType[];
}

export const StatisticsCardItem: React.FC<StatisticsCardItemProps> = (props) => {
  const { items } = props;

  const prefixCls = usePrefixCls('statistics-card-items');

  const renderItems = () => {
    return items.map((item, idx) => {
      const { label, value, unit = '' } = item;
      return (
        <div key={idx} className={`${prefixCls}-item`}>
          <div className={`${prefixCls}-label`}>{`${label}：`}</div>
          <div className={`${prefixCls}-value`}>
            {value}
            {unit}
          </div>
        </div>
      );
    });
  };

  return (
    <Space direction="vertical" className={prefixCls} size={0}>
      {renderItems()}
    </Space>
  );
};
