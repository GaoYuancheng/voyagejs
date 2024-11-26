---
group: 组件
---

# 行为组件

以属性配置方式实现隐藏、禁用、tooltip 提示框、二次确认功能；`onClick`返回`promise`时按钮自动 loading。

## 按钮

<code src="./actions-button.tsx" ></code>

## 文本

<code src="./actions-text.tsx" ></code>

## 按钮

<code src="./actions-icon.tsx" ></code>

## 下拉菜单

<code src="./actions-dropdown.tsx" ></code>

### API

组件的通用属性如下:

| 属性名       | 类型                                                              | 描述                                  |
| ------------ | ----------------------------------------------------------------- | ------------------------------------- |
| tooltip      | `string \| TooltipProps`                                          | Tooltip 的 title，推荐 string 类型    |
| confirm      | `string \| PopconfirmProps`                                       | PopConfirm 的 title，推荐 string 类型 |
| modalConfirm | `string` \| [ModalConfirmProps](/components/actions#modalconfirm) | Modal 弹框确认                        |
| disabled     | `(() => boolean) \| boolean`                                      | 是否禁用                              |
| render       | `(() => boolean) \| boolean`                                      | 是否渲染                              |
| onClick      | `(...args: any[]) => any`                                         | 点击事件                              |
| container    | `(() => React.ReactElement) \| React.ReactElement`                | 渲染容器                              |

#### ModalConfirm

ModalConfirm 组件继承了 antd 的 [Modal.metthod()](<https://4x.ant.design/components/modal-cn/#Modal.method()>) ，并扩展了如下属性：

| 属性名 | 类型                                                       | 描述        |
| ------ | ---------------------------------------------------------- | ----------- |
| type   | `'info' \| 'success' \| 'error' \| 'warning' \| 'confirm'` | method 类型 |

### 按钮属性

同 antd 的 [Button](https://4x.ant.design/components/button-cn/#API) 组件

### 文本属性

同 antd 的 [Typography.Text](https://4x.ant.design/components/typography-cn/#API) 组件，并扩展了如下属性：

| 属性名 | 类型                                                                         | 描述     |
| ------ | ---------------------------------------------------------------------------- | -------- |
| type   | `'description' \| 'title' \| 'text' \| 'primary' \| AParagraphProps['type']` | 类型     |
| rows   | `number`                                                                     | 显示行数 |

### 图标属性

| 属性名        | 类型                                                               | 描述             |
| ------------- | ------------------------------------------------------------------ | ---------------- |
| icon          | antd 的 [Icon](https://4x.ant.design/components/icon-cn/#API) 组件 | 图标类型         |
| type          | `'primary' \| 'error' \| 'danger' \| 'success' \| 'warning'`       | 图标类型         |
| text          | `string`                                                           | 图标旁边的文本   |
| textClassName | `string`                                                           | 文本的自定义类名 |
| textStyle     | `React.CSSProperties`                                              | 文本的自定义样式 |
| textPosition  | `'start' \| 'end'`                                                 | 文本的位置       |
