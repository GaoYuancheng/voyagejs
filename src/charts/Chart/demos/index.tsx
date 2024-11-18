import { Button, notification, Space } from 'antd';
import { sleep } from 'radash';
import React, { useState } from 'react';
import { Chart, DefaultPluginsType } from 'voyagejs';

const Demo = () => {
  const [params, setParams] = useState({ a: 1 });

  return (
    <Space direction="vertical" style={{ background: '#f6f7f9', padding: 20, display: 'flex' }}>
      <Button onClick={() => setParams({ a: params.a + 1 })}>外部参数变化</Button>
      <Chart<any, DefaultPluginsType>
        title="基础图表"
        params={params}
        remoteData={async (params) => {
          notification.info({
            message: JSON.stringify(params, null, 2),
          });
          await sleep(2000);
          return Promise.resolve([
            { type: '分类一', value: 27 },
            { type: '分类二', value: 25 },
            { type: '分类三', value: 18 },
            { type: '分类四', value: 15 },
            { type: '分类五', value: 10 },
            { type: '其他', value: 5 },
          ]);
        }}
        fields={[
          {
            name: 'name1',
            initialValue: '1',
            fieldType: 'radio.group',
            fieldProps: {
              optionType: 'button',
              options: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
              ],
            },
            style: { marginBottom: 0 },
          },
          {
            name: 'name2',
            initialValue: '1',
            fieldType: 'radio.group',
            fieldProps: {
              optionType: 'button',
              options: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
              ],
            },
            style: { marginBottom: 0 },
          },
        ]}
        type="pie"
        options={{
          angleField: 'value',
          colorField: 'type',
        }}
      />
    </Space>
  );
};

export default Demo;
