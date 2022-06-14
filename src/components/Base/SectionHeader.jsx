import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';

const SectionHeader = ({ text }) => {
  const { optionsState } = useContext(OptionsContext);

  return (
    <div className={'SectionHeaderWrapper'}>
      <h2
        className={'SectionHeader'}
        style={{ borderColor: optionsState.color }}
      >
        {text}
        <span
          className="left"
          style={{ background: optionsState.color }}
        ></span>
        <span
          className="right"
          style={{ background: optionsState.color }}
        ></span>
      </h2>
    </div>
  );
};

export default SectionHeader;
