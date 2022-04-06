import React, { useState, useEffect } from 'react';
import HeaderContent from './HeaderContent';

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.innerWidth > 765 && setActive(true);
  }, []);

  window.addEventListener('resize', (e) => {
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
