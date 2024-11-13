import type { CellBaseProps } from '../../interfaces';

export interface CellHolderProps<RecordType extends object> extends CellBaseProps<RecordType> {
  placeholder?: React.ReactNode;
}

export const CellHolder = <RecordType extends object>(props: CellHolderProps<RecordType>) => {
  const { value, placeholder = '-' } = props;
  return value ?? placeholder;
};
