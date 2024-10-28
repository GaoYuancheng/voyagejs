import type { SpaceProps } from 'antd/lib/space';
import React from 'react';
import { Icon, type BaseIconProps } from '../../Icon';
import type { BaseActionProps } from '../BaseAction';
import { BaseAction, BaseActions } from '../BaseAction';

export interface IconActionProps
  extends Omit<BaseActionProps, 'children'>,
    Omit<BaseIconProps, 'disabled' | 'onClick'> {
  children?: any;
}

export const IconAction: React.FC<IconActionProps> = (props) => {
  const { children, icon, ...rest } = props;

  return (
    <BaseAction type="primary" {...rest}>
      <Icon icon={icon} />
    </BaseAction>
  );
};

export interface IconActionsProps extends SpaceProps {
  actions: IconActionProps[];
}

export const IconActions: React.FC<IconActionsProps> = (props) => {
  return <BaseActions {...props} component={IconAction} />;
};
