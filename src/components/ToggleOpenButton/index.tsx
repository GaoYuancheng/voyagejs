import { DownOutlined } from '@ant-design/icons';
import cls from 'classnames';
import React from 'react';
import { usePrefixCls } from '../../context';
import { IconAction } from '../../plugins';

import './index.less';

export interface ToggleOpenButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** 是否展开状态 */
  open: boolean;
  /** 点击时候的回调 */
  onClick: (isOpen: boolean) => void;
}

export const ToggleOpenButton: React.FC<ToggleOpenButtonProps> = (props) => {
  const { open, onClick, className, style } = props;
  const prefix = usePrefixCls('toggle-open-button');

  return (
    <IconAction
      text={open ? '收起' : '展开'}
      textPosition="start"
      type="primary"
      textStyle={{ fontSize: 16 }}
      icon={<DownOutlined className={cls(prefix, { [prefix + '-rotate']: open })} />}
      onClick={() => {
        onClick(open);
      }}
      className={className}
      style={style}
    />
  );
};
