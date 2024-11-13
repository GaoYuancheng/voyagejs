import { Select as ASelect } from 'antd';
import { SelectProps as ASelectProps } from 'antd/es/select';
import { omit } from 'radash';
import React from 'react';
import { Text } from '../../../components';
import { toArray } from '../../../utils';
import type { FieldBaseProps } from '../../interfaces';

export interface SelectProps extends ASelectProps, FieldBaseProps {}

export const Select = (props: SelectProps) => {
  const { readOnly, options, value, fieldNames, labelInValue } = props;
  const { value: valueField = 'value', label: labelField = 'label' } = fieldNames || {};

  if (readOnly) {
    let text;
    if (labelInValue) {
      text = toArray(value || []).map((item) => item[labelField]);
    } else {
      text = toArray(value || []).reduce((memo, cur) => {
        const target = options?.find((item) => item[valueField] === cur);
        memo.push(target?.[labelField]);
        return memo;
      }, []);
    }

    return <Text>{text?.join('、')}</Text>;
  }

  return <ASelect {...omit(props, ['readOnly'])} />;
};
