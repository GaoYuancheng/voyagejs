import { Divider } from 'antd';
import type { FilterDropdownProps as AFilterDropdownProps } from 'antd/lib/table/interface';
import React from 'react';
import { Form } from '../form';
import { ButtonActions, parsePlugin } from '../plugins';
import { pluginStore } from '../utils';
import type { TableStore } from './store';

const { Item: FormItem } = Form;

// filterDropdown: (ctx) => {
//   const { clearFilters, close, confirm, filters, selectedKeys, setSelectedKeys, visible } = ctx;
//   return (
//     <div>
//       <div style={{ padding: 8 }}>
//         <Input
//           placeholder="请输入"
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           value={selectedKeys[0]}
//         />
//       </div>
//       <Divider style={{ margin: 0 }} />
//       <ButtonActions
//         style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}
//         actions={[
//           {
//             children: '重置',
//             size: 'small',
//             type: 'link',
//             disabled: selectedKeys.length === 0,
//             onClick: () => {
//               setSelectedKeys([]);
//               confirm({ senderName: selectedKeys });
//               clearFilters();
//               close();
//             },
//           },
//           {
//             children: '确定',
//             size: 'small',
//             type: 'primary',
//             onClick: async () => {
//               confirm({ senderName: selectedKeys });
//               close();
//             },
//           },
//         ]}
//       />
//     </div>
//   );
// },

export interface FilterDropdownProps<RecordType> extends React.PropsWithChildren<AFilterDropdownProps> {
  table: TableStore<RecordType>;
  dataIndex: string;
  component: string;
  componentProps?: Record<string, any>;
  ctx?: any;
}

export const FilterDropdown = <RecordType,>(props: FilterDropdownProps<RecordType>) => {
  const {
    clearFilters,
    close,
    confirm,
    filters,
    selectedKeys,
    setSelectedKeys,
    visible,
    table,
    dataIndex,
    children,
    component,
    componentProps,
  } = props;

  const plugins = pluginStore.getPlugins()['field'];

  const { element } = parsePlugin(plugins, component, {
    ...componentProps,
    onChange: (e) => setSelectedKeys(e.target.value ? [e.target.value] : []),
    value: selectedKeys[0],
  });

  return (
    <div>
      <div style={{ padding: 8 }}>{element}</div>
      <Divider style={{ margin: 0 }} />
      <ButtonActions
        style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}
        actions={[
          {
            children: '重置',
            size: 'small',
            type: 'link',
            disabled: selectedKeys.length === 0,
            onClick: () => {
              setSelectedKeys([]);
              clearFilters!();
            },
          },
          {
            children: '确定',
            size: 'small',
            type: 'primary',
            onClick: async () => {
              confirm({ closeDropdown: true });
            },
          },
        ]}
      />
    </div>
  );
};
