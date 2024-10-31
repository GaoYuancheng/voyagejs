import { Collapse, Row, Space } from 'antd';
import { Card } from './Card';

export * from './Card';

export const DEFAULT_CONTAINER_PLUGINS = {
  card: {
    component: Card,
    defaultComponentProps: {},
  },
  collapse: {
    component: Collapse,
    defaultComponentProps: {},
  },
  'collapse.panel': {
    component: Collapse.Panel,
    defaultComponentProps: {},
  },
  space: {
    component: Space,
    defaultComponentProps: {},
  },
  row: {
    component: Row,
    defaultComponentProps: {},
  },
};

export type DefaultContainerPluginsType = typeof DEFAULT_CONTAINER_PLUGINS;
