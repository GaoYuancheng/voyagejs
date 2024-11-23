---
group: 表单
demo:
  cols: 2
---

# Form.Item

> `Form.Item`必须在`Form`内使用

1. 联动效果实现，支持表单模式、表单值、数据源等强大的联动能力
2. 支持插件模式
3. 支持`remoteOptions`和`options`属性，设置数据源给表单控件
4. 支持将表单模式透传给子控件，用更少的代码实现业务上不同表单状态

## 基础使用

<code src="./item-base.tsx" ></code>

## 数据源

<code src="./item-remoteOptions.tsx" ></code>

## 表单联动

> 更多联动效果放在 [联动](www.baidu.com) 章节

<code src="./item-reactions-mode.tsx" >状态联动</code>
<code src="./item-reactions-value.tsx" >值联动</code>
<code src="./item-reactions-options.tsx" >数据源联动</code>

## Api

### FormItemProps

`FormItemProps` 类型定义了表单项的属性。它继承自 `antd` 的 [FormItemProps](https://4x.ant.design/components/form-cn/#Form.Item) 并添加了以下属性：

| 属性名              | 类型                                    | 描述                           |
| ------------------- | --------------------------------------- | ------------------------------ |
| **options**         | `any[]`                                 | 可选，数据源类型。             |
| **optionsPropName** | `string`                                | 可选，数据源属性名。           |
| **remoteOptions**   | `(depValues?: any[]) => Promise<any[]>` | 可选，远程数据源函数。         |
| **reactions**       | `ReactionType[]`                        | 可选，定义表单项的联动关系。   |
| **fieldType**       | `string`                                | 可选，插件，详见表单插件章节。 |
| **fieldProps**      | `any`                                   | 可选，插件属性。               |
| **viewFieldType**   | `any`                                   | 可选，预览模式渲染类型。       |
| **viewFieldProps**  | `any`                                   | 可选，预览模式渲染属性。       |

### 共有属性

`Form`、`Form.Group`、`Form.Item`共有的属性如下:

| 属性名                         | 类型                                                                        | 描述                                                                 |
| ------------------------------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **id**                         | `string`                                                                    | 可选，组件的唯一标识符                                               |
| **className**                  | `string`                                                                    | 可选，自定义 CSS 类名                                                |
| **style**                      | `React.CSSProperties`                                                       | 可选，自定义内联样式                                                 |
| **bordered**                   | `boolean`                                                                   | 可选，是否显示边框                                                   |
| **hidden**                     | `boolean`                                                                   | 可选，是否隐藏字段（依然会收集和校验字段）                           |
| **colon**                      | `boolean`                                                                   | 可选，配合 label 属性使用，表示是否显示 label 后面的冒号             |
| **mode**                       | `FieldMode`                                                                 | 可选，控件状态，可选值：'edit'、'view'、'disabled'、'hidden'、'none' |
| **colProps**                   | [ColProps](https://4x.ant.design/components/grid-cn/#Col)                   | 可选，栅格配置属性                                                   |
| **span**                       | `number \| null`                                                            | 可选，栅格占位格数，为 0 时相当于 display: none                      |
| **labelAlign**                 | `'left' \| 'right'`                                                         | 可选，标签文本对齐方式                                               |
| **labelCol**                   | `object`                                                                    | 可选，label 标签布局，同 `<Col>` 组件                                |
| **wrapperCol**                 | `object`                                                                    | 可选，输入控件布局样式，用法同 labelCol                              |
| **messageVariables**           | `Record<string, string>`                                                    | 可选，默认验证字段的信息                                             |
| **validateFirst**              | `boolean \| 'parallel'`                                                     | 可选，当某一规则校验不通过时，是否停止剩下的规则的校验               |
| **validateDebounce**           | `number`                                                                    | 可选，设置防抖，延迟毫秒数后进行校验                                 |
| **validateTrigger**            | `string \| string[]`                                                        | 可选，设置字段校验的时机                                             |
| **remoteOptionsDebounceProps** | [DebounceOptions](https://ahooks.js.org/hooks/use-debounce-effect/#options) | 可选，远程数据源防抖配置，默认 400 毫秒。                            |

### ReactionType

定义了表单项的联动类型，可以是被动关联或主动关联：

- **dependencies** (`NamePath[]`): 被动关联的表单路径数组。
- **effects** (`NamePath[]`): 主动关联的表单路径数组。
- **result** (`{ [Key in ReactionResultKeyType]: ReactionResultType<Key> }`): 联动结果的定义。

详细查看 [联动](/form/reactions#reactions-联动) 章节
