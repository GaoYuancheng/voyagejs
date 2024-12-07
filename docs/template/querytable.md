---
group: 模板
nav:
  order: 4
---

# QueryTable

<code src="./querytable-base.tsx" ></code>

<code src="./querytable-actions.tsx" ></code>

## API

### QueryTable

| 参数             | 说明         | 类型                                                                    | 默认值 |
| ---------------- | ------------ | ----------------------------------------------------------------------- | ------ |
| rowKey           | 行键         | `string`                                                                | -      |
| columns          | 列配置       | `TableProps<RecordType>['columns']`                                     | -      |
| remoteDataSource | 远程数据源   | `TableProps<RecordType>['remoteDataSource']`                            | -      |
| fields           | 表单字段配置 | `QueryFormProps<Values, P>['items']`                                    | -      |
| formProps        | 表单属性     | `Omit<QueryFormProps<Values, P>, 'form' \| 'items' \| 'initialValues'>` | -      |
| tableProps       | 表格属性     | `Omit<TableProps<RecordType>, 'columns' \| 'remoteDataSource'>`         | -      |
| actions          | 操作栏配置   | `QueryActionsProps<TableInstance>['items']`                             | -      |
| style            | 自定义样式   | `React.CSSProperties`                                                   | -      |
| className        | 自定义类名   | `string`                                                                | -      |
| actionsProps     | 操作栏属性   | `Omit<ActionsProps<TableInstance>, 'items'>`                            | -      |
| rowSelection     | 行选择配置   | `TableProps<RecordType>['rowSelection']`                                | -      |
| initialValues    | 表单初始值   | `FormProps<Values, P>['initialValues']`                                 | -      |
| pagination       | 分页配置     | `TableProps<RecordType, P>['pagination']`                               | -      |

### QueryTableInstance

| 参数  | 说明     | 类型                        | 默认值 |
| ----- | -------- | --------------------------- | ------ |
| form  | 表单实例 | `FormStore<Values, P>`      | -      |
| table | 表格实例 | `TableInstance<RecordType>` | -      |
| modal | 弹窗实例 | `ModalInstance`             | -      |

更多属性，同 [Table](/table/table) 组件
