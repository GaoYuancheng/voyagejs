import { Form as AForm, Spin } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { omit } from 'radash';
import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import type { PluginsType } from '../../interfaces';
import { commonKeys } from '../Base';
import { FormGroup } from '../FormGroup';
import { FormContext } from './context';
import type { FormProps } from './interface';

const { useForm: useAForm, ErrorList, Provider } = AForm;

export { ErrorList, Provider, useAForm };

export const Form = observer(<Values, P extends PluginsType = PluginsType>(props: PropsWithChildren<FormProps<Values, P>>) => {
  const { children, form: formStore, onValuesChange, spinProps, items } = props;

  const restProps = omit(props, [...commonKeys, 'items', 'remoteValues', 'spinProps']);

  const [aForm] = useAForm();

  formStore.setFormInstance(aForm);

  useEffect(() => {
    formStore.init(props);
  }, []);

  const formContextValue = useMemo(() => {
    return formStore;
  }, [formStore]);

  const renderChildren = () => {
    if (items) {
      return <FormGroup<Values, P> items={items} />;
    }
    return children;
  };

  return (
    <FormContext.Provider value={formContextValue}>
      <Spin spinning={formStore.enableLoading ? formStore.loading : false} {...spinProps}>
        <AForm<Values>
          {...restProps}
          {...toJS(formStore.formProps)}
          form={aForm}
          onValuesChange={(changeValues, values) => {
            formStore.innerValueChange(changeValues);
            onValuesChange?.(changeValues, values);
          }}
        >
          {renderChildren()}
        </AForm>
      </Spin>
    </FormContext.Provider>
  );
});
