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
        <Col span={24}>
          <Chart<any, DefaultPluginsType>
            title="基础图表"
            height={600}
            params={params}
            type="bidirectionalBar"
            options={{
              interactions: [{ type: 'active-region' }],
              xField: 'org_name',
              yField: ['本月未及时盘点项目统计', '下月未及时盘点项目统计'],
              tooltip: {
                shared: true,
                showMarkers: false,
              },
              xAxis: {
                label: {
                  formatter: (value: string) => {
                    const maxLabelLength = 10;
                    return value.length > maxLabelLength ? `${value.slice(0, maxLabelLength)}...` : value;
                  },
                },
              },
            }}
            remoteData={async (params) => {
              notification.info({
                message: JSON.stringify(params, null, 2),
              });
              await sleep(2000);
              const data = [
                {
                  org_id: 86901,
                  org_name: '房建组测试项目',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86766,
                  org_name: '基建组测试项目（勿删）',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86719,
                  org_name: '测试直属项目部',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86713,
                  org_name: '测试拌合站2652',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86712,
                  org_name: '测试拌合站6651',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86711,
                  org_name: '测试拌合站8920',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86710,
                  org_name: '测试拌合站6677',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86709,
                  org_name: '测试拌合站7974',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86707,
                  org_name: '测试拌合站6686',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86706,
                  org_name: '测试拌合站4860',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86705,
                  org_name: '测试拌合站8078',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86702,
                  org_name: '测试拌合站6940',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86700,
                  org_name: '测试拌合站6921',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 83204,
                  org_name: '测试拌合站',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 83202,
                  org_name:
                    '居住、商业、商务、中小学、医院、体育场、文化设施项目（光谷国际社区）A、B、E、G、H、I、J、K、地块',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 83194,
                  org_name: '测试通过部门添加人员',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 83192,
                  org_name: 'hkk',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 83190,
                  org_name: '工期测试公司',
                  approv_project_num: 6,
                  impl_approv_project_num: 6,
                },
                {
                  org_id: 8925,
                  org_name: 'bim测试子公司',
                  approv_project_num: 2,
                  impl_approv_project_num: 2,
                },
                {
                  org_id: 8495,
                  org_name: '13214214',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 7711,
                  org_name: '劳务测试公司',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 174,
                  org_name: '自动化测试项目002',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 112,
                  org_name: '接口自建项目7428q',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 132,
                  org_name: '烤鱼公司',
                  approv_project_num: 2,
                  impl_approv_project_num: 2,
                },
                {
                  org_id: 120,
                  org_name: '分公司',
                  approv_project_num: 8,
                  impl_approv_project_num: 9,
                },
                {
                  org_id: 134,
                  org_name: '中台测试',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 32,
                  org_name: 'AI私有化测试',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 86765,
                  org_name: '基础平台项目（新增应用专项）',
                  approv_project_num: 1,
                  impl_approv_project_num: 1,
                },
                {
                  org_id: 14,
                  org_name: '基础平台项目（勿动）',
                  approv_project_num: 1,
                  impl_approv_project_num: 2,
                },
              ].map((item) => {
                const { org_name, approv_project_num, impl_approv_project_num } = item;
                return {
                  org_name,
                  本月未及时盘点项目统计: approv_project_num,
                  下月未及时盘点项目统计: impl_approv_project_num,
                };
              });

              return data;
            }}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default Demo;
