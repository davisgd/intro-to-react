import React from 'react';
import NavBar from './NavBar';
import Section from './Section';
import Jumbotron from './Jumbotron';

const App = () => {
  return (
    <div className="app-container">
      <NavBar navLinks={["Home", "About", "Contact", "Blog"]} />
      <Jumbotron
        header={"Some Neato Jumbotron Header Message!"}
        callToAction={"I bilded dis App wit React :)"} />
      <Section
        SectionHeader={"Here's the Header for Section!"} />
      <Section
        SectionHeader={"Here's the Header for Section!"} />
    </div>
  )
}

export default App;
