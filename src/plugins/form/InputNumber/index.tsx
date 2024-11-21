import { InputNumber as AInputNumber } from 'antd';
import { InputNumberProps as AInputNumberProps } from 'antd/es/input-number';
import { omit } from 'radash';
import React from 'react';
import { Text } from '../../../components';
import type { FieldBaseProps } from '../../interfaces';

export interface InputNumberProps extends AInputNumberProps, FieldBaseProps {}

export const InputNumber = (props: InputNumberProps) => {
  const { readOnly, value, ...restProps } = props;

  if (readOnly) {
    return <Text>{`${value ?? '-'}`}</Text>;
  }

  return <AInputNumber {...omit(props, ['readOnly'])} />;
};
