import { useDebounceEffect, useDeepCompareEffect } from 'ahooks';
import { Col, Form } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { omit } from 'radash';
import React, { PropsWithChildren, cloneElement, isValidElement, useEffect, useMemo, useState } from 'react';
import type { PluginsType } from '../../interfaces';
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
      'component',
      'componentProps',
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

    useDeepCompareEffect(() => {
      field.updateProps(props as FormItemProps<any>);
    }, [props]);

    if (field.mode === FieldMode.NODE) {
      return null;
    }

    const { defaultComponentProps, component: Com, defaultFormItemProps = {} } = field.plugin || {};

    const element = (
      <Item<Values> {...defaultFormItemProps} {...restProps} {...field.fieldProps} name={name}>
        {Com ? (
          <Com {...defaultComponentProps} {...toJS(field.componentProps)} {...toJS(field.childProps)} />
        ) : isValidElement(children) ? (
          cloneElement(children, { ...toJS(field.childProps) })
        ) : (
          children
        )}
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
