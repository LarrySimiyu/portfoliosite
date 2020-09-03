import React from "react";

import ProjectOne from "../images/IMG_1415.JPG";
import ProjectTwo from "../images/IMG_1415.JPG";
import ProjectThree from "../images/IMG_1415.JPG";
import ProjectFour from "../images/IMG_1415.JPG";
import ProjectFive from "../images/IMG_1415.JPG";

export default function ProjectsSettings({ title, subtitle, id }) {
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
              <p>Project Info</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectTwo} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>Project Info</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectThree} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>Project Info</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectFour} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>Project Info</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectFive} alt="Project" className="projectImage" />
            <div className="container">
              <h4>
                <b>Project Name Here</b>
              </h4>
              <p>Project Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
