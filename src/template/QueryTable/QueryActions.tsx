import { useUpdate } from 'ahooks';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Actions, type ActionsProps } from '../Actions';

export type LayoutActions<Ctx> = { left?: ActionsProps<Ctx>['items']; right?: ActionsProps<Ctx>['items'] };

export interface QueryActionsProps<Ctx = any>
  extends Omit<ActionsProps<Ctx>, 'items'>,
    React.HTMLAttributes<HTMLDivElement> {
  items: LayoutActions<Ctx> | ActionsProps<Ctx>['items'];
}

const isObjectItems = (items: QueryActionsProps<any>['items']): items is LayoutActions<any> => {
  return !!items && !Array.isArray(items);
};

export const QueryActions = observer(<Ctx extends any = any>(props: QueryActionsProps<Ctx>) => {
  const { items, getCtx, style, ...rest } = props;

  const forceUpdate = useUpdate();

  useEffect(() => {
    const disposer = reaction(
      // @ts-expect-error
      () => getCtx!().table.selectedRows,
      (selectedRows) => {
        forceUpdate();
      },
    );

    return () => {
      disposer();
    };
  }, []);

  const { left, right } = isObjectItems(items) ? items : { right: items, left: [] };

  const renderActionItem = (items: ActionsProps<Ctx>['items']) => {
    return (
      <div>
        <Actions<Ctx> style={{ marginBottom: 16 }} getCtx={getCtx} items={items} />
      </div>
    );
  };

  return (
    <div style={{ ...style, display: 'flex', justifyContent: 'space-between' }} {...rest}>
      {renderActionItem(left)}
      {renderActionItem(right as ActionsProps<Ctx>['items'])}
    </div>
  );
});
