import { Button, Col, Row, Space, notification } from 'antd';
import { sleep } from 'radash';
import React, { useState } from 'react';
import { Chart, DefaultPluginsType } from 'voyagejs';

const Demo = () => {
  const [params, setParams] = useState({ a: 1 });

  return (
    <Space direction="vertical" style={{ background: '#f6f7f9', padding: 20, display: 'flex' }}>
      <Button onClick={() => setParams({ a: params.a + 1 })}>外部参数变化</Button>
      <Row>
        <Col span={12}>
          <Chart<any, DefaultPluginsType>
            title="基础图表"
            params={params}
            type="pie"
            options={{
              angleField: 'value',
              colorField: 'type',
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
            ]}
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
          />
        </Col>

        <Col span={12}>
          <Chart<any, DefaultPluginsType>
            title="基础图表"
            params={params}
            type="dualAxes"
            options={{
              xField: 'time',
              yField: ['value', 'count'],
              slider: {},
              limitInPlot: false,
              padding: [20, 20, 50, 20],
              meta: {
                time: { sync: false },
              },
              yAxis: [
                {
                  title: {
                    text: '数量',
                    position: 'end',
                    autoRotate: false,
                    spacing: -20,
                    rotation: Math.PI / 2,
                  },
                  label: {
                    formatter: (v: number) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                  },
                },
                {
                  title: {
                    text: '百分比',
                    position: 'end',
                    spacing: -26,
                    autoRotate: false,
                    rotation: Math.PI / 2,
                  },
                  label: {
                    formatter: (v: number) => `${v}%`,
                  },
                },
              ],
            }}
            remoteData={async (params) => {
              notification.info({
                message: JSON.stringify(params, null, 2),
              });
              await sleep(2000);

              const uvBillData = [
                { time: '2019-03', value: 350, type: 'uv' },
                { time: '2019-04', value: 900, type: 'uv' },
                { time: '2019-05', value: 300, type: 'uv' },
                { time: '2019-06', value: 450, type: 'uv' },
                { time: '2019-07', value: 470, type: 'uv' },
                { time: '2019-03', value: 220, type: 'bill' },
                { time: '2019-04', value: 300, type: 'bill' },
                { time: '2019-05', value: 250, type: 'bill' },
                { time: '2019-06', value: 220, type: 'bill' },
                { time: '2019-07', value: 362, type: 'bill' },
              ];

              const transformData = [
                { time: '2019-03', count: 800 },
                { time: '2019-04', count: 600 },
                { time: '2019-05', count: 400 },
                { time: '2019-06', count: 380 },
                { time: '2019-07', count: 220 },
              ];
              return Promise.resolve([uvBillData, transformData]);
            }}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default Demo;
