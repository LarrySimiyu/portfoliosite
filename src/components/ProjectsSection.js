import React from "react";

import ProjectOne from "../images/Screen Shot 2020-09-09 at 3.32.18 PM.png";
import ProjectTwo from "../images/Screen Shot 2020-09-09 at 3.13.11 PM.png";
import ProjectThree from "../images/Screen Shot 2020-09-09 at 3.21.50 PM.png";

import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png";
import Arrow from "../images/right-arrow.png";

export default function ProjectsSettings({
  title,
  subtitle,
  id,
  oudiProjectText,
  adventureProjectText,
  rentMeProjectText,
}) {
  return (
    <div className={"projectsSection"}>
      <div className="projects-content" id={id}>
        <div className="projectsHeaderContainer">
          <h1 className="projectTitle">{title}</h1>
        </div>

        <p className="projectParagraph">
          Here are a few projects I've worked on in the past.
        </p>

        <div className="projectCards">
          <div className="card">
            <img src={ProjectOne} alt="Project" className="projectImage" />
            <div className="container">
              <div className="projectCardHeader">
                <h4 className="projectCardTitle">
                  <b>Oudi.Mobi iOS Beta</b>
                </h4>
                <a href="https://testflight.apple.com/join/sk6UL4le">
                  <img src={Arrow} alt="Github Logo" className="githubLogo" />
                </a>
              </div>

              <p>{oudiProjectText}</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectTwo} alt="Project" className="projectImage" />
            <div className="container">
              <div className="projectCardHeader">
                <h4>
                  <b>Data Vizualization Game</b>
                </h4>

                <a href="https://github.com/Larrys-Leisurely-Adventure-Game">
                  <img src={Arrow} alt="Github Logo" className="githubLogo" />
                </a>
              </div>
              <p>{adventureProjectText}</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectThree} alt="Project" className="projectImage" />
            <div className="container">
              <div className="projectCardHeader">
                <h4>
                  <b>Rent-Me</b>
                </h4>

                <a href="https://github.com/labs13-property-mgr">
                  <img src={Arrow} alt="Github Logo" className="githubLogo" />
                </a>
              </div>
              <p>{rentMeProjectText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
