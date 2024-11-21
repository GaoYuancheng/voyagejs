import { sleep } from 'radash';
import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm, Item } = Form;

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Item<any, DefaultPluginsType> name="name" label="姓名" fieldType="input" />
      <Item<any, DefaultPluginsType> name="age" label="年龄" fieldType="input" />
      <Item<any, DefaultPluginsType>
        name="sex"
        label="性别"
        fieldType="select"
        remoteOptions={async () => {
          await sleep(2000);
          return [
            { label: '男', value: '1' },
            { label: '女', value: '2' },
          ];
        }}
      />
      <Item<any, DefaultPluginsType>
        name="address"
        label="地址"
        fieldType="treeselect"
        optionsPropName="treeData"
        remoteOptions={async () => {
          await sleep(2000);
          return [
            {
              label: '北京市',
              value: '1',
              children: [
                { label: '海淀区', value: '1-1' },
                { label: '朝阳区', value: '1-2' },
              ],
            },
            {
              label: '上海市',
              value: '2',
              children: [
                { label: '浦东新区', value: '2-1' },
                { label: '徐汇区', value: '2-2' },
              ],
            },
          ];
        }}
      />
    </Form>
  );
};

export default Demo;
