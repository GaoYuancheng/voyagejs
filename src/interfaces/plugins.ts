import React from 'react';

export type PluginsType = {
  [key: string]: {
    component: React.ComponentType<any>;
    defaultComponentProps: any;
    defaultFormItemProps?: any;
  };
};

export type PluginPropsType<
  P extends PluginsType,
  CN extends keyof PluginsType,
> = P[CN]['component'] extends React.ComponentType<infer E> ? E : never;

export type PluginType<P extends PluginsType = PluginsType> = {
  [CN in keyof P]: {
    component: CN;
    componentProps: PluginPropsType<P, CN extends string ? CN : never>;
  };
}[keyof P];

// const a: PluginType<DefaultComponentPluginsType> = {
//   component: 'input',
//   componentProps: {
//     allowClear: true,
//     placeholder: 'a'
//   },
// };
