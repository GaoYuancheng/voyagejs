---
group: 模板
nav:
  order: 3
---

# QueryForm

用于数据查询场景的表单组件。

<code src="./queryform.tsx" ></code>
<code src="./queryform-collapse.tsx" ></code>
<code src="./queryform-single.tsx" ></code>

## API

### QueryForm

| 参数             | 说明                       | 类型                                          | 默认值 |
| ---------------- | -------------------------- | --------------------------------------------- | ------ |
| form             | 表单实例                   | `FormStore<Values, P>`                        | -      |
| showFieldsLength | 显示字段长度，2/3/4 默认 3 | `number`                                      | 3      |
| defaultCollapse  | 是否默认折叠               | `boolean`                                     | true   |
| onSearch         | 点击查询时的回调函数       | `(values: any) => Promise<void> \| undefined` | -      |
| onReset          | 点击重置时的回调函数       | `(values: any) => void`                       | -      |
| enableMainSearch | 只有一个字段时，单一展示   | `boolean`                                     | false  |
| resetActionProps | 重置按钮属性               | `Omit<ButtonActionProps, 'onClick'>`          | -      |
| queryActionProps | 查询按钮属性               | `Omit<ButtonActionProps, 'onClick'>`          | -      |

更多属性，同 [Form](/form/form) 组件
