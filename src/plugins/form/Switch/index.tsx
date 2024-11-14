import { Switch as ASwitch } from 'antd';
import type { SwitchProps as ASwitchProps } from 'antd/lib/switch';
import React from 'react';
import type { FieldBaseProps } from '../../interfaces';

export interface SwitchProps<T = any, K = any> extends Omit<ASwitchProps, 'onChange'>, FieldBaseProps {
  checkedValue?: T;
  unCheckedValue?: K;
  onChange?: (value: T | K) => void;
  value?: T | K;
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const {
    checkedValue = true,
    unCheckedValue = false,
    value,
    onChange,
    readOnly,
    disabled,
    // @ts-expect-error
    bordered,
    ...restProps
  } = props;

  return (
    <ASwitch
      {...restProps}
      disabled={disabled || readOnly}
      onChange={(checked) => {
        onChange?.(checked ? checkedValue : unCheckedValue);
      }}
      // eslint-disable-next-line eqeqeq
      checked={value == checkedValue}
    />
  );
};
