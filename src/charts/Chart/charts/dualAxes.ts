import { DualAxes } from '@antv/g2plot';
import type { DefaultComponentPropsCtx } from '../interface';

export default {
  component: DualAxes,
  defaultComponentProps: (ctx: DefaultComponentPropsCtx) => {
    const { data = [[], []], ...restOptions } = ctx || {};
    return {
      ...restOptions,
      data,
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
};
