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
    <div className="section-one">
      <h4> {props.SectionOneHeader} </h4>
    </div>
  )
}

const SectionTwo = (props) => {
  return (
    <div className="section-two">
      <h5> {props.SectionTwoHeader} </h5>
    </div>
  )
}

const StectionThree = (props) => {
  return (
    <div className="section-three">
      <h6> {props.SectionThreeHeader} </h6>
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
        SectionOneHeader={"Here's the Header for Section 1"}/>
      <SectionTwo
        SectionTwoHeader={"Here's the Header for Section 2"}/>
      <StectionThree
        SectionThreeHeader={"Here's the Header for Section 3"}/>
    </div>
  )
}

export default WebApp;
