import React from "react";

import ProjectOne from "../images/IMG_1415.JPG";
import ProjectTwo from "../images/IMG_1415.JPG";
import ProjectThree from "../images/IMG_1415.JPG";
import ProjectFour from "../images/IMG_1415.JPG";

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
              <a href="https://testflight.apple.com/join/sk6UL4le">GitHub</a>
            </div>
          </div>

          <div className="card">
            <img src={ProjectTwo} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>{adventureProjectText}</p>

              <a href="https://github.com/Larrys-Leisurely-Adventure-Game">Github</a>
            </div>
          </div>

          <div className="card">
            <img src={ProjectThree} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>{rentMeProjectText}</p>
              <a href="https://github.com/labs13-property-mgr">GitHub</a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
