import { Pie } from '@antv/g2plot';
import { DefaultComponentPropsCtx } from '../interface';

export default {
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
      autoFit: true,
      meta: {
        value: {},
      },
      legend: {
        position: 'right',
        offsetX: 0,
        flipPage: false,
        itemWidth: 300,
        itemName: {
          style: { width: 100 },
        },
        itemValue: {
          formatter: (text: string) => {
            const total = data.reduce((acc: number, curr: any) => acc + curr[angleField], 0);
            const target = data.find((item: any) => item[colorField] === text);
            const percentage = ((target[angleField] / total) * 100).toFixed(2);
            return `${target[angleField]}  ${percentage}%`;
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
};
