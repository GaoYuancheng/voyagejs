import { Dropdown } from '../Dropdown';
import { ButtonAction } from './ButtonAction';
import { IconAction } from './IconAction';
import { TextAction } from './TextAction';

const actionStore = {
  button: ButtonAction,
  text: TextAction,
  icon: IconAction,
  dropdown: Dropdown,
};

export const getAction = (type: keyof typeof actionStore | string) => {
  return actionStore[type as keyof typeof actionStore] || ButtonAction;
};
