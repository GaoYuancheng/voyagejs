import { Space } from 'antd';
import { isFunction } from 'radash';
import React, { Fragment } from 'react';
import type {
  ButtonActionProps,
  DropDownItemType,
  DropdownProps,
  IconActionProps,
  TextActionProps,
} from '../../components';
import { getAction } from '../../components';

type CommonAction<Type, Ctx> = {
  actionType?: Type;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>, ctx: Ctx) => void;
};

type DropdownActionItemType<Ctx> = Omit<DropDownItemType, 'onClick'> & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, ctx: Ctx) => void;
};

export type ActionItem<Ctx> =
  | (CommonAction<never, Ctx> & Omit<ButtonActionProps, 'onClick'>)
  | (CommonAction<'button', Ctx> & Omit<ButtonActionProps, 'onClick'>)
  | (CommonAction<'text', Ctx> & Omit<TextActionProps, 'onClick'>)
  | (CommonAction<'icon', Ctx> & Omit<IconActionProps, 'onClick'>)
  | ({
      actionType: 'dropdown';
      items: DropdownActionItemType<Ctx>[];
    } & Omit<DropdownProps, 'items' | 'onClick'>);

type FnActionType<Ctx> = (ctx?: Ctx) => React.ReactNode;

export interface ActionsProps<Ctx = any> extends React.HTMLAttributes<HTMLDivElement> {
  items?: (ActionItem<Ctx> | FnActionType<Ctx>)[] | FnActionType<Ctx>;
  getCtx?: () => Ctx;
}

export const Actions = <Ctx extends any = any>(props: ActionsProps<Ctx>) => {
  const { items, getCtx = () => ({} as Ctx), ...restProps } = props;

  const renderActions = (actions: ActionsProps<Ctx>['items']) => {
    // ===== actions支持函数 =====
    if (isFunction(actions)) {
      return actions(getCtx());
    }

    // ===== 内置类型 =====
    const element = (actions as ActionItem<Ctx>[]).map((action, idx) => {
      // ===== action支持函数 =====
      if (isFunction(action)) {
        return <Fragment key={idx}>{action(getCtx())}</Fragment>;
      }

      // @ts-expect-error onClick items
      const { actionType = 'button', onClick, items: actionItems, ...rest } = action;

      let items = actionItems;
      if (actionType === 'dropdown') {
        items = (actionItems as DropdownActionItemType<Ctx>[]).map((item) => {
          return {
            ...item,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              return item.onClick!(e, getCtx());
            },
          };
        });
      }

      const Action = getAction(actionType);

      return (
        // @ts-expect-error
        <Action {...rest} onClick={(e) => onClick?.(e, getCtx())} key={idx} items={items} />
      );
    });

    return <Space>{element}</Space>;
  };

  if (
    Array.isArray(items) &&
    !items.filter((item) => {
      if (isFunction(item)) return item !== null;
      return item.render !== false;
    }).length
  ) {
    return <Fragment />;
  }

  return <div {...restProps}>{renderActions(items)}</div>;
};
