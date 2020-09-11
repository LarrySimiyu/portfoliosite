import React from "react";

import ProjectOne from "../images/Screen Shot 2020-09-09 at 3.32.18 PM.png";
import ProjectTwo from "../images/Screen Shot 2020-09-09 at 3.13.11 PM.png";
import ProjectThree from "../images/Screen Shot 2020-09-09 at 3.21.50 PM.png";

import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png";

export default function ProjectsSettings({
  title,
  subtitle,
  id,
  oudiProjectText,
  adventureProjectText,
  rentMeProjectText,
}) {
  return (
    <div className={"sectionOne"}>
      <div className="projects-content" id={id}>
        <div className="titleContainer">
          <h1 className="sectionTitle">{title}</h1>
        </div>
        <p>{subtitle}</p>

        <div className="projectCards">
          <div className="card">
            <img src={ProjectOne} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>{oudiProjectText}</p>

              <a href="https://testflight.apple.com/join/sk6UL4le">
              <img src={GithubLogo} alt="Github Logo" className="githubLogo" />

              </a>
            </div>
          </div>

          <div className="card">
            <img src={ProjectTwo} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>{adventureProjectText}</p>

              <a href="https://github.com/Larrys-Leisurely-Adventure-Game">
                <img src={GithubLogo} alt="Github Logo" className="githubLogo" />
              </a>
            </div>
          </div>
          


          <div className="card">
            <img src={ProjectThree} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>{rentMeProjectText}</p>
              <a href="https://github.com/labs13-property-mgr">
                <img src={GithubLogo} alt="Github Logo"  className="githubLogo"/>
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
