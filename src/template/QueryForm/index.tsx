import { Col, Row } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import cls from 'classnames';
import React, { useCallback, useState } from 'react';
import { ButtonActions, ToggleOpenButton, type ButtonActionProps } from '../../components';
import { usePrefixCls } from '../../context';
import { FieldMode, Form, FormStore, toCompareName, type FormItemProps, type FormProps } from '../../form';
import { PluginsType, parsePlugin } from '../../plugins';

import './index.less';

const { Item: FormItem } = Form;

export interface QueryFormProps<Values = any, P extends PluginsType = PluginsType> extends FormProps<Values, P> {
  /** 表单实例 */
  form: FormStore<Values, P>;
  /** 显示字段长度，2/3/4 默认3 */
  showFieldsLength?: number;
  /** 默认折叠，默认true */
  defaultCollapse?: boolean;
  /** 点击查询时的回调函数 */
  onSearch?: (values: any) => Promise<void> | undefined;
  /** 点击重置时的回调函数 */
  onReset?: () => void;
  /** 只有一个字段时，单一展示 */
  enableMainSearch?: boolean;
  /** 重置按钮属性 */
  resetActionProps?: Omit<ButtonActionProps, 'onClick'>;
  /** 查询按钮属性 */
  queryActionProps?: Omit<ButtonActionProps, 'onClick'>;
}

const IQueryForm = <Values, P extends PluginsType>(props: QueryFormProps<Values, P>): React.ReactElement => {
  const prefix = usePrefixCls('queryform');

  const {
    items = [],
    form,
    onReset,
    onSearch,
    enableMainSearch = false,
    showFieldsLength = 2,
    defaultCollapse = true,
    resetActionProps,
    queryActionProps,
    initialValues,
    ...formProps
  } = props;

  const [isOpen, setIsOpen] = useState(!defaultCollapse);

  const colLen = showFieldsLength + 1;
  const fields = items.filter((i) => i.mode !== FieldMode.HIDDEN && i.hidden !== true && i.mode !== FieldMode.NODE);

  const needCollapse = fields.length > showFieldsLength;
  const isSingleSearch = enableMainSearch && fields.length === 1;

  // ===== 重置 =====
  const handleReset = useCallback(async () => {
    form.resetFields();
    return await onReset?.();
  }, [form, onReset]);

  // ===== 查询 =====
  const handleSearch = async () => {
    try {
      const values = await form.validateFields();
      return await onSearch?.(values);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      return;
    }
  };

  // ===== 计算span =====
  const finalSpan = isSingleSearch ? 8 : 24 / colLen;

  // ===== 字段渲染，超出隐藏 =====
  const renderFields = (fields: FormItemProps<Values, P>[]) => {
    return fields.map((field, index) => {
      const finalLabel = isSingleSearch ? undefined : field.label;
      const fieldChild = field.children || parsePlugin(form.plugins['field'], field.fieldType, field.fieldProps);
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
          key={toCompareName(field.name as NamePath)}
          {...field}
          label={finalLabel}
          colProps={{
            className: cls({
              [prefix + '-field-over']: !isOpen && index > colLen - 2,
            }),
          }}
          span={finalSpan}
          mode={!isOpen && index > colLen - 2 ? FieldMode.HIDDEN : FieldMode.EDIT}
        >
          {children}
        </FormItem>
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
      <Form form={form} {...formProps} initialValues={initialValues}>
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

type InternalQueryFormType = typeof IQueryForm;

export interface QueryFormType extends InternalQueryFormType {
  useForm: typeof Form.useForm;
}

const QueryForm = IQueryForm as QueryFormType;

QueryForm.useForm = Form.useForm;

export { QueryForm };
