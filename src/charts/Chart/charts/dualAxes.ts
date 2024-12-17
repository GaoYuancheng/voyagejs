import { DualAxes } from '@antv/g2plot';
import type { DefaultComponentPropsCtx } from '../interface';

export default {
  component: DualAxes,
  defaultComponentProps: (ctx: DefaultComponentPropsCtx) => {
    const { data = [[], []], ...restOptions } = ctx || {};
    return {
      ...restOptions,
      data,
      maxColumnWidth: 50,
      columnStyle: {
        width: 30,
      },
      geometryOptions: [
        {
          geometry: 'column',
          isGroup: true,
          seriesField: 'type',
          maxColumnWidth: 50,
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
};
