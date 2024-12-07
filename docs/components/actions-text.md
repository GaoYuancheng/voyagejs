---
group: 组件
order: 2
---

# TextAction

以属性配置方式实现隐藏、禁用、tooltip 提示框、二次确认功能

:::success
`onClick`返回`promise`时按钮自动进入 loading 状态。
:::

## 文本

<code src="./actions-text.tsx" ></code>
<code src="./actions-texts.tsx" ></code>
<code src="./actions-text-type.tsx" ></code>

### API

<embed src="./_base.md"></embed>

### 文本属性

同 antd 的 [Typography.Text](https://4x.ant.design/components/typography-cn/#API) 组件，并扩展了如下属性：

| 属性名 | 类型                                                                         | 描述     |
| ------ | ---------------------------------------------------------------------------- | -------- |
| type   | `'description' \| 'title' \| 'text' \| 'primary' \| AParagraphProps['type']` | 类型     |
| rows   | `number`                                                                     | 显示行数 |
