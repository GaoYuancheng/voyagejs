import React from 'react';
import { usePrefixCls } from '../../../context';
import type { StatisticsCardDataType, StatisticsCardProps } from '../StatisticsCard';
import { StatisticsCard } from '../StatisticsCard';

import './index.less';

export type StatisticsCardGroupDataType =
  | {
      labelInValue?: true;
      value?: StatisticsCardDataType;
      onChange?: (value?: StatisticsCardDataType) => void;
    }
  | {
      labelInValue?: false;
      value?: string | number;
      onChange?: (value?: string | number) => void;
    };

export type StatisticsCardGroupProps = StatisticsCardGroupDataType &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick'> & {
    items?: StatisticsCardProps[];
    loading?: boolean;
    onClick?: StatisticsCardProps['onClick'];
  };

export const StatisticsCardGroup: React.FC<StatisticsCardGroupProps> = (props) => {
  const { items, value, labelInValue = false, onChange, loading = false, onClick, ...rest } = props;

  const prefixCls = usePrefixCls('statistics-group');

  const render = () => {
    return items?.map((item, idx) => {
      return (
        <StatisticsCard
          key={idx}
          {...item}
          loading={loading}
          active={!!item.name && (labelInValue ? (value as StatisticsCardDataType)?.name : value) === item.name}
          onClick={(data, e) => {
            onClick?.(data, e);
            if (!data.name) return;
            if (labelInValue) {
              // @ts-expect-error
              onChange?.(data.name === value ? undefined : (data as StatisticsCardDataType));
            } else {
              onChange?.(data.name === value ? undefined : (data.name as string | number));
            }
          }}
        />
      );
    });
  };

  return (
    <div className={prefixCls} {...rest}>
      {render()}
    </div>
  );
};
