行为组件的通用属性如下:

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
