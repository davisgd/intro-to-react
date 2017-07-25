import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h3> Hello from Home </h3>
    </div>
  )
}

const About = () => {
  return(
    <div>
      <h3> Hello from About </h3>
    </div>
  )
}

const Blog = () => {
  return(
    <div>
      <h3> Hello from Blog </h3>
    </div>
  )
}

const AcmeApp = () => {
  return(
    <div>
      <h3> Hello from AcmeApp! </h3>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/about"> About </Link> </li>
        <li> <Link to="/blog"> Blog </Link> </li>
        <li> <Link to="/AcmeApp"> AcmeApp </Link> </li>
      </ul>
      <Route path="/about" component={ About } />
      <Route path="/blog" component={ Blog } />
      <Route exact path="/" component={ Home } />
      <Route path="/AcmeApp" component={ AcmeApp } />
    </div>
  </Router>
), document.getElementById('root'));
