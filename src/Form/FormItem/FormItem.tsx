import { useDebounceEffect, useDeepCompareEffect } from 'ahooks';
import { Col, Form } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { omit } from 'radash';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import type { PluginsType } from '../../plugins';
import { parsePlugin } from '../../plugins';
import { toArray } from '../../utils';
import { FieldMode, commonKeys } from '../Base';
import { useFormContext } from '../Form/context';
import { useFormGroupContext } from '../FormGroup';
import { useFormListContext } from '../FormList/context';
import type { FormItemProps } from './interface';
import { FieldStore } from './store';

const { Item, useFormInstance } = Form;

export const FormItem = observer(
  <Values, P extends PluginsType = PluginsType>(props: PropsWithChildren<FormItemProps<Values, P>>) => {
    const { name, children } = props;

    const restProps = omit(props, [
      ...commonKeys,
      'options',
      'optionsPropName',
      'remoteOptions',
      'reactions',
      'fieldType',
      'fieldProps',
    ]);

    const [updateKey, update] = useState({});

    const formStore = useFormContext();
    const groupStore = useFormGroupContext();
    const listCtx = useFormListContext();

    const form = useFormInstance();

    const forceUpdate = () => update({});

    const fieldName = listCtx.name ? [...toArray(listCtx.name), ...toArray(name)] : name;

    const field = useMemo(() => {
      return formStore.createField(
        fieldName as string,
        // @ts-expect-error
        new FieldStore<Values, P>(
          // @ts-expect-error
          { ...props, name: fieldName },
          form,
          () => formStore,
          () => groupStore,
          forceUpdate,
        ),
      );
    }, []);

    const { remoteOptionsDebounceProps } = field;

    useDebounceEffect(
      () => {
        field.fetchRemoteOptions();
      },
      [updateKey],
      remoteOptionsDebounceProps,
    );

    useEffect(() => {
      // @ts-expect-error
      formStore.addField(fieldName, field);
      return () => {
        formStore.removeField(fieldName);
      };
    }, []);

    // 直接更新props
    useDeepCompareEffect(() => {
      field.updateProps({ ...props, name: fieldName } as FormItemProps<any>);
    }, [props, fieldName]);

    if (field.mode === FieldMode.NODE) {
      return null;
    }

    const { element: ele, defaultFormItemProps } = parsePlugin(
      formStore.plugins.field,
      field.fieldType,
      {
        ...toJS(field.fieldProps),
        ...toJS(field.childProps),
      },
      props,
    );

    const element = (
      <Item<Values> {...defaultFormItemProps} {...restProps} {...field.fieldChildProps} name={name}>
        {ele || children}
      </Item>
    );

    if (field.span === null || groupStore?.container === null) {
      return element;
    }

    return (
      <Col {...toJS(field.colProps)} span={field.span!}>
        {element}
      </Col>
    );
  },
);
