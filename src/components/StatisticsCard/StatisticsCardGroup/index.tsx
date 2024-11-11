import React from 'react';
import { usePrefixCls } from '../../../context';
import type { StatisticsCardDataType, StatisticsCardProps } from '../StatisticsCard';
import { StatisticsCard } from '../StatisticsCard';

import './index.less';

export type StatisticsCardGroupDataType =
  | {
      labelInValue?: true;
      value?: StatisticsCardDataType;
      onChange?: (value: StatisticsCardDataType) => void;
    }
  | {
      labelInValue?: false;
      value?: string | number;
      onChange?: (value: string | number) => void;
    };

export type StatisticsCardGroupProps = StatisticsCardGroupDataType &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick'> & {
    options?: StatisticsCardProps[];
  };

export const StatisticsCardGroup: React.FC<StatisticsCardGroupProps> = (props) => {
  const { options, value, labelInValue = false, onChange, ...rest } = props;

  const prefixCls = usePrefixCls('statistics-group');

  const render = () => {
    return options?.map((item, idx) => {
      return (
        <StatisticsCard
          key={idx}
          {...item}
          active={!!item.name && (labelInValue ? (value as StatisticsCardDataType)?.name : value) === item.name}
          onClick={(data) => {
            if (labelInValue) {
              // @ts-expect-error
              onChange?.(data as StatisticsCardDataType);
            } else {
              onChange?.(data.name as string | number);
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
