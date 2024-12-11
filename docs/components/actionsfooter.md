---
group: 组件
order: 20
demo:
  cols: 2
---

# ActionsFooter

页脚操作组件

一个固定在页面底部的操作按钮组件,通常用于表单的提交、取消等操作。

1. 组件基于 antd 的 Affix 组件实现固定效果
2. 当页面滚动到底部时,会自动吸附在底部
3. 可以通过 style 等属性自定义样式
4. items 的配置项与 [ButtonActionProps](/components/actions#按钮属性) 的 props 基本一致

## 基础用法

<code src="./actionsfooter-btn.tsx" ></code>
<code src="./actionsfooter-content.tsx" ></code>

## API

### ActionsFooter

| 参数         | 说明                  | 类型                                                     | 默认值 |
| ------------ | --------------------- | -------------------------------------------------------- | ------ |
| items        | 操作按钮配置项        | [ActionItem[]](/components/actions#按钮属性)             | -      |
| children     | 内容区域              | `React.ReactNode`                                        | -      |
| contentStyle | 内容区域样式          | `CSSProperties \| ((affixed: boolean) => CSSProperties)` | -      |
| footerStyle  | 底部区域样式          | `CSSProperties \| ((affixed: boolean) => CSSProperties)` | -      |
| style        | 容器样式              | `CSSProperties \| ((affixed: boolean) => CSSProperties)` | -      |
| affixProps   | Antd Affix 组件的属性 | [AffixProps](https://ant.design/components/affix-cn#api) | -      |
