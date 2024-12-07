---
group: 组件
order: 3
---

# IconAction

以属性配置方式实现隐藏、禁用、tooltip 提示框、二次确认功能

:::success
`onClick`返回`promise`时按钮自动进入 loading 状态。
:::

## 图标

<code src="./actions-icon.tsx" ></code>
<code src="./actions-icons.tsx" ></code>
<code src="./actions-icons-type.tsx" ></code>
<code src="./actions-icon-text.tsx" ></code>

### API

<embed src="./_base.md"></embed>

### 图标属性

| 属性名        | 类型                                                               | 描述             |
| ------------- | ------------------------------------------------------------------ | ---------------- |
| icon          | antd 的 [Icon](https://4x.ant.design/components/icon-cn/#API) 组件 | 图标类型         |
| type          | `'primary' \| 'error' \| 'danger' \| 'success' \| 'warning'`       | 图标类型         |
| text          | `string`                                                           | 图标旁边的文本   |
| textClassName | `string`                                                           | 文本的自定义类名 |
| textStyle     | `React.CSSProperties`                                              | 文本的自定义样式 |
| textPosition  | `'start' \| 'end'`                                                 | 文本的位置       |
