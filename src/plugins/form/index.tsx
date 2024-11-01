import { Cascader, Checkbox, Input, InputNumber, Radio, Select, TreeSelect } from 'antd';
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
  },
  'checkbox.group': {
    component: Checkbox.Group,
    defaultComponentProps: {},
  },
  datepicker: {
    component: DatePicker,
    defaultComponentProps: {},
  },
  input: {
    component: Input,
    defaultComponentProps: {
      allowClear: true,
      placeholder: '请输入',
    },
  },
  inputnumber: {
    component: InputNumber as typeof InputNumber,
    defaultComponentProps: {
      placeholder: '请输入',
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
  },
  select: {
    component: Select as typeof Select,
    defaultComponentProps: {},
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
  },
  treeselect: {
    // TODO: 类型推断不出来，断言指定
    component: TreeSelect as typeof TreeSelect,
    defaultComponentProps: {},
    defaultFormItemProps: {
      optionsPropName: 'treeData',
    },
  },
};

export type DefaultComponentPluginsType = typeof DEFAULT_COMPONENT_PLUGINS;
