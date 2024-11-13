import { Cascader, Checkbox, Input, Radio, TreeSelect } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import { DatePicker, InputNumber, QueryTableSelect, RangePicker, Select, Switch, TimePicker } from './all';

export * from './all';

export const DEFAULT_COMPONENT_PLUGINS = {
  cascader: {
    component: Cascader,
    defaultComponentProps: {
      placeholder: '请选择',
    },
  },
  checkbox: {
    component: Checkbox,
    defaultComponentProps: {},
    defaultFormItemProps: {
      valuePropName: 'checked',
    },
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: CheckboxChangeEvent) => setSelectedKeys([e.target.checked as unknown as React.Key]),
        value: selectedKeys[0],
      };
    },
  },
  'checkbox.group': {
    component: Checkbox.Group,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: CheckboxValueType[]) => setSelectedKeys(checkedValues as unknown as React.Key[]),
        value: selectedKeys,
      };
    },
  },
  datepicker: {
    component: DatePicker,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: any) => setSelectedKeys([checkedValues]),
        value: selectedKeys[0],
      };
    },
  },
  input: {
    component: Input,
    defaultComponentProps: {
      allowClear: true,
      placeholder: '请输入',
    },
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys(e.target.value ? [e.target.value] : []),
        value: selectedKeys[0],
      };
    },
  },
  inputnumber: {
    component: InputNumber,
    defaultComponentProps: {
      placeholder: '请输入',
    },
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => {
          setSelectedKeys(Array.isArray(e) ? e : [e]);
        },
        value: selectedKeys[0],
        style: { width: '100%' },
      };
    },
  },
  querytableselect: {
    component: QueryTableSelect,
    defaultComponentProps: {},
  },
  radio: {
    component: Radio,
    defaultComponentProps: {},
  },
  'radio.group': {
    component: Radio.Group,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys([e.target.value]),
        value: selectedKeys[0],
      };
    },
  },
  rangepicker: {
    component: RangePicker,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: any) => setSelectedKeys(checkedValues ? [checkedValues] : []),
        value: selectedKeys[0],
      };
    },
  },
  select: {
    component: Select,
    defaultComponentProps: {
      allowClear: true,
      placeholder: '请选择',
    },
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys([e]),
        value: selectedKeys[0],
        style: { width: '100%' },
      };
    },
  },
  switch: {
    component: Switch,
    defaultComponentProps: {},
    defaultFormItemProps: {
      valuePropName: 'checked',
    },
  },
  timepicker: {
    component: TimePicker,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: any) => setSelectedKeys([checkedValues]),
        value: selectedKeys[0],
      };
    },
  },
  treeselect: {
    // TODO: 类型推断不出来，断言指定
    component: TreeSelect as any,
    defaultComponentProps: {},
    defaultFormItemProps: {
      optionsPropName: 'treeData',
    },
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      if (!ctx) return {};
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys([e]),
        value: selectedKeys[0],
        style: { width: '100%' },
      };
    },
  },
};

export type DefaultComponentPluginsType = typeof DEFAULT_COMPONENT_PLUGINS;
