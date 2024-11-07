import { Cascader, Checkbox, Input, InputNumber, Radio, Select, TreeSelect } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import { DatePicker } from './DatePicker';
import { OSwitch as Switch } from './OSwitch';
import { RangePicker } from './RangePicker';
import { TimePicker } from './TimePicker';

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
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: CheckboxValueType[]) => setSelectedKeys(checkedValues as unknown as React.Key[]),
        value: selectedKeys[0],
      };
    },
  },
  datepicker: {
    component: DatePicker,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: any) => setSelectedKeys(checkedValues),
        value: Array.isArray(selectedKeys) ? undefined : selectedKeys,
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
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys(e.target.value),
        value: selectedKeys,
      };
    },
  },
  inputnumber: {
    component: InputNumber as any,
    defaultComponentProps: {
      placeholder: '请输入',
    },
    defaultFilterProps: (ctx: FilterDropdownProps) => {
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
  radio: {
    component: Radio,
    defaultComponentProps: {},
  },
  'radio.group': {
    component: Radio.Group,
    defaultComponentProps: {},
  },
  rangepicker: {
    component: RangePicker,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: any) => setSelectedKeys(checkedValues),
        value: selectedKeys,
      };
    },
  },
  select: {
    component: Select as any,
    defaultComponentProps: {},
    defaultFilterProps: (ctx: FilterDropdownProps) => {
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys(Array.isArray(e) ? e : [e]),
        value: selectedKeys,
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
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (checkedValues: any) => setSelectedKeys(checkedValues),
        value: Array.isArray(selectedKeys) ? undefined : selectedKeys,
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
      const { setSelectedKeys, selectedKeys } = ctx;
      return {
        onChange: (e: any) => setSelectedKeys(e),
        value: selectedKeys,
        style: { width: '100%' },
      };
    },
  },
};

export type DefaultComponentPluginsType = typeof DEFAULT_COMPONENT_PLUGINS;
