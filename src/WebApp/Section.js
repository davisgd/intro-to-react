import React from 'react';

const Section = (props) => {
  return(
    <div className="section-container">
      <h4> {props.SectionHeader} </h4>
      <img className="img" src="http://www.robotshop.com/media/files/images2/neato-bv-connected-316-hi.jpg" />
    </div>
  )
}

export default Section;
