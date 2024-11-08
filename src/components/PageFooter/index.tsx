import { Affix, Layout } from 'antd';
import React, { useState } from 'react';
import { QueryActions, QueryActionsProps } from '../../template';

export interface PageFooterProps extends QueryActionsProps {
  items: QueryActionsProps['items'];
  contentStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
}

export const PageFooter: React.FC<PageFooterProps> = (props) => {
  const { children, contentStyle, footerStyle, ...restProps } = props;
  const [affixed, setAffixed] = useState(false);

  return (
    <Affix
      offsetBottom={0}
      onChange={(t) => {
        setAffixed(t!);
      }}
    >
      <div style={{ background: '#fff', boxShadow: affixed ? '0px -6px 13px 0px #ccc' : undefined, ...contentStyle }}>
        {children && <div style={{ padding: 24, paddingBottom: 0, borderBottom: '1px solid #d9d9d9' }}>{children}</div>}
        <Layout.Footer style={{ padding: 24, background: '#fff', ...footerStyle }}>
          <QueryActions {...restProps} />
        </Layout.Footer>
      </div>
    </Affix>
  );
};
