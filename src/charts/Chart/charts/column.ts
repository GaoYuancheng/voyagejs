import { Column } from '@antv/g2plot';
import type { DefaultComponentPropsCtx } from '../interface';

export default {
  component: Column,
  defaultComponentProps: (ctx: DefaultComponentPropsCtx) => {
    const { data = [], ...restOptions } = ctx || {};
    return {
      data,
      legend: {
        position: 'top',
      },
      ...restOptions,
    };
  },
};
