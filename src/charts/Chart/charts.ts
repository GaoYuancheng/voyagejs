import { Pie } from '@antv/g2plot';

export const DEFAULT_CHART_PLUGINS = {
  pie: {
    component: Pie,
    defaultComponentProps: (ctx: any) => {
      const { data, angleField, colorField } = ctx || {};
      return {
        data: ctx.data || [],
        appendPadding: 10,
        angleField,
        colorField,
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {},
        },
        legend: {
          position: 'right',
          itemValue: {
            alignRight: true,
            formatter: (text: string) => {
              const total = data.reduce((acc: number, curr: any) => acc + curr[angleField], 0);
              const target = data.find((item: any) => item[colorField] === text);
              const percentage = ((target[angleField] / total) * 100).toFixed(2);
              return `${target[angleField]}        ${percentage.padStart(5, '000000')}%`;
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
      };
    },
  },
};
