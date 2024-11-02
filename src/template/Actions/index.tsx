import { Space } from 'antd';
import { isFunction } from 'radash';
import React, { Fragment } from 'react';
import type { ButtonActionProps, IconActionProps, TextActionProps } from '../../plugins';
import { ButtonAction, IconAction, TextAction } from '../../plugins';

type CommonAction<Type, Ctx> = {
  actionType?: Type;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>, ctx: Ctx) => void;
};

type FnActionType<Ctx> = (ctx?: Ctx) => React.ReactNode;

const actionStore = {
  button: ButtonAction,
  text: TextAction,
  icon: IconAction,
};

export type ActionItem<Ctx> =
  | (CommonAction<never, Ctx> & Omit<ButtonActionProps, 'onClick'>)
  | (CommonAction<'button', Ctx> & Omit<ButtonActionProps, 'onClick'>)
  | (CommonAction<'text', Ctx> & Omit<TextActionProps, 'onClick'>)
  | (CommonAction<'icon', Ctx> & Omit<IconActionProps, 'onClick'>);

export interface ActionsProps<Ctx = any> extends React.HTMLAttributes<HTMLDivElement> {
  items?: ActionItem<Ctx>[] | FnActionType<Ctx>;
  getCtx?: () => Ctx;
}

export const Actions = <Ctx extends any = any>(props: ActionsProps<Ctx>) => {
  const { items, getCtx = () => ({} as Ctx), ...restProps } = props;

  const renderActions = (actions: ActionsProps<Ctx>['items']) => {
    // ===== action支持函数 =====
    if (isFunction(actions)) {
      return actions(getCtx());
    }

    // ===== 内置类型 =====
    const element = (actions as ActionItem<Ctx>[]).map((action, idx) => {
      const { actionType, onClick, ...rest } = action;
      const Action = actionType ? actionStore[actionType] : ButtonAction;
      return (
        // @ts-expect-error
        <Action
          {...rest}
          onClick={(e) => {
            onClick?.(e, getCtx());
          }}
          key={idx}
        />
      );
    });

    return <Space>{element}</Space>;
  };

  if (!items?.length) return <Fragment />;

  return <div {...restProps}>{renderActions(items)}</div>;
};
