import React from 'react';
import logo from './logo.svg';
import '../src/styles/App.css';
import Navbar from '../src/components/Navbar.js';
import Section from '../src/components/Section.js';
import dummyText from './DummyText.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section
          title="Section 1"
          // subtitle={dummyText}
          dark={true}
          id="section1"
        ><div>hello</div></Section>
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />

    </div>
  );
}

export default App;
