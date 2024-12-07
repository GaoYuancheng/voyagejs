---
group: 表格
nav:
  order: 3
---

# Table

1. 支持分页和不分页两种格式
2. 内置弹框表单
3. 支持表头搜索和表头搜索插件
4. 支持渲染插件
5. 支持列隐藏

<code src="./table-base.tsx" ></code>

<code src="./table-no-pagination.tsx" ></code>

<code src="./table-action.tsx" ></code>

<code src="./table-datasource.tsx" ></code>

<code src="./table-rowselection.tsx" ></code>

<code src="./table-tooltip.tsx" ></code>

<code src="./table-filters.tsx" ></code>

## API

在[Antd Table](https://4x.ant.design/components/table-cn/#API)基础上扩展了如下属性：

### TableProps

| 参数               | 说明                               | 类型                                                |
| ------------------ | ---------------------------------- | --------------------------------------------------- |
| `remoteDataSource` | 远程数据源函数，返回数据和分页信息 | `(params: RequestParams) => Promise<RequestResult>` |
| `rowSelection`     | 选中行配置                         | `true \| TableRowSelection`                         |
| `requestOnMount`   | 初始是否发起一次请求，默认发起请求 | `boolean`                                           |
| `columns`          | 列配置                             | `ColumnType[]`                                      |
| `initialParams`    | 初始化请求参数                     | `any`                                               |
| `initialFilters`   | 初始化筛选参数                     | `any`                                               |

### RequestResult

`remoteDataSource` 返回值格式

```ts
type RequestResult = {
  data: RecordType[];
  total: number;
  current?: number;
  pageSize?: number;
};
```

### columns

[Antd Table Column](https://4x.ant.design/components/table-cn/#Column)

扩展了如下属性：

| 参数             | 说明                                                               | 类型                                                   |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| dataIndex        | 列数据在数据项中对应的路径，**默认取 key 值**                      | `string`                                               |
| key              | React key 值                                                       | `string`                                               |
| tooltip          | 列头提示信息                                                       | `string \| ReactNode`                                  |
| required         | 是否必填                                                           | `boolean`                                              |
| visible          | 是否显示此列                                                       | `boolean`                                              |
| render           | 自定义渲染，改写参数类型，并增加 `table` `modal`实例属性；支持插件 | `(ctx) => ReactNode`                                   |
| filterFieldType  | 筛选框类型，支持插件或者自定义类型                                 | `string \| ((ctx: AFilterDropdownProps) => ReactNode)` |
| filterFieldProps | 筛选框配置，透传给筛选框插件                                       | `any`                                                  |
| options          | 列配置选项，支持透传给插件                                         | `{ text: string; value: any }[]`                       |
