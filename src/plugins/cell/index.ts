export * from './all';
import { CellBadge, CellHolder, CellIndex, CellSelect, CellTag } from './all';

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
  index: {
    component: CellIndex,
  },
  select: {
    component: CellSelect,
  },
};
