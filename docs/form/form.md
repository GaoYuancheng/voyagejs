---
group: 表单
---

# Form

1. 实现了分组`Form.Group`功能，可将布局、样式等`Form.Item`的基础属性透传给所有子`Form.Item`
2. 支持配置化属性方式实现表单项、表单组的联动功能，包括可见性联动、数据源联动等
3. 插件化支持，将表单项以配置字符串方式渲染，支持表单项查看模式
4. 弹框表单以 方法 的形式提供给用户使用，大大大幅提升开发效率
5. 支持`remoteValues`设置表单远程值
6. 支持统一设置表单模式：编辑、禁用、预览、隐藏、不渲染

## 基础使用方式

> 基本使用方式和 antd 相同，但是`form`为必填属性

<code src="./form-base.tsx" ></code>

## items 属性

> 支持 `items` 快速编写表单

<code src="./form-items.tsx" ></code>

## 插件模式

> `Form`内置了一些插件类型，可以在 [插件](www.baidu.com:TODO) 章节查看

<code src="./form-plugins.tsx" ></code>


## 远程值

> `使用remoteValues`自动实现表单loading

<code src="./form-remoteValues.tsx" ></code>

## 表单模式

<code src="./form-mode.tsx" ></code>
