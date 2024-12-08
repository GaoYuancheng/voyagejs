import { Card as ACard } from 'antd';
import type { CardProps as ACardProps } from 'antd/lib/card';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Form } from '../../../Form';

export const Card: React.FC<ACardProps> = observer((props) => {
  const { useFormInstance } = Form;
  const formStore = useFormInstance();

  formStore.enableLoading = false;

  return <ACard {...toJS(props)} loading={toJS(formStore.loading || props.loading)} />;
});
