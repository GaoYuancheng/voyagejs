import { useContext } from 'react';
import { ConfigProvider } from 'antd';

export const useConfigProvider = () => {
  return useContext(ConfigProvider.ConfigContext);
};

export const usePrefixCls = (className: string) => {
  const { getPrefixCls } = useConfigProvider();
  return getPrefixCls(className);
};
