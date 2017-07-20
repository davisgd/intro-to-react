import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import WebApp from './WebApp';
import MappingAndFiltering from './MappingAndFiltering';
import data from './data';

ReactDOM.render(
  <MappingAndFiltering
    title={"Mappy Times!"}
    allTheData={data}
  />,
  document.getElementById('root'))
