import { Dropdown as ADropdown, message } from 'antd';
import { DropdownProps as ADropdownProps } from 'antd/lib/dropdown';
import { debounce } from 'radash';
import React, { useRef, useState } from 'react';
import type { ButtonActionProps } from '../Actions';
import { ButtonAction } from '../Actions';

export type DropDownItemType = Omit<ButtonActionProps, 'onClick'> & {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export interface DropdownProps extends Omit<ADropdownProps, 'visible'> {
  items: DropDownItemType[];
  render?: boolean;
}

export const Dropdown = (props: React.PropsWithChildren<DropdownProps>) => {
  const { items = [], children, render = true, onOpenChange: propOnOpenChange, overlayStyle, menu, ...rest } = props;
  const [visible, setVisible] = useState(false);
  const canHideOverlayRef = useRef(true);
  const loadingRef = useRef(false);

  const onLoadingChange = (preLoading: boolean, curLoading: boolean) => {
    // loading关闭后，仍然是展开下拉状态，手动关闭
    if (preLoading && !curLoading) {
      if (visible) {
        setVisible(false);
      }
    }
  };

  const onStatusChange: ButtonActionProps['onStatusChange'] = ({ popconfirmOpen, loading }) => {
    onLoadingChange(loadingRef.current, loading);
    loadingRef.current = loading;

    if (popconfirmOpen || loading) {
      canHideOverlayRef.current = false;
      setVisible(true);
      return;
    }

    canHideOverlayRef.current = true;
  };

  const menus = items.map((item, idx) => {
    const { onClick, ...rest } = item;
    return {
      label: (
        <ButtonAction
          {...rest}
          type="text"
          block
          onClick={(e) => {
            if (loadingRef.current) {
              message.warning('请稍后再试');
              return;
            }
            return onClick?.(e);
          }}
          onStatusChange={onStatusChange}
        />
      ),
      key: idx.toString(),
      style: { padding: 0 },
    };
  });

  const onOpenChange: ADropdownProps['onOpenChange'] = (visible) => {
    if (!canHideOverlayRef.current) return;
    if (loadingRef.current) return;
    setVisible(visible);
    propOnOpenChange?.(visible);
  };

  if (!render) return null;

  if (items.every((item) => item.render === false)) {
    return null;
  }

  return (
    <ADropdown
      {...rest}
      open={visible}
      overlayStyle={{ zIndex: 1000, ...overlayStyle }}
      onOpenChange={debounce({ delay: 100 }, onOpenChange)}
      menu={{ ...menu, items: menus }}
    >
      {children}
    </ADropdown>
  );
};
