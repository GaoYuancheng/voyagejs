import { TimePicker as ATimePicker } from 'antd';
import type { TimePickerProps as ATimePickerProps } from 'antd/lib/time-picker';
import moment, { type Moment } from 'moment';
import React from 'react';

export type TimePickerProps = Omit<ATimePickerProps, 'value' | 'onChange'> & {
  /** 根据format格式化值处理，默认true，可设置为utc获取时间戳格式值 */
  valueFormat?: 'utc' | boolean;
  value?: any;
  onChange?: (value: TimePickerProps['value']) => void;
};

export const TimePicker: React.FC<TimePickerProps> = (props) => {
  const { onChange, value, valueFormat = true, format, ...restProps } = props;

  const onFormatChange: ATimePickerProps['onChange'] = (time) => {
    let finalTime: TimePickerProps['value'] = time;

    if (valueFormat === 'utc') {
      finalTime = time?.valueOf();
    } else if (valueFormat) {
      finalTime = time?.format(format as string);
    }

    onChange?.(finalTime);
  };

  let finalValue = value;
  if (value) {
    // @ts-ignore
    finalValue = moment(value, valueFormat === true ? format : undefined);
  }

  return <ATimePicker {...restProps} format={format} onChange={onFormatChange} value={finalValue as Moment} />;
};
