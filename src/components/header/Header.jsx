import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
  return (
    <header className="header">
      <h2>Igoris Ivanovas</h2>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
      {/* <div className="navigation">navigation here </div> */}
    </header>
  );
};

export default Header;
