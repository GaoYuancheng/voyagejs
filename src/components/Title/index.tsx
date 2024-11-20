import cls from 'classnames';
import React from 'react';
import { usePrefixCls } from '../../context';

import './index.less';

export interface TitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'type'> {
  children?: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  const { children, className, ...restProps } = props;
  const prefix = usePrefixCls('custom-title');

  return (
    <div className={cls(prefix, className)} {...restProps}>
      {children}
    </div>
  );
};
