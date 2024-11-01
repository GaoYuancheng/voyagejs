import React from 'react';

export type PluginType = {
  [key: string]: {
    component: React.ComponentType<any>;
    defaultComponentProps: unknown;
    defaultFormItemProps?: unknown;
  };
};

export type PluginsType = {
  container: PluginType;
  field: PluginType;
  action: PluginType;
};

export type PluginPropsType<
  P extends PluginsType,
  T extends keyof PluginsType,
  CN extends keyof PluginsType[T],
> = P[T][CN]['component'] extends React.ComponentType<infer E> ? E : never;

// export type PluginType<P extends PluginsType = PluginsType> = {
//   [CN in keyof P]: {
//     component: CN;
//     componentProps: PluginPropsType<P, CN extends string ? CN : never>;
//   };
// }[keyof P];
