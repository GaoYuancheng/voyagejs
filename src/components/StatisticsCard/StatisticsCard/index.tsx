import { Card, CardProps } from 'antd';
import cls from 'classnames';
import React from 'react';
import { usePrefixCls } from '../../../context';
import type { StatisticsCardItemType } from '../StatisticsCardItem';
import { StatisticsCardItem } from '../StatisticsCardItem';

import './index.less';

export type StatisticsCardDataType = {
  /** 标题 */
  label?: string;
  /** 显示值 */
  value?: string | number;
  /** 单位 */
  unit?: string;
  /** 唯一标识，选择用 */
  name?: string | number;
  /** 图标 */
  icon?: React.ReactNode;
  /** 子项 */
  items?: StatisticsCardItemType[];
};

export interface StatisticsCardProps extends StatisticsCardDataType, Omit<CardProps, 'onClick'> {
  /** 是否选中 */
  active?: boolean;

  onClick?: (
    data: {
      name: StatisticsCardProps['name'];
      value: StatisticsCardProps['value'];
    },
    e: React.MouseEvent<HTMLDivElement>,
  ) => void;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = (props) => {
  const { label, value, unit, name, icon, items, className, active, onClick, ...rest } = props;

  const prefixCls = usePrefixCls('statistics-card');

  return (
    <Card
      bordered={false}
      {...rest}
      className={cls(prefixCls, className, {
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-hover`]: !!onClick,
      })}
      onClick={(e) => {
        onClick?.({ name, value }, e);
      }}
    >
      <div className={`${prefixCls}-wrapper`}>
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-content-main`}>
            {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
            <div>
              <div className={`${prefixCls}-label`}>{label}</div>
              <div className={`${prefixCls}-value`}>
                {value}
                {unit && <span className={`${prefixCls}-unit`}>{unit}</span>}
              </div>
            </div>
          </div>

          {items && <StatisticsCardItem items={items} />}
        </div>
      </div>
    </Card>
  );
};
