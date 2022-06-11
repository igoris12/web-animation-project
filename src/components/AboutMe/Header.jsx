import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import { HiOutlineUser } from 'react-icons/hi';
const Header = () => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="sectionHeader container-fluid">
      <div className="sectionHeaderContainer row">
        <h1 className="col-12" style={{ color: optionsState.color }}>
          About me.
          <span>
            <HiOutlineUser />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
