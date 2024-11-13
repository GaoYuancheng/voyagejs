import { DatePicker as ADatePicker } from 'antd';
import type { RangePickerProps as ARangePickerProps } from 'antd/lib/date-picker';
import moment, { type Moment } from 'moment';
import React from 'react';
import { Text } from '../../../components';
import type { FieldBaseProps } from '../../interfaces';

const { RangePicker: ARangePicker } = ADatePicker;

export type RangePickerProps = Omit<ARangePickerProps, 'value' | 'onChange'> & {
  /** 根据format格式化值处理，默认true，可设置为utc获取时间戳格式值 */
  valueFormat?: 'utc' | boolean;
  value?: any[];
  /** 根据showTime区分TimePicker，ADatePickerProps里没有这个类型 */
  showTime?: boolean;

  onChange?: (value: RangePickerProps['value']) => void;
} & FieldBaseProps;

export const RangePicker: React.FC<RangePickerProps> = (props) => {
  const { onChange, value, valueFormat = true, format, readOnly, ...restProps } = props;

  const onFormatChange: ARangePickerProps['onChange'] = (time) => {
    let finalTime: RangePickerProps['value'] = time!;

    if (valueFormat === 'utc') {
      finalTime = time?.map((t) => t?.valueOf());
    } else if (valueFormat) {
      finalTime = time?.map((t) => t?.format(format as string));
    }

    onChange?.(finalTime);
  };

  if (readOnly) {
    return <Text>{value?.join(' ~ ')}</Text>;
  }

  let finalValue = value;
  if (value) {
    finalValue = value.map((t) => moment(t, valueFormat === true ? !!format : undefined));
  }

  // @ts-expect-error
  return <ARangePicker picker="date" {...restProps} onChange={onFormatChange} value={finalValue as [Moment, Moment]} />;
};
