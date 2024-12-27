import type { CellBaseProps } from '../../interfaces';

export interface CellIndexProps<RecordType extends object> extends CellBaseProps<RecordType> {
  placeholder?: React.ReactNode;
}

export const CellIndex = <RecordType extends object>(props: CellIndexProps<RecordType>) => {
  const { value, placeholder = '-', table, index } = props;

  const { pagination } = table || {};

  if (pagination === false) return index + 1;

  if (!pagination) return placeholder;

  const { current, pageSize } = pagination;

  return (current! - 1) * pageSize! + index + 1;
};
