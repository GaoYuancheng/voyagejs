---
group: 表单
order: 4
---

# useModalForm

<code src="./usemodalform-demo.tsx" ></code>

### props API

```jsx | pure
const [modalForm, { open, close, isOpen }] = useModalForm<any, DefaultPluginsType>(props);
```

| 名称      | 类型        | 描述     |
| --------- | ----------- | -------- |
| `plugins` | PluginsType | 插件类型 |

插件类型

```typescript
export type PluginsType = {
  container: PluginType;
  field: PluginType;
  action: PluginType;
  cell: PluginType;
};

export type PluginType = {
  [key: string]: {
    component: React.ComponentType<any> | any;
    defaultComponentProps?: any;
    defaultFormItemProps?: any;
    defaultFilterProps?: (ctx?: any) => any;
  };
};
```

### modalForm

DOM 元素，放在 JSX 中

### open()

打开弹窗表单的方法。支持以下参数:

| 参数名         | 类型                                                                                                       | 描述                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| title          | string                                                                                                     | 弹框标题                                  |
| width          | any                                                                                                        | 弹框宽度                                  |
| initialValues  | any                                                                                                        | 表单初始值                                |
| remoteValues   | () => Promise\<any\>                                                                                       | 表单远程初始值                            |
| items          | [FormGroupProps](/form/group)                                                                              | 表单项配置数组                            |
| modalProps     | [ModalProps](https://4x.ant.design/components/modal-cn/#API)                                               | Modal 组件的 props                        |
| formProps      | [FormProps](/form/form#api)                                                                                | Form 组件的 props                         |
| formGroupProps | [FormGroupProps](/form/group#api)                                                                          | Form.Group 组件的 props                   |
| children       | React.ReactNode \| function                                                                                | 弹框内容                                  |
| onOk           | (e: MouseEvent, ctx: [ModalFormContext](/form/use-modal-form#modalformcontext)) => void \| Promise\<void\> | 点击确定按钮的回调,会在表单校验通过后触发 |
| onCancel       | (e: MouseEvent, ctx: [ModalFormContext](/form/use-modal-form#modalformcontext)) => void                    | 点击取消按钮的回调,会自动重置表单         |

#### ModalFormContext

ModalFormContext 包含以下属性:

| 属性名 | 类型                  | 描述         |
| ------ | --------------------- | ------------ |
| form   | FormStore             | 表单实例     |
| isOpen | boolean               | 弹窗是否打开 |
| values | Record\<string, any\> | 当前表单值   |
| close  | () => void            | 关闭弹窗方法 |

示例:
