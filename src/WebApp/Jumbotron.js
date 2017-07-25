import React from 'react';

const Jumbotron = (props) => {
  return(
    <div className="jumbotron">
      <div className="jumbotron-header">
        <h3> {props.header} </h3>
      </div>
      <div className="jumbotron-calltoaction">
        <p> {props.callToAction} </p>
      </div>
    </div>
  )
}

export default Jumbotron;
