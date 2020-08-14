import React from 'react';
import logo from './logo.svg';
import '../src/styles/App.css';
import Navbar from '../src/components/Navbar.js';
import Section from '../src/components/Section.js';

import AboutSection from '../src/components/AboutSection.js';
import ProjectsSection from '../src/components/ProjectsSection.js';
import ContactSection from '../src/components/ContactSection';

 

import dummyText from './SectionOneText.js';
import textTwo from './TextTwo.js';


import aboutText from './AboutText.js';
import projectsText from './ProjectText.js';
import contactText from './ContactText.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <AboutSection
        title="Hello this is my page"
        id="about-section"
        subtitle={aboutText}
      />
      <ProjectsSection
        title="Projects Section"
        id="projects-section"
        subtitle={projectsText}
      />
      <ContactSection
        title="Contact Section"
        id="contact-section"
        subtitle={contactText}
      />
{/* 
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
        /> */}

    </div>
  );
}

export default App;
