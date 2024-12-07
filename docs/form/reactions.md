---
group: 表单
order: 6
demo:
  cols: 2
---

# 联动

## dependencies 联动

`Antd Form.Item`如果设置了`dependencies`，它所依赖的字段更新时，该字段会自动触发更新与校验。

`voyajejs Form.Item`设置`dependencies`属性时，该表单项还会触发`remoteOptions`重新请求，并且将依赖项的值列表，作为`remoteOptions`的第一个参数。

:::warning
`voyagejs`中`dependencies`只推荐在数据源联动时使用，实现其他联动方式`dependencies`会增加代码复杂度
:::

<code src="./item-reactions-options.tsx" ></code>

## reactions 联动

```typescript
export type ReactionType =
  | {
      /** 被动关联 */
      dependencies: NamePath[];
      effects?: never;
      result: {
        [Key in ReactionResultKeyType]: ReactionResultType<Key>;
      };
    }
  | {
      /** 主动关联 */
      effects: NamePath[];
      dependencies?: never;
      result: {
        [Key in ReactionResultKeyType]: ReactionResultType<Key>;
      };
    }
  | {
      /** 事件联动 */
      effects: NamePath[];
      dependencies?: never;
      result: (props: ReactionResultFunctionPropsType) => void;
    };
```

`reactions`属性为数组格式，支持同时设置多种不同的联动效果。

### 字符串格式

`result`属性为 支持模板变量的字符串格式 或者 函数（同步、异步）格式，当配置的`dependencies`依赖项值发生变化时，会根据`result`配置执行相应效果；或者当前表单项值变化时，触发配置`effects`依赖项更新，执行`result`效果。注意：`effects`和`dependencies`属性不要同时配置。

> 如果`result`设置`value`属性改变了表单 A 的值，关联表单 A 的其他表单也会触发更新执行`reactions`。

`result`字符串格式支持 3 个模板字符类型：

| 名称      | 描述                       |
| --------- | -------------------------- |
| `$self`   | 当前变化的表单值           |
| `$deps`   | `dependencies`依赖项值数组 |
| `$values` | 全部表单值                 |

#### 示例

<code src="./reactions-effects.tsx" ></code>
<code src="./reactions-dependencies.tsx" ></code>
<code src="./reactions-minx.tsx" ></code>

### 函数格式

`result`函数格式支持 3 个模板字符类型：

| 名称        | 描述                                              |
| ----------- | ------------------------------------------------- |
| `self`      | 当前变化的表单项实例，仅在主动联动`effects`中生效 |
| `selfValue` | 当前变化的表单值，仅在主动联动`effects`中生效     |
| `deps`      | `dependencies`依赖项实例列表                      |
| `depValues` | `dependencies`依赖项值数组                        |
| `values`    | 全部表单值                                        |

#### 示例

<code src="./reactions-fn.tsx" >result 中每项值为函数格式</code>
<code src="./reactions-fn2.tsx" >result 本身支持函数格式</code>

<code src="./reactions-fn3.tsx" >result 中使用 selfValue 模板字符</code>

## Group 联动

<code src="./group-reactions.tsx" ></code>

## List 联动

TODO:
