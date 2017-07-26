import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return(
    <div>
      <ul>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/Webapp"> App </Link> </li>
        <li> <Link to="/ChatApp"> ChatApp </Link> </li>
        <li> <Link to="/AcmeApp"> AcmeApp </Link> </li>
        <li> <Link to="/PlaygroundApp"> PlaygroundApp </Link> </li>
      </ul>
    </div>
  )
}

export default NavigationBar;
