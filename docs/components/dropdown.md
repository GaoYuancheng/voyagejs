---
group: 组件
order: 4
---

# Dropdown

支持 ActionButton 的下拉菜单组件，适合表格操作区域

:::success

1. 按钮根据 Promise 状态自动 loading
2. 更好的交互体验,删除二次弹框打开时，保持菜单展开等
   :::

<code src="./dropdown.tsx" ></code>

### API

| 属性名 | 类型                                              | 描述                             |
| ------ | ------------------------------------------------- | -------------------------------- |
| items  | [ButtonActionProps](/components/actions-button)[] | 下拉菜单项，行为按钮组件属性数组 |
| render | `(() => boolean) \| boolean`                      | 是否渲染                         |

其他属性同 antd 的 [Dropdown](https://4x.ant.design/components/dropdown-cn/#Dropdown) 组件。
