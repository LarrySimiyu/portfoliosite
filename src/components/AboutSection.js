import React from "react";

import Profile from '../images/19D919AF-D041-4953-86A9-5D751857FEBA.JPG'

export default function AboutSection({ title, subtitle, id }) {
  return (
    <div className={"aboutSection"}>
      <div className="about-content" id={id}>
        <div className = "headerContent">
        {/* <h1 className="aboutHeader">{title}</h1> */}
        <h1 className="aboutHeader">Hi<span>,</span> <br></br> I'm Larry</h1>
        {/* <div className="profileContainer">
        <img src={Profile} alt="Profile" className="profilePhoto"/>
        </div> */}
        </div>
        <p className="aboutParagraph">{subtitle}</p>
      </div>
    </div>
  );
}
