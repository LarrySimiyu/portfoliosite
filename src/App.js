import React from "react";
import logo from "./logo.svg";
import "../src/styles/App.css";
import Navbar from "../src/components/Navbar.js";
import Section from "../src/components/Section.js";

import AboutSection from "../src/components/AboutSection.js";
import ProjectsSection from "../src/components/ProjectsSection.js";
import ContactSection from "../src/components/ContactSection";

import dummyText from "./SectionOneText.js";

import oudi from "./AboutOudi.js";
import rentMeInfo from "./RentMeText.js";
import dataVizualizationText from "./DataVisualization.js";

import aboutText from "./AboutText.js";
import projectsText from "./ProjectText.js";
import contactText from "./ContactText.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AboutSection
        title="Hi, I'm Larry"
        id="about-section"
        subtitle={aboutText}
      />
      <ProjectsSection
        title="Projects"
        id="projects-section"
        subtitle={projectsText}
        oudiProjectText={oudi}
        adventureProjectText={dataVizualizationText}
        rentMeProjectText={rentMeInfo}
      />
      <ContactSection
        title="Contact"
        id="contact-section"
        subtitle={contactText}
      />
    </div>
  );
}

export default App;
