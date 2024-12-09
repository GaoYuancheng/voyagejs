import { EllipsisOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { sleep } from 'radash';
import React, { Fragment } from 'react';
import { ButtonAction, Dropdown, IconAction, Tree, useModalForm } from 'voyagejs';

import 'antd/lib/style/themes/variable.less';

const Demo = () => {
  const [modalForm, { open, close }] = useModalForm();

  return (
    <Fragment>
      {modalForm}
      <Tree
        style={{ width: 400 }}
        searchProps={{
          placeholder: '请输入',
        }}
        extraRender={() => (
          <ButtonAction
            type="primary"
            onClick={() => {
              open({
                title: '新增',
                width: 600,
                formProps: { labelCol: { style: { width: 120 } } },
                items: [
                  {
                    label: '名称',
                    name: 'title',
                    fieldType: 'input',
                    rules: [{ required: true, message: '请输入名称' }],
                  },
                ],
                onOk: async (e, { values }) => {
                  await sleep(1000);
                  console.log(values);
                  close();
                },
              });
            }}
          >
            新增
          </ButtonAction>
        )}
        operatorRender={(data) => {
          return (
            <Dropdown
              // getPopupContainer={(trigger) => trigger.parentElement!}
              items={[
                {
                  children: '编辑',
                  onClick: async () => {
                    await open({
                      title: '编辑',
                      width: 600,
                      initialValues: data,
                      formProps: { labelCol: { style: { width: 120 } } },
                      items: [
                        {
                          label: '名称',
                          name: 'title',
                          fieldType: 'input',
                          rules: [{ required: true, message: '请输入名称' }],
                        },
                      ],
                      onOk: async (e, { values }) => {
                        await sleep(1000);
                        console.log(values);
                        close();
                      },
                    });
                  },
                },
                {
                  children: '删除',
                  confirm: '确认删除吗?',
                  onClick: async () => {
                    console.log('data', data);
                    await sleep(1000);
                    message.success('删除成功');
                  },
                },
              ]}
            >
              <IconAction icon={EllipsisOutlined} onClick={() => {}} />
            </Dropdown>
          );
        }}
        treeData={[
          {
            key: '1',
            title: '1',
            children: [
              {
                key: '1-1',
                title: '1-1',
              },
              {
                key: '1-2',
                title: '1-2',
              },
            ],
          },
          {
            key: '2',
            title: '2',
            children: [
              {
                key: '2-1',
                title: '2-1',
              },
            ],
          },
        ]}
      />
    </Fragment>
  );
};

export default Demo;
