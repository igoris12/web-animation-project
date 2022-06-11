import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import { HiOutlineUser } from 'react-icons/hi';
const Header = () => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="sectionHeader container">
      <h1 style={{ color: optionsState.color }}>
        About me.
        <span>
          <HiOutlineUser />
        </span>
      </h1>
    </div>
  );
};

export default Header;
