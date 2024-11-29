import { Slider as ASlider, InputNumber, InputNumberProps } from 'antd';
import type { SliderBaseProps, SliderRangeProps } from 'antd/lib/slider';
import { isFunction } from 'radash';
import React from 'react';
import type { FieldBaseProps } from '../../interfaces';

export interface SliderProps<T = any, K = any>
  extends Omit<SliderBaseProps | SliderRangeProps, 'onChange'>,
    FieldBaseProps {
  onChange?: (value?: number) => void;
  value?: number;
  inputnumberProps?: InputNumberProps | ((value?: number) => InputNumberProps);
}

export const Slider: React.FC<SliderProps> = (props) => {
  const { value, onChange, readOnly, disabled, min, max, inputnumberProps, ...restProps } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ASlider
        {...restProps}
        disabled={disabled || readOnly}
        min={min}
        max={max}
        value={typeof value === 'number' ? value : 0}
        style={{ flex: 1 }}
        onChange={(val) => {
          onChange?.(val);
        }}
      />
      <InputNumber
        {...(isFunction(inputnumberProps) ? inputnumberProps(value) : inputnumberProps)}
        disabled={disabled || readOnly}
        min={min}
        max={max}
        onChange={(val) => {
          onChange?.(val as number);
        }}
        value={value}
      />
    </div>
  );
};
