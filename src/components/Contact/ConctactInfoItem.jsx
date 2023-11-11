import React , { useContext } from 'react'
import OptionsContext from "../../reducers/OptionsContext";

function ConctactInfoItem({icno, text}) {
  const { optionsState } = useContext(OptionsContext);

  return (
    <div className='contactInfoItem'>
    <span className='icon' style={{color: optionsState.color}}>{icno}</span>
     <p className='sectionSecondaryHeader'>{text}</p>
    </div>
  )
}

export default ConctactInfoItem
