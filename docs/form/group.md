---
group: 表单
---

# Form.Group

> `Form.Group`必须在`Form`内使用

1. 赋予`Form.Item`组能力，比如不同卡片中的表单项可以视为一个`Form.Group`
2. 支持将布局等基础属性透传给所有子`Form.Item`，支持`Form.Group`嵌套
3. 默认使用`Row`组件包裹`Form.Group`组件，使用`Col`包裹`Form.Item`组件，以实现最常用的布局方式
4. 支持容器及容器插件功能，实现灵活布局方式
5. 支持联动配置，同时设置整个表单组的显隐、布局状态等
6. 支持设置标题

## 基础使用方式

<code src="./group-base.tsx" ></code>

## 使用容器

<code src="./group-container.tsx" ></code>

## 容器嵌套

<code src="./group-container-nest.tsx" ></code>

## 不使用容器

<code src="./group-container-null.tsx" ></code>

## 联动

<code src="./group-reactions.tsx" ></code>

## Api

### FormGroupProps

`FormGroupProps` 类型定义了表单组的属性。

| 属性名             | 类型                                                              | 描述                                        |
| ------------------ | ----------------------------------------------------------------- | ------------------------------------------- |
| **title**          | `string`                                                          | 可选，表单组的标题。                        |
| **prefixName**     | `NamePath`                                                        | 可选，Item 名称前缀。                       |
| **name**           | `NamePath`                                                        | 可选，组唯一标识；当配置`reactions`时必填。 |
| **rowProps**       | [`RowProps`](https://4x.ant.design/components/grid-cn/#Row)       | 可选，Row 属性。                            |
| **items**          | `(FormItemProps<Values, P> \| FormGroupProps<Values, P>)[]`       | 可选，表单项。                              |
| **children**       | `React.ReactNode`                                                 | 可选，子节点。                              |
| **container**      | `React.ReactElement` \| `string`                                  | 可选，容器组件。                            |
| **containerProps** | `PluginPropsType<P, 'container', CN extends string ? CN : never>` | 可选，容器组件的属性。                      |
| **reactions**      | `ReactionType[]`                                                  | 可选，定义表单项的联动关系。                |

### 共有属性

`Form`、`Form.Group`、`Form.Item`共有的属性如下:

> 距离`Form.Item`最近的属性生效

| 属性名                         | 类型                                                                          | 描述                                                                 |
| ------------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **bordered**                   | `boolean`                                                                     | 可选，是否显示边框                                                   |
| **hidden**                     | `boolean`                                                                     | 可选，是否隐藏字段（依然会收集和校验字段）                           |
| **colon**                      | `boolean`                                                                     | 可选，配合 label 属性使用，表示是否显示 label 后面的冒号             |
| **mode**                       | [FieldMode](/form/mode)                                                       | 可选，控件状态，可选值：'edit'、'view'、'disabled'、'hidden'、'none' |
| **colProps**                   | [ColProps](https://4x.ant.design/components/grid-cn/#Col)                     | 可选，栅格配置属性                                                   |
| **span**                       | `number \| null`                                                              | 可选，栅格占位格数，为 0 时相当于 display: none                      |
| **labelAlign**                 | `'left' \| 'right'`                                                           | 可选，标签文本对齐方式                                               |
| **labelCol**                   | [object](https://4x.ant.design/components/form-cn/#Form.Item)                 | 可选，label 标签布局，同 `<Col>` 组件                                |
| **wrapperCol**                 | [object](https://4x.ant.design/components/form-cn/#Form.Item)                 | 可选，输入控件布局样式，用法同 labelCol                              |
| **messageVariables**           | [Record<string, string>](https://4x.ant.design/components/form-cn/#Form.Item) | 可选，默认验证字段的信息                                             |
| **validateFirst**              | `boolean \| 'parallel'`                                                       | 可选，当某一规则校验不通过时，是否停止剩下的规则的校验               |
| **validateDebounce**           | `number`                                                                      | 可选，设置防抖，延迟毫秒数后进行校验                                 |
| **validateTrigger**            | `string \| string[]`                                                          | 可选，设置字段校验的时机                                             |
| **remoteOptionsDebounceProps** | [DebounceOptions](https://ahooks.js.org/hooks/use-debounce-effect/#options)   | 可选，远程数据源防抖配置，默认 400 毫秒。                            |

### ReactionType

定义了表单组的联动类型，可以是被动关联或主动关联：

- **dependencies** (`NamePath[]`): 被动关联的表单路径数组。
- **effects** (`NamePath[]`): 主动关联的表单路径数组。
- **result** (`{ [Key in ReactionResultKeyType]: ReactionResultType<Key> }`): 联动结果的定义。

查看 [联动](/form/reactions#reactions-联动) 章节

### FormItemProps

更多 Form.Item 的 API 请查看 [Form.Item API](./item.md#Api)
