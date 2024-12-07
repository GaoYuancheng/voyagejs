### 共有属性

`Form`、`Form.Group`、`Form.Item`共有的属性如下:

> 距离`Form.Item`最近的属性生效

| 属性名                         | 类型                                                                          | 描述                                                                 |
| ------------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **hidden**                     | `boolean`                                                                     | 可选，是否隐藏字段（依然会收集和校验字段）                           |
| **readOnly**                   | `boolean`                                                                     | 可选，是否只读                                                       |
| **disabled**                   | `boolean`                                                                     | 可选，是否禁用                                                       |
| **render**                     | `boolean`                                                                     | 可选，自定义渲染函数                                                 |
| **colon**                      | `boolean`                                                                     | 可选，配合 label 属性使用，表示是否显示 label 后面的冒号             |
| **mode**                       | [FieldMode](/form/mode)                                                       | 可选，控件状态，可选值：'edit'、'view'、'disabled'、'hidden'、'none' |
| **bordered**                   | `boolean`                                                                     | 可选，是否显示边框                                                   |
| **span**                       | `number \| null`                                                              | 可选，栅格占位格数，为 0 时相当于 display: none                      |
| **colProps**                   | [ColProps](https://4x.ant.design/components/grid-cn/#Col)                     | 可选，栅格配置属性                                                   |
| **labelCol**                   | [Col](https://4x.ant.design/components/grid-cn/#Col)                          | 可选，label 标签布局，同 `<Col>` 组件                                |
| **wrapperCol**                 | [Col](https://4x.ant.design/components/grid-cn/#Col)                          | 可选，输入控件布局样式，用法同 labelCol                              |
| **labelAlign**                 | `'left' \| 'right'`                                                           | 可选，标签文本对齐方式                                               |
| **messageVariables**           | [Record<string, string>](https://4x.ant.design/components/form-cn/#Form.Item) | 可选，默认验证字段的信息                                             |
| **validateFirst**              | `boolean \| 'parallel'`                                                       | 可选，当某一规则校验不通过时，是否停止剩下的规则的校验               |
| **validateDebounce**           | `number`                                                                      | 可选，设置防抖，延迟毫秒数后进行校验                                 |
| **validateTrigger**            | `string \| string[]`                                                          | 可选，设置字段校验的时机                                             |
| **remoteOptionsDebounceProps** | [DebounceOptions](https://ahooks.js.org/hooks/use-debounce-effect/#options)   | 可选，远程数据源防抖配置，默认 400 毫秒。                            |
