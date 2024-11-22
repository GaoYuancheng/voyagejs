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
