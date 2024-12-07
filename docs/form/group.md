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
| **items**          | `(FormItemProps<Values, P> \| FormGroupProps<Values, P>)[]`       | 可选，表单项。[FormItemProps](/form/item)   |
| **children**       | `React.ReactNode`                                                 | 可选，子节点。                              |
| **container**      | `React.ReactElement` \| `string`                                  | 可选，容器组件或容器插件。                  |
| **containerProps** | `PluginPropsType<P, 'container', CN extends string ? CN : never>` | 可选，容器插件的属性。                      |
| **reactions**      | [ReactionType[]](/form/reactions#reactions-联动)                  | 可选，定义表单项的联动关系。                |

<embed src="./_base.md"></embed>
