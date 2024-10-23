import { Row } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { Fragment, cloneElement, useEffect, useMemo } from 'react';
import type { PluginsType } from '../../interfaces';
import { FieldMode } from '../Base';
import { useFormContext } from '../Form/context';
import { FormItem } from '../FormItem';
import { toCompareName } from '../utils';
import { FormGroupContext, useFormGroupContext } from './context';
import type { FormGroupProps } from './interface';
import { GroupStore } from './store';

export const FormGroup = observer(<Values, P extends PluginsType = any>(props: FormGroupProps<Values, P>) => {
  const { name } = props;

  const formStore = useFormContext();
  const groupStore = useFormGroupContext();

  const group = useMemo(() => {
    return formStore!.createGroup(
      name,
      new GroupStore<Values, P>(
        props,
        () => formStore,
        () => groupStore,
      ),
    );
  }, []);

  useEffect(() => {
    formStore.addGroup(name, group);
    return () => {
      formStore.removeGroup(name);
    };
  }, []);

  const isGroup = (item: any): item is FormGroupProps<Values, P> => {
    return !!item.container || !!item.items;
  };

  const renderFields = (items: FormGroupProps<Values, P>['items']) => {
    return (
      <Fragment>
        {items?.map((item, idx) => {
          const { children } = item;

          if (isGroup(item)) {
            return (
              <FormGroup<Values, P>
                key={toCompareName(item.name as string) || idx}
                {...(item as FormGroupProps<Values, P>)}
              />
            );
          }

          return (
            <FormItem<Values, P> key={toCompareName(item.name as string) || idx} {...item}>
              {children}
            </FormItem>
          );
        })}
      </Fragment>
    );
  };

  // ===== children =====
  const element = group.groupProps.items
    ? renderFields(group.groupProps.items as FormGroupProps<Values, P>['items'])
    : props.children;

  // ===== 容器  ======
  let container;
  if (group.containerPlugin) {
    const { component: Com, defaultComponentProps } = group.containerPlugin;
    container = cloneElement(Com, {
      ...defaultComponentProps,
      ...toJS(group.containerProps),
    });
  } else if (group.container) {
    container = group.container;
  } else {
    container = <Row {...toJS(group.rowProps)}></Row>;
  }

  if (group.mode === FieldMode.HIDDEN) {
    container = <div style={{ display: 'none' }}></div>;
  }

  if (group.mode === FieldMode.NODE) {
    return null;
  }

  return (
    <FormGroupContext.Provider value={group}>
      {container ? cloneElement(container as any, group.containerProps, element) : element}
    </FormGroupContext.Provider>
  );
});
