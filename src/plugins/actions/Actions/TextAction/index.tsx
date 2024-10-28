import type { SpaceProps } from 'antd/lib/space';
import React from 'react';
import type { TextProps } from '../../Text';
import { Text } from '../../Text';
import type { BaseActionProps } from '../BaseAction';
import { BaseAction, BaseActions } from '../BaseAction';

export const BaseText = (props: React.PropsWithChildren<TextProps>) => {
  return (
    <Text type="primary" {...props} style={{ cursor: 'pointer', ...props.style }}>
      {props.children}
    </Text>
  );
};

export interface TextActionProps extends Omit<BaseActionProps, 'children'>, Omit<TextProps, 'disabled' | 'onClick'> {}

export const TextAction: React.FC<TextActionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseAction type="primary" {...rest}>
      <BaseText>{props.children}</BaseText>
    </BaseAction>
  );
};

export interface TextActionsProps extends SpaceProps {
  actions: TextActionProps[];
}

export const TextActions: React.FC<TextActionsProps> = (props) => {
  return <BaseActions component={TextAction} {...props} />;
};
