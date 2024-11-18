import { DualAxes, Pie } from '@antv/g2plot';

type DefaultComponentPropsCtx = {
  data: any[];
  [key: string]: any;
};

export const DEFAULT_CHART_PLUGINS = {
  pie: {
    component: Pie,
    defaultComponentProps: (ctx: DefaultComponentPropsCtx) => {
      const { data, angleField, colorField, ...restOptions } = ctx || {};
      return {
        data: ctx.data || [],
        appendPadding: 10,
        angleField,
        colorField,
        radius: 0.75,
        innerRadius: 0.55,
        meta: {
          value: {},
        },
        legend: {
          position: 'right',
          offsetX: -30,
          itemValue: {
            alignRight: true,
            formatter: (text: string) => {
              const total = data.reduce((acc: number, curr: any) => acc + curr[angleField], 0);
              const target = data.find((item: any) => item[colorField] === text);
              const percentage = ((target[angleField] / total) * 100).toFixed(2);
              return `${target[angleField]}    ${percentage.padStart(5, '000000')}%`;
            },
          },
        },
        label: {
          autoHide: true,
          type: 'inner',
          offset: '-50%',
          style: {
            textAlign: 'center',
          },
          autoRotate: false,
          content: '{value}',
        },
        statistic: {
          title: {
            content: '总数',
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
        },
        ...restOptions,
      };
    },
  },

  dualAxes: {
    component: DualAxes,
    defaultComponentProps: (ctx: DefaultComponentPropsCtx) => {
      const { data = [], ...restOptions } = ctx || {};
      return {
        ...restOptions,
        data: [data, data],
        geometryOptions: [
          {
            geometry: 'column',
            isGroup: true,
            seriesField: 'type',
          },
          {
            geometry: 'line',
            lineStyle: {
              lineWidth: 2,
            },
          },
        ],
      };
    },
  },
};
