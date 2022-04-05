import React, { useState } from 'react';
import HeaderContent from './HeaderContent';

const Header = () => {
  const [active, setActive] = useState(false);

  const activeHandler = () => {
    setActive(!active);
  };

  return (
    <>
      <HeaderContent active={active} activeHandler={activeHandler} />
    </>
  );
};

export default Header;
