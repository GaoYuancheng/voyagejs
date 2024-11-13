export * from './all';
import { CellBadge, CellHolder, CellTag } from './all';

export const DEFAULT_CELL_PLUGINS = {
  holder: {
    component: CellHolder,
    defaultComponentProps: {
      placeholder: '-',
    },
  },
  tag: {
    component: CellTag,
  },
  badge: {
    component: CellBadge,
  },
};
