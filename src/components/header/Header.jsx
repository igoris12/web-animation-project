import React, { useState } from 'react';
import HeaderContent from './HeaderContent';

const Header = () => {
  const [active, setActive] = useState(false);

  window.addEventListener('resize', (e) => {
    console.log(e.target.innerWidth);
    if (e.target.innerWidth > 765) {
      setActive(true);
    }
  });

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
