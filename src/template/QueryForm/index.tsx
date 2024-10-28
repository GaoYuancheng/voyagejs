import { Col, Row } from 'antd';
import type { FormProps } from 'antd/lib/form';
import cls from 'classnames';
import React, { useCallback, useState } from 'react';
import { usePrefixCls } from '../../context';
import { FieldMode, Form, FormStore, toCompareName, type FormItemProps } from '../../form';
import { ButtonActions, ToggleOpenButton, type ButtonActionProps } from '../../plugins';

import './index.less';

const { Item: FormItem } = Form;

export interface QueryFormProps<Values = any> extends Omit<FormProps<Values>, 'fields'> {
  /** 表单搜索字段配置，同FormItem */
  items: FormItemProps[];
  /** 表单实例 */
  form: FormStore<Values>;
  /** 显示字段长度，2/3/4 默认3 */
  showFieldsLength?: number;
  /** 默认折叠，默认true */
  defaultCollapse?: boolean;
  /** 点击查询时的回调函数 */
  onSubmit?: (values: any) => Promise<void> | undefined;
  /** 点击重置时的回调函数 */
  onReset?: () => void;
  /** 只有一个字段时，单一展示 */
  allowSingleSearch?: boolean;
  /** 重置按钮属性 */
  resetActionProps?: Omit<ButtonActionProps, 'onClick'>;
  /** 查询按钮属性 */
  queryActionProps?: Omit<ButtonActionProps, 'onClick'>;
}

export const QueryForm: <Values = any>(props: React.PropsWithChildren<QueryFormProps<Values>>) => React.ReactElement = (
  props,
) => {
  const prefix = usePrefixCls('queryform');

  const {
    items,
    form,
    onReset,
    onSubmit,
    allowSingleSearch = true,
    showFieldsLength = 2,
    defaultCollapse = true,
    resetActionProps,
    queryActionProps,
    ...formProps
  } = props;

  const [isOpen, setIsOpen] = useState(!defaultCollapse);

  const colLen = showFieldsLength + 1;
  const fields = items.filter((i) => i.mode !== FieldMode.HIDDEN && i.hidden !== true && i.mode !== FieldMode.NODE);

  const needCollapse = fields.length > showFieldsLength;
  const isSingleSearch = allowSingleSearch && fields.length === 1;

  // ===== 重置 =====
  const handleReset = useCallback(async () => {
    form.resetFields();
    return await onReset?.();
  }, [form, onReset]);

  // ===== 查询 =====
  const handleSearch = async () => {
    try {
      const values = await form.validateFields();
      return await onSubmit?.(values);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      return;
    }
  };

  // ===== 计算span =====
  const finalSpan = isSingleSearch ? 8 : 24 / colLen;

  // ===== 字段渲染，超出隐藏 =====
  const renderFields = (fields: FormItemProps[]) => {
    return fields.map((field, index) => {
      const finalLabel = isSingleSearch ? undefined : field.label;
      const fieldChild = field.children;
      const children = isSingleSearch
        ? React.cloneElement(fieldChild as React.ReactElement, {
            allowClear: true,
            onPressEnter: () => {
              handleSearch();
            },
          })
        : fieldChild;

      return (
        <FormItem
          key={toCompareName(field.name)}
          {...field}
          label={finalLabel}
          colProps={{
            className: cls({
              [prefix + '-field-over']: !isOpen && index > colLen - 2,
            }),
          }}
          span={finalSpan}
          mode={!isOpen && index > colLen - 2 ? FieldMode.HIDDEN : FieldMode.EDIT}
          children={children}
        />
      );
    });
  };

  // ===== 操作按钮 =====
  const actions: ButtonActionProps[] = [
    {
      children: '重置',
      ...resetActionProps,
      render: !isSingleSearch,
      onClick: handleReset,
    },
    {
      children: '查询',
      type: 'primary',
      ...queryActionProps,
      onClick: handleSearch,
    },
  ];

  // ===== 计算按钮偏移 =====
  const getActionOffset = useCallback(() => {
    const lastRowLen = fields?.length % colLen;
    if (!needCollapse) {
      return 24 - (fields.length + 1) * finalSpan;
    }

    if (isOpen) {
      return 24 - (lastRowLen + 1) * finalSpan;
    }

    return 0;
  }, [fields, isOpen, needCollapse, finalSpan]);

  if (!fields?.length) return <div />;

  return (
    <div className={prefix}>
      <Form form={form} {...formProps}>
        <Row gutter={24}>
          {renderFields(fields)}
          <div>{isSingleSearch && <ButtonActions actions={actions} />}</div>
          {!isSingleSearch && (
            <Col className={prefix + '-actions'} span={finalSpan} offset={getActionOffset()}>
              <div>
                <ButtonActions actions={actions} />
                {needCollapse && (
                  <ToggleOpenButton
                    style={{ marginLeft: 8 }}
                    open={isOpen}
                    onClick={(open) => {
                      setIsOpen(!open);
                    }}
                  />
                )}
              </div>
            </Col>
          )}
        </Row>
      </Form>
    </div>
  );
};
