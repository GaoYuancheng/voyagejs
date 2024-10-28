import { Button } from 'antd';
import type { ButtonProps } from 'antd/lib/button';
import type { SpaceProps } from 'antd/lib/space';
import React from 'react';
import type { BaseActionProps } from '../BaseAction';
import { BaseAction, BaseActions } from '../BaseAction';

export interface ButtonActionProps
  extends Omit<BaseActionProps, 'children' | 'onClick'>,
    Omit<ButtonProps, 'disabled' | 'onClick'> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

export const ButtonAction: React.FC<ButtonActionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseAction {...rest}>
      <Button>{children}</Button>
    </BaseAction>
  );
};

export interface ButtonActionsProps extends SpaceProps {
  actions: ButtonActionProps[];
}

export const ButtonActions: React.FC<ButtonActionsProps> = (props) => {
  return <BaseActions {...props} component={ButtonAction} />;
};
