import { Input as AInput } from 'antd';
import { InputProps as AInputProps } from 'antd/es/input';
import { TextAreaProps as ATextAreaProps } from 'antd/es/input/TextArea';
import { omit } from 'radash';
import React from 'react';
import { Text } from '../../../components';
import type { FieldBaseProps } from '../../interfaces';

export interface InputProps extends AInputProps, FieldBaseProps {}

export const Input = (props: InputProps) => {
  const { readOnly, value } = props;

  if (readOnly) {
    return <Text>{`${value || '-'} `}</Text>;
  }

  return <AInput {...omit(props, ['readOnly'])} />;
};

export interface TextAreaProps extends ATextAreaProps, FieldBaseProps {}

export const TextArea = (props: TextAreaProps) => {
  const { readOnly, value } = props;

  if (readOnly) {
    return <Text rows={3}>{`${value || '-'} `}</Text>;
  }

  return <AInput.TextArea {...omit(props, ['readOnly'])} />;
};

Input.TextArea = TextArea;
