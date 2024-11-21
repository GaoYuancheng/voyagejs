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
