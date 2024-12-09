import { Tag } from 'antd';
import React from 'react';
import type { CellBaseProps } from '../../interfaces';

export interface CellTagProps<RecordType extends object> extends CellBaseProps<RecordType> {
  placeholder?: React.ReactNode;
  options?: {
    text?: string;
    label?: string;
    value: string;
    color?: string;
  }[];
}

export const CellTag = <RecordType extends object>(props: CellTagProps<RecordType>) => {
  const { value, options = [] } = props;

  // eslint-disable-next-line eqeqeq
  const { label, text, ...rest } = options.find((item) => item.value == value) || {};

  if (!value) return '-';

  return <Tag {...rest}>{label ?? text ?? value}</Tag>;
};
