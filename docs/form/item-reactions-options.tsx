/**
 * title: 数据源联动
 * description: 通过`dependencies`属性和`remoteOptions`属性实现数据源联动
 */
import { sleep } from 'radash';
import React from 'react';
import { DefaultPluginsType, Form } from 'voyagejs';

const { useForm, Item } = Form;

const address = [
  { label: '浙江省', value: '1', children: [{ label: '杭州市', value: '1-1' }] },
  { label: '江苏省', value: '2', children: [{ label: '南京市', value: '2-1' }] },
  { label: '上海市', value: '3', children: [{ label: '上海市', value: '3-1' }] },
];

const Demo = () => {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Item<any, DefaultPluginsType> name="province" label="省" fieldType="select" options={address} />
      <Item<any, DefaultPluginsType>
        name="city"
        label="市"
        fieldType="select"
        dependencies={['province']}
        // 默认给了400ms的防抖，这里设置为0
        remoteOptionsDebounceProps={{ wait: 0 }}
        // dependencies对应值放在remoteOptions的参数中
        remoteOptions={async ([province]) => {
          console.log(province);
          await sleep(2000);
          if (!province) return [];
          const target = address.find((item) => item.value === province);
          return target?.children || [];
        }}
        // 当province值变化时，清空city的值
        reactions={[{ dependencies: ['province'], result: { value: undefined } }]}
      />
    </Form>
  );
};

export default Demo;
