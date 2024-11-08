import { Modal } from 'antd';
import type { ModalFuncProps } from 'antd/lib/modal';
import React, { PropsWithChildren } from 'react';

export interface ModalConfirmProps extends ModalFuncProps {
  type?: 'info' | 'success' | 'error' | 'warning' | 'confirm';
  onClick?: any;
}

export const ModalConfirm: React.FC<PropsWithChildren<ModalConfirmProps>> = (props) => {
  const { children, type = 'confirm', onClick, ...restProps } = props;

  // @ts-expect-error 类型错误
  return React.cloneElement(children, {
    onClick: () => {
      Modal[type]({
        ...restProps,
        okButtonProps: {
          ...restProps.okButtonProps,
        },
      });
    },
  });
};
