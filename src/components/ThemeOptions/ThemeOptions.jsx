import React, { useState, useEffect, useContext } from 'react';
import { FaCog } from 'react-icons/fa';
import OptionsContext from '../../reducers/OptionsContext';

function ThemeOptions() {
  const [active, setActive] = useState(true);
  const options = useContext(OptionsContext);
  console.log(options.optionsState.animation);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, []);

  const toggleOptions = () => {
    setActive(!active);
  };

  return (
    <div className={active ? 'ThemeOptions' : 'ThemeOptions hiden'}>
      <span className="icon" onClick={toggleOptions}>
        <FaCog />
      </span>
      <div className="optionsContent">
        <h4>Page animation {options.optionsState.animation} </h4>
        <select>
          <option>Choose</option>
          <option value={0}>Random</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <h4>Colors</h4>
        <ul>
          <span style={{ backgroundColor: '#00A3E1' }}></span>
          <span style={{ backgroundColor: '#E82A2A' }}></span>
          <span style={{ backgroundColor: '#6ac045' }}></span>
          <span style={{ backgroundColor: '#D1A71D' }}></span>
          <span style={{ backgroundColor: '#FF1493' }}></span>
          <span style={{ backgroundColor: '#5078FF' }}></span>
        </ul>
      </div>
    </div>
  );
}

export default ThemeOptions;
