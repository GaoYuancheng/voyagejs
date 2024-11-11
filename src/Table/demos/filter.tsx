import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React, { useRef } from 'react';
import { DEFAULT_PLUGINS, Table, TableInstance, type FormProps } from 'voyagejs';
import { recipientName, remoteDataSource, status } from './config';

const TableFilterDemo = () => {
  const ref = useRef<TableInstance>(null);

  const items: FormProps['items'] = [
    // {
    //   name: 'senderName',
    //   label: '发送人',
    //   children: <Input />,
    // },
    {
      name: 'recipientName',
      label: '接收人',
      children: <Input />,
    },
  ];

  return (
    <div>
      <Button
        danger
        onClick={() => {
          ref.current!.table.filter = {};
          ref.current!.table.refresh();
        }}
      >
        清空筛选
      </Button>
      <Table<any, typeof DEFAULT_PLUGINS>
        initialFilters={{
          id: '123',
          recipientName: ['Lily'],
        }}
        columns={[
          {
            key: 'id',
            title: 'ID',
            sorter: true,
            filterField: 'input',
            filterFieldProps: {
              allowClear: true,
              placeholder: '请输入',
            },
          },
          {
            key: 'senderName',
            title: '发送人',
            tooltip: '提示',
            filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            // filterDropdown: (props) => <FilterDropdown {...props} dataIndex="senderName" component="input" />,
            filterField: 'input',
            filterFieldProps: {
              allowClear: true,
              placeholder: '请选择',
            },
          },
          {
            key: 'recipientName',
            title: '接收人',
            filters: recipientName.map((i) => ({ text: i, value: i })),
          },
          {
            key: 'time',
            title: '时间',
            filterField: 'datepicker',
            filterFieldProps: {
              allowClear: true,
              format: 'YYYY-MM-DD',
              placeholder: '请选择',
            },
          },
          {
            key: 'status',
            title: '状态',
            filters: status.map((i) => ({ text: i, value: i })),
          },
          {
            key: 'operator',
            render: (ctx) => {
              return (
                <Button
                  type="text"
                  size="small"
                  onClick={() => {
                    console.log('record', ctx.record);
                    ctx.modal.open({
                      title: '编辑',
                      width: 800,
                      initialValues: ctx.record,
                      items,
                    });
                  }}
                >
                  编辑
                </Button>
              );
            },
          },
        ]}
        remoteDataSource={remoteDataSource}
        ref={ref}
      />
    </div>
  );
};

export default TableFilterDemo;
