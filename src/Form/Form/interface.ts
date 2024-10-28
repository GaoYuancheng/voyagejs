import type { SpinProps } from 'antd';
import type { FormProps as AFormProps } from 'antd/lib/form';
import type { PluginsType } from '../../interfaces';
import type { BaseProps, BaseRootStore } from '../Base';
import type { FormItemProps } from '../FormItem';
import type { FormStore } from './store';

export interface FormProps<Values = any, P extends PluginsType = any>
  extends Omit<AFormProps<Values>, 'form' | keyof BaseRootStore>,
    BaseProps {
  /** 表单实例 */
  form: FormStore<Values, P>;
  /** 表单项 */
  items?: FormItemProps<Values, P>[];
  /** 远程表单值 */
  remoteValues?: () => Promise<Values>;
  /** Spin属性 */
  spinProps?: Omit<SpinProps, 'spinning'>;
}

export type FormOptionProps<P = any> = {
  plugins?: P;
};
