import { Card as ACard } from 'antd';
import type { CardProps as ACardProps } from 'antd/lib/card';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Form } from '../../../form';

export const Card: React.FC<ACardProps> = observer((props) => {
  const { useFormInstance } = Form;
  const formStore = useFormInstance();

  formStore.enableLoading = false;

  return <ACard {...props} loading={formStore.loading || props.loading} />;
});
