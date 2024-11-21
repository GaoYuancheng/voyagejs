import { Affix, Layout } from 'antd';
import { isFunction } from 'radash';
import React, { useState } from 'react';
import { QueryActions, QueryActionsProps } from '../../template';

export interface ActionsFooterProps extends QueryActionsProps {
  items: QueryActionsProps['items'];
  contentStyle?: React.CSSProperties | ((affixed: boolean) => React.CSSProperties);
  footerStyle?: React.CSSProperties | ((affixed: boolean) => React.CSSProperties);
}

export const ActionsFooter: React.FC<ActionsFooterProps> = (props) => {
  const { children, contentStyle, footerStyle, ...restProps } = props;
  const [affixed, setAffixed] = useState(false);

  return (
    <Affix
      offsetBottom={0}
      onChange={(t) => {
        setAffixed(t!);
      }}
    >
      <div
        style={{
          background: '#fff',
          boxShadow: affixed ? '0px -6px 13px 0px #ccc' : undefined,
          ...(isFunction(contentStyle) ? contentStyle(affixed) : contentStyle),
        }}
      >
        {children && <div style={{ padding: 24, borderBottom: '1px solid #d9d9d9' }}>{children}</div>}
        <Layout.Footer
          style={{ padding: 24, background: '#fff', ...(isFunction(footerStyle) ? footerStyle(affixed) : footerStyle) }}
        >
          <QueryActions {...restProps} />
        </Layout.Footer>
      </div>
    </Affix>
  );
};
