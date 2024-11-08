import { InfoCircleOutlined } from '@ant-design/icons';
import type { TooltipProps } from 'antd';
import { Space } from 'antd';
import React from 'react';
import { IconAction } from '../../plugins';

export interface ColumnTitleProps {
  required?: boolean;
  tooltip?: string | TooltipProps;
}

export const ColumnTitle: React.FC<ColumnTitleProps> = (props) => {
  const { children, required, tooltip } = props;

  return (
    <Space size={4}>
      {required && <span style={{ color: '#ff4d4f' }}>*</span>}
      {children}
      <IconAction render={!!tooltip} icon={<InfoCircleOutlined />} onClick={() => {}} tooltip={tooltip} />
    </Space>
  );
};
