import { Form as AForm } from 'antd';
import type { FormListProps } from 'antd/lib/form/FormList';
import React, { useContext, useMemo } from 'react';
import { toArray } from '../../utils';
import { FormListContext } from './context';

const { List } = AForm;

export const FormList = (props: FormListProps) => {
  const { name } = props;

  const listCtx = useContext(FormListContext);

  const contextValue = useMemo(() => {
    return {
      name: listCtx.name ? [...toArray(listCtx.name), ...toArray(name)] : name,
    };
  }, [listCtx.name, name]);

  return (
    <FormListContext.Provider value={contextValue}>
      <List {...props} />
    </FormListContext.Provider>
  );
};
