import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './styles.css';

import NavigationBar from './components/NavigationBar';
import App from './WebApp/App';
import ChatApp from './Chatter/ChatApp';
import AcmeApp from './Acme/AcmeApp';
import PlaygroundApp from './playground/PlaygroundApp';


// Our router should navigate to:
// - Home
// - ChatApp
// - NumbersMap
// - WebApp

const Home = () => {
  return(
    <div>
      <h3> Hello from Home </h3>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <div className="navigation-bar-container">
      <NavigationBar />
      <Route exact path="/" component={ Home } />
      <Route path="/WebApp" component={ App } />
      <Route path="/PlaygroundApp" component={ PlaygroundApp } />
      <Route path="/ChatApp" component={ ChatApp } />
      <Route path="/AcmeApp" component={ AcmeApp } />
    </div>
  </Router>
), document.getElementById('root'));
