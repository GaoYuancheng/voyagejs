import { Checkbox as ACheckbox } from 'antd';
import type { CheckboxOptionType } from 'antd/es/checkbox';
import { CheckboxGroupProps as ACheckboxGroupProps } from 'antd/lib/checkbox';
import { isObject, omit } from 'radash';
import React from 'react';
import { Text } from '../../../components';
import type { FieldBaseProps } from '../../interfaces';

const { Group: ACheckboxGroup } = ACheckbox;

export interface CheckboxGroupProps extends Omit<ACheckboxGroupProps, 'onChange'>, FieldBaseProps {}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { readOnly, value, options } = props;

  if (readOnly) {
    const texts = value?.map((item) => {
      const target = options?.find((option) => (isObject(option) ? option.value === item : option === item));
      return (target as CheckboxOptionType)?.label || target;
    });

    return <Text>{texts?.join('、') || '-'}</Text>;
  }

  return <ACheckboxGroup {...omit(props, ['readOnly'])} />;
};
