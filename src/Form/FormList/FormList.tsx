import { Form as AForm } from 'antd';
import type { FormListProps as AFormListProps } from 'antd/lib/form/FormList';
import React, { useEffect, useMemo } from 'react';
import type { PluginsType } from '../../plugins';
import { toArray } from '../../utils';
import { useFormContext } from '../Form';
import { useFormGroupContext } from '../FormGroup';
import type { ReactionType } from '../FormItem';
import { FormListContext, useFormListContext } from './context';
import { ListStore } from './store';

const { List } = AForm;

export interface FormListProps<Values = any, P extends PluginsType = PluginsType> extends AFormListProps {
  reactions?: ReactionType[];
}

export const FormList = <Values extends any = any, P extends PluginsType = PluginsType>(
  props: FormListProps<Values, P>,
) => {
  const { name, reactions } = props;

  const listCtx = useFormListContext();
  const formStore = useFormContext<Values, P>();
  const groupStore = useFormGroupContext<Values, P>();

  const realName = listCtx.name ? [...toArray(listCtx.name), ...toArray(name)] : name;

  const contextValue = useMemo(() => {
    return {
      name: realName,
    };
  }, [realName]);

  useEffect(() => {
    formStore.addGroup(
      realName as unknown as string,
      new ListStore(
        { ...props, name: realName },
        formStore.form,
        () => formStore,
        () => groupStore,
      ),
    );
  }, [contextValue.name]);

  return (
    <FormListContext.Provider value={contextValue}>
      <List {...props} />
    </FormListContext.Provider>
  );
};
