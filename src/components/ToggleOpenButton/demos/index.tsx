import React from 'react';
import { ToggleOpenButton } from 'voyagejs';

const Demo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ToggleOpenButton
      open={isOpen}
      onClick={(open) => {
        setIsOpen(!open);
      }}
    />
  );
};

export default Demo;
