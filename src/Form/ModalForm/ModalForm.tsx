import type { ModalProps as AModalProps } from 'antd';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
import React, { useRef } from 'react';
import type { PluginsType } from '../../interfaces';
import type { FormOptionProps, FormProps, FormStore } from '../Form';
import { Form, useForm } from '../Form';
import { FormGroup } from '../FormGroup';
import type { ModalProps } from './Modal';
import { useModal } from './Modal';

export type ExcludeModalType = 'onOk' | 'onCancel' | 'modalProps' | 'children' | 'confirmLoading';

export interface ModalFormContext<Values = any, P extends PluginsType = PluginsType> {
  form: FormStore<Values, P>;
  open: boolean;
  values: Record<string, any>;
}

export interface ModalFormProps<Values = any, P extends PluginsType = PluginsType>
  extends Omit<ModalProps, ExcludeModalType> {
  /** 点击确定回调 */
  onOk?: (e: MouseEvent<HTMLElement>, ctx: ModalFormContext<Values, P>) => void;
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: (e: MouseEvent<HTMLElement>, ctx: ModalFormContext<Values, P>) => void;
  /** 表单属性 */
  formProps?: Omit<FormProps<Values, P>, 'form' | 'initialValues'>;
  /** Modal的其他属性 */
  modalProps?: Omit<AModalProps, Exclude<ExcludeModalType, 'confirmLoading'> | 'onOk' | 'onCancel'> & {
    footerRender?: (ctx: ModalFormContext<Values, P>) => ReactNode;
  };

  children?: ReactElement;

  items?: FormProps<Values, P>['items'];
  /** 表单初始值 */
  initialValues?: FormProps<Values, P>['initialValues'];
  /** 远程表单值 */
  remoteValues?: FormProps<Values, P>['remoteValues'];
}

export interface ModalFormProps<Values = any, P extends PluginsType = PluginsType> {
  form?: FormStore<Values, P>;
  open?: boolean;
}

export interface ModalFormInstance<Values = any, P extends PluginsType = PluginsType> {
  open: (props: ModalFormProps<Values, P>) => void;
  close: (e?: MouseEvent<HTMLElement, MouseEvent>) => void;
  isOpen: boolean;
}

export const useModalForm = <P extends PluginsType = any>(
  props?: FormOptionProps<P>,
): [ReactElement, ModalFormInstance] => {
  const [modal, { open, close, isOpen }] = useModal();

  const [form] = useForm(props);

  const propsRef = useRef<ModalFormProps>();

  const getModalFormContext = () => {
    return {
      form,
      open: isOpen,
      values: form.getFieldsValue(),
    };
  };

  const { formProps, remoteValues } = propsRef.current || {};

  return [
    <Form key={'form'} remoteValues={remoteValues} {...formProps} form={form}>
      {modal}
    </Form>,
    {
      open: (params: ModalFormProps) => {
        propsRef.current = params;

        const { initialValues, onOk, onCancel, modalProps, formProps, items, children, ...restParams } = params;

        const { footerRender, footer, ...restModalProps } = modalProps || {};

        if (initialValues) {
          form.setFieldsValue(initialValues);
        }

        // ===== footer支持ctx =====
        const renderFooter = () => {
          return footerRender ? footerRender(getModalFormContext()) : footer;
        };

        return open({
          ...restParams,
          ...restModalProps,
          children: items ? <FormGroup items={items} /> : children,
          modalProps: {
            footer: renderFooter(),
            ...modalProps,
          },
          onCancel: (e) => {
            form.resetFields();
            return onCancel?.(e, getModalFormContext());
          },
          onOk: async (e) => {
            // ===== 增加表单校验逻辑 =====
            await form.validateFields();
            return onOk?.(e, getModalFormContext());
          },
        });
      },
      close,
      isOpen,
    },
  ];
};
