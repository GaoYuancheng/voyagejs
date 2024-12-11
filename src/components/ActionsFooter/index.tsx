import { Affix, AffixProps, Layout } from 'antd';
import { isFunction } from 'radash';
import React, { useState } from 'react';
import { QueryActions, QueryActionsProps } from '../../template';

export interface ActionsFooterProps extends Omit<QueryActionsProps, 'style'> {
  items: QueryActionsProps['items'];
  contentStyle?: React.CSSProperties | ((affixed: boolean) => React.CSSProperties);
  footerStyle?: React.CSSProperties | ((affixed: boolean) => React.CSSProperties);
  style?: React.CSSProperties | ((affixed: boolean) => React.CSSProperties);
  affixProps?: AffixProps;
  /** 是否固定在底部 */
  affix?: boolean;
}

export const ActionsFooter: React.FC<ActionsFooterProps> = (props) => {
  const { children, contentStyle, footerStyle, style, affixProps, affix = true, ...restProps } = props;
  const [affixed, setAffixed] = useState(false);

  const element = (
    <div
      style={{
        background: '#fff',
        boxShadow: affixed ? '0px -6px 13px 0px #ccc' : undefined,
        ...(isFunction(style) ? style(affixed) : style),
      }}
    >
      {children && (
        <div
          style={{
            padding: 24,
            borderBottom: '1px solid #d9d9d9',
            ...(isFunction(contentStyle) ? contentStyle(affixed) : contentStyle),
          }}
        >
          {children}
        </div>
      )}
      <Layout.Footer
        style={{ padding: 24, background: '#fff', ...(isFunction(footerStyle) ? footerStyle(affixed) : footerStyle) }}
      >
        <QueryActions {...restProps} />
      </Layout.Footer>
    </div>
  );

  if (!affix) return element;

  return (
    <Affix
      offsetBottom={0}
      {...affixProps}
      onChange={(t) => {
        setAffixed(t!);
      }}
    >
      {element}
    </Affix>
  );
};
