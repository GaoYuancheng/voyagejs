import { Space } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import type { ActionContainerProps } from '../../ActionContainer';
import { ActionContainer } from '../../ActionContainer';

export type BaseActionProps = ActionContainerProps;

export const BaseAction = observer((props: React.PropsWithChildren<BaseActionProps>) => {
  const { tooltip, confirm, modalConfirm, container, disabled, render, onClick, children, onStatusChange, ...rest } =
    props;

  return (
    <ActionContainer
      tooltip={tooltip}
      confirm={confirm}
      modalConfirm={modalConfirm}
      disabled={disabled}
      onClick={onClick}
      render={render}
      container={container}
      onStatusChange={onStatusChange}
    >
      {React.cloneElement(children, rest)}
    </ActionContainer>
  );
});

export interface BaseActionsProps<T = any> {
  component: any;
  actions: (T | React.ReactElement)[];
}

export const BaseActions = (props: BaseActionsProps) => {
  const { actions, component: Component, ...rest } = props;

  return (
    <Space {...rest}>
      {actions.map((item, index) => {
        if (React.isValidElement(item)) {
          return React.cloneElement(item, { key: item.key ?? index });
        }
        return <Component key={index} {...item} />;
      })}
    </Space>
  );
};
