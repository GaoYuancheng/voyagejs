import { Radio as ARadio } from 'antd';
import type {} from 'antd/es/radio';
import { RadioGroupProps as ARadioGroupProps } from 'antd/lib/radio';
import { isObject, omit } from 'radash';
import React from 'react';
import { Text } from '../../../components';
import type { FieldBaseProps } from '../../interfaces';

const { Group: ARadioGroup } = ARadio;

export interface RadioGroupProps extends Omit<ARadioGroupProps, 'onChange'>, FieldBaseProps {}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { readOnly, value, options } = props;

  if (readOnly) {
    const target = options?.find((option) => (isObject(option) ? option.value === value : option === value)) || {};

    return <Text>{`${(target as any)?.label || '-'}`}</Text>;
  }

  return <ARadioGroup {...omit(props, ['readOnly'])} />;
};
