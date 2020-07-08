import React from 'react';
import logo from './logo.svg';
import '../src/styles/App.css';
import Navbar from '../src/components/Navbar.js';
import Section from '../src/components/Section.js';

import dummyText from './SectionOneText.js';
import textTwo from './TextTwo.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section
          title="Section 1"
          // subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={textTwo}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
    </div>
  );
}

export default App;
