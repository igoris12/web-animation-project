import React, { useContext } from 'react'
import OptionsContext from '../../reducers/OptionsContext';


function BlogItem() {
  const { optionsState } = useContext(OptionsContext);
  console.log(optionsState);
  return (
    <div className='blogItem col-12 col-sm-6 col-lg-4'>
      <img src="%" alt="#" />
      <div className='blogItemContent'>
        <span className='secondaryTitle sectionParagraph' style={{color: optionsState.color}}>Web desing</span>
        <h4 cl className="blogTitle sectionSecondaryHeader">Blog title</h4>
        <div className="blogDate sectionParagraph">2000.02.21</div>
      </div>
    </div>
  )
}

export default BlogItem
