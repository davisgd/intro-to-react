import React from 'react';
import ACME_DATA from './ACME_DATA';

const AcmeApp = (props) => {

  const AcmeJumbotron = (props) => {
    return(
      <div>
        <div>
          <h1> { props.title } </h1>
            <div>
              <h3> { props.street }, { props.city }, { props.state }  { props.zip } </h3>
              <h5> { props.phoneNumber } </h5>
            </div>
         </div>
      </div>
    )
  }

  const acmeCustItems = ACME_DATA.customers.map(function(cust, index){
    return(
      <div className="acme-cust-info">
        <h1> { cust.name } </h1>
        <h3> { cust.email } </h3>
        <img className="cust-img" src={ cust.img } />
      </div>
    )
  });

  return(
    <div>
      <div className="jumbotron">
        { AcmeJumbotron }
      </div>

      <div className="acme-container">
        { acmeCustItems }
      </div>
    </div>
  )
}

export default AcmeApp;
