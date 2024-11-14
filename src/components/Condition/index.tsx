import React from 'react';

export interface ConditionProps {
  condition: boolean;
}

export const If: React.FC<ConditionProps> = (props) => {
  const { children, condition } = props;

  return condition ? <>{children}</> : null;
};
