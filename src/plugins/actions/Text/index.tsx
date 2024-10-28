import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Typography } from 'antd';
import { ParagraphProps as AParagraphProps } from 'antd/lib/typography/Paragraph';
import cls from 'classnames';
import React from 'react';
import { usePrefixCls } from '../../context';

import './index.less';

const { Paragraph } = Typography;

export interface TextProps extends Omit<AParagraphProps, 'type'> {
  /** 类型 */
  type?: 'description' | 'title' | 'text' | 'primary' | AParagraphProps['type'];
  /** 显示行数 */
  rows?: number;
  /** loading装填，内部用 */
  loading?: boolean;
  children?: string;
}

export const Text: React.FC<TextProps> = (props) => {
  const {
    children,
    type = 'text',
    className,
    rows = 1,
    loading = false,
    disabled = false,
    style = {},
    ellipsis = {},
    ...restProps
  } = props;
  const prefix = usePrefixCls('text');

  return (
    <Spin spinning={loading} indicator={<LoadingOutlined />}>
      <Paragraph
        className={cls(className, {
          [prefix]: true,
          [prefix + '-type-title']: type === 'title',
          [prefix + '-type-text']: type === 'text',
          [prefix + '-type-description']: type === 'description',
          [prefix + '-type-primary']: type === 'primary',
          [prefix + '-type-disabled']: disabled,
        })}
        ellipsis={typeof ellipsis === 'boolean' ? { rows } : { rows, ...ellipsis }}
        title={children}
        type={type as AParagraphProps['type']}
        style={{ marginBottom: 0, ...style }}
        {...restProps}
      >
        {children}
      </Paragraph>
    </Spin>
  );
};
