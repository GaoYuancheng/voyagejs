import { Card, Empty, Spin } from 'antd';
import { isEmpty } from 'radash';
import React, { useEffect, useRef, useState } from 'react';
import { Form, FormItemProps } from '../../form';
import type { PluginsType } from '../../plugins';
import { DEFAULT_CHART_PLUGINS } from './charts';

import './index.less';

const { useForm } = Form;

export interface ChartProps<Values, P extends PluginsType = PluginsType> {
  title: string;
  remoteData: (params?: any) => Promise<any>;
  params: any;
  fields?: FormItemProps[];

  type?: keyof typeof DEFAULT_CHART_PLUGINS;
  options?: any;
}

export const Chart: React.FC<ChartProps<any, any>> = (props) => {
  const { title, remoteData, params, fields, type, options } = props;

  const [form] = useForm();

  const domRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [data, setRemoteData] = useState<any[]>([]);

  const getOptions = (data: any) => {
    if (!type) return {};
    return DEFAULT_CHART_PLUGINS[type].defaultComponentProps({ data, ...options });
  };

  function init(params: any) {
    setLoading(true);
    remoteData(params)
      .then((data) => {
        setRemoteData(data);
        chartRef.current?.update(getOptions(data));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    init({ ...params, ...form.values });
  }, [params]);

  const renderExtra = () => {
    if (!fields?.length) return null;
    return (
      <Form
        layout="inline"
        onValuesChange={(_, values) => {
          init(values);
        }}
        form={form}
        items={[
          {
            container: 'space',
            items: fields.map((field) => ({
              ...field,
              noStyle: true,
              span: null,
            })),
          },
        ]}
      />
    );
  };

  useEffect(() => {
    if (!domRef.current) return;
    if (chartRef.current) return;
    if (!type) return;

    chartRef.current = new DEFAULT_CHART_PLUGINS[type].component(domRef.current, getOptions([]));

    chartRef.current.render(domRef.current);
  }, [domRef.current, type]);

  const renderChildren = () => {
    return (
      <Spin spinning={loading}>
        <Empty description={null} style={{ display: isEmpty(data) ? 'block' : 'none' }} />
        <div ref={domRef} style={{ width: '100%', height: 400, display: isEmpty(data) ? 'none' : 'block' }}></div>
      </Spin>
    );
  };

  return (
    <Card title={title} extra={renderExtra()}>
      {renderChildren()}
    </Card>
  );
};
