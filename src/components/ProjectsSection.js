import React from "react";

import ProjectOne from "../images/Screen Shot 2020-09-09 at 3.32.18 PM.png";
import ProjectTwo from "../images/Screen Shot 2020-09-09 at 3.13.11 PM.png";
import ProjectThree from "../images/Screen Shot 2020-09-09 at 3.21.50 PM.png";

import HandTrack from "../images/Screen Shot 2020-11-23 at 3.08.10 PM.png";

export default function ProjectsSettings({
  title,
  subtitle,
  id,
  oudiProjectText,
  adventureProjectText,
  rentMeProjectText,
  handTrackingText,
}) {
  return (
    <div className={"projectsSection"}>
      <div className="projects-content" id={id}>
        <div className="projectsHeaderContainer">
          <h1 className="projectTitle">{title}</h1>
        </div>

        <div className="projectCards">
          <div className="card">
            <img src={HandTrack} alt="Project" className="projectImage" />
            <div className="container">
              <div className="projectCardHeader">
                <h4 className="projectCardTitle">
                  <b>Machine Learning Hand Tracker</b>
                </h4>
                <a
                  href="https://github.com/LarrySimiyu/handTracking"
                  className="directLink"
                >
                  <h6>GitHub</h6>
                </a>
                <a
                  href="https://www.loom.com/share/7c6e8373180d4e80a543fe16f0dbbd42"
                  className="directLink"
                >
                  <h6>Video</h6>
                </a>
              </div>

              <p>{handTrackingText}</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectThree} alt="Project" className="projectImage" />
            <div className="container">
              <div className="projectCardHeader">
                <h4>
                  <b>Rent-Me</b>
                </h4>

                <a
                  href="https://github.com/labs13-property-mgr"
                  className="directLink"
                >
                  <h6>GitHub</h6>
                </a>
                <a href="https://rentmeapp.netlify.app/" className="directLink">
                  <h6>Live</h6>
                </a>
              </div>
              <p>{rentMeProjectText}</p>
            </div>
          </div>

          <div className="card">
            <img src={ProjectOne} alt="Project" className="projectImage" />
            <div className="container">
              <div className="projectCardHeader">
                <h4 className="projectCardTitle">
                  <b>Oudi.Mobi iOS Beta</b>
                </h4>

                <a>
                  <h6>Private</h6>
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

                <a
                  href="https://github.com/Larrys-Leisurely-Adventure-Game"
                  className="directLink"
                >
                  <h6>GitHub</h6>
                </a>
              </div>
              <p>{adventureProjectText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
