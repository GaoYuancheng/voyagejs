import { Input as AInput } from 'antd';
import { InputProps as AInputProps } from 'antd/es/input';
import { omit } from 'radash';
import React from 'react';
import { Text } from '../../../components';
import type { FieldBaseProps } from '../../interfaces';

export interface InputProps extends AInputProps, FieldBaseProps {}

export const Input = (props: InputProps) => {
  const { readOnly, value, ...restProps } = props;

  if (readOnly) {
    return <Text>{`${value || '-'} `}</Text>;
  }

  return <AInput {...omit(props, ['readOnly'])} />;
};

Input.TextArea = AInput.TextArea;
