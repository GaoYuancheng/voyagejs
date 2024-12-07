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

> 1. 支持`options`和`remoteOptions`属性，设置数据源给表单控件
> 2. 通过`field.options`获取数据源实例

<code src="./item-remoteOptions.tsx" ></code>

## 表单联动

> 更多联动效果放在 [联动](www.baidu.com) 章节

<code src="./item-reactions-mode.tsx" >状态联动</code>
<code src="./item-reactions-value.tsx" >值联动</code>
<code src="./item-reactions-options.tsx" >数据源联动</code>

## Api

### FormItemProps

`FormItemProps` 类型定义了表单项的属性。它继承自 `antd` 的 [FormItemProps](https://4x.ant.design/components/form-cn/#Form.Item) 并添加了以下属性：

| 属性名              | 类型                                             | 描述                                                     |
| ------------------- | ------------------------------------------------ | -------------------------------------------------------- |
| **options**         | `any[]`                                          | 可选，数据源类型。                                       |
| **optionsPropName** | `string`                                         | 可选，数据源属性名。例如`TreeSelect`组件为`treeData`     |
| **remoteOptions**   | `(depValues?: any[]) => Promise<any[]>`          | 可选，远程数据源函数。参数为`dependencies`依赖项值列表。 |
| **reactions**       | [ReactionType[]](/form/reactions#reactions-联动) | 可选，定义表单项的联动关系。                             |
| **fieldType**       | `string`                                         | 可选，插件，详见表单插件章节。                           |
| **fieldProps**      | `string`                                         | 可选，插件属性。                                         |
| **viewFieldType**   | `string \| () => React.ReactNode`                | 可选，预览模式渲染控件类型。                             |
| **viewFieldProps**  | `any`                                            | 可选，预览模式渲染控件属性。                             |

<embed src="./_base.md"></embed>
