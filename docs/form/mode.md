---
group: 表单
order: 5
---

# 表单状态

支持 5 种表单状态:

编辑、预览、禁用、隐藏、不渲染

`import  { FieldMode } from 'voyagejs';`

<code src="./form-mode.tsx" ></code>

表单状态支持在`Form`、`Form.Group`、`Form.Item`、`Form.List`属性上配置，表单控件生效状态为最靠近该控件`Form.Item`层级上的配置

## 编辑状态 FieldMode.EDIT

控件输入形态

## 预览状态 FieldMode.VIEW

预览模式`Form.Item`会传递`readOnly: true`属性给表单控件；自定义开发的表单控件中，根据这一属性，适配`Form`预览模式;

预览模式下，`Form.Item`的`viewFieldType`属性会优先于`fieldType`、`children`属性渲染表单控件

## 禁用状态 FieldMode.DISABLED

禁用模式下，`Form.Item`会传递`disabled: true`属性给表单控件

## 隐藏 FieldMode.HIDDEN

隐藏表单项、表单组、表单列表，隐藏的表单控件依旧会被表单校验

## 隐藏 FieldMode.NONE

不渲染表单项、表单组、表单列表的 DOM 结构

## FAQ

TODO:
