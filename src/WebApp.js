import React from 'react';

const NavBar = (props) => {
  return(
    <nav className="nav">
      <ul className="nav-item-container">
        {
          props.navLinks.map(function(item, index){
            return <li key={index}> {item} </li>
          })
        }
      </ul>
    </nav>
  )
}

const Jumbotron = (props) => {
  return(
    <div className="jumbotron">
      <h3> {props.header} </h3>
      <p> {props.callToAction} </p>
    </div>
  )
}

const SectionOne = (props) => {
  return(
    <div className="SectionOne">
      <h4> {props.header} </h4>
    </div>
  )
}

const SectionTwo = (props) => {
  return (
    <div className="SectionTwo">
      <h5> {props.header} </h5>
    </div>
  )
}

const StectionThree = (props) => {
  return (
    <div className="StectionThree">
      <h6> {props.header} </h6>
    </div>
  )
}

const WebApp = () => {
  return (
    <div className="app-container">
      <NavBar navLinks={["Home", "About", "Contact", "Blog"]} />
      <Jumbotron
        header={"Some Neato Jumbotron Header Message!"}
        callToAction={"I bilded dis App wit React :)"}/>
      <SectionOne
        header={"Here's the Header for Section 1"}/>
      <SectionTwo
        header={"Here's the Header for Section 2"}/>
      <StectionThree
        header={"Here's the Header for Section 3"}/>
    </div>
  )
}

export default WebApp;
