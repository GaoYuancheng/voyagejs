class PluginStore<T> {
  plugins = {} as any;

  register<Name extends string, Component, ComponentProps>(
    name: Name extends keyof T ? never : Name,
    component: Component,
    defaultComponentProps?: ComponentProps,
  ): PluginStore<T & Record<Name, { component: Component; defaultComponentProps?: ComponentProps }>> {
    this.plugins[name] = {
      component,
      defaultComponentProps,
    };

    return this as PluginStore<T & Record<Name, { component: Component; defaultComponentProps?: ComponentProps }>>;
  }

  registerPlugins<P>(plugins: P): P {
    this.plugins = Object.assign(this.plugins, plugins);
    return this.plugins;
  }

  getPlugins(pluginType: keyof T): T[keyof T];
  getPlugins(): T;
  getPlugins(pluginType?: any): any {
    if (pluginType) {
      return this.plugins[pluginType];
    }
    return this.plugins;
  }

  getPlugin<Name extends keyof T>(name: Name): T[Name] {
    return this.plugins[name];
  }
}

export const pluginStore = new PluginStore();
