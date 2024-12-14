import { Facet } from '@antv/g2plot';
import type { DefaultComponentPropsCtx } from '../interface';

export default {
  component: Facet,
  defaultComponentProps: (ctx: DefaultComponentPropsCtx) => {
    const { data = [], ...restOptions } = ctx || {};
    return {
      data,
      type: 'mirror',
      transpose: true,
      axes: {},
      ...restOptions,
    };
  },
};
