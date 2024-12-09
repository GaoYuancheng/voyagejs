import { Badge } from 'antd';
import React from 'react';
import type { CellBaseProps } from '../../interfaces';

export interface CellBadgeProps<RecordType extends object> extends CellBaseProps<RecordType> {
  placeholder?: React.ReactNode;
  options?: {
    text?: string;
    label?: string;
    value: string;
    color?: string;
  }[];
}

export const CellBadge = <RecordType extends object>(props: CellBadgeProps<RecordType>) => {
  const { value, options = [] } = props;

  const { label, text, ...rest } = options.find((item) => item.value === value) || {};

  if (!value) return '-';

  return <Badge {...rest} text={label ?? text ?? value} />;
};
