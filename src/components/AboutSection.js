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
        <p className="aboutParagraph">I've worked as a <span>Full Stack</span> and <span>iOS Developer</span>. My days are spent either making <a href= "https://www.youtube.com/channel/UClkieE3BBB4xXoMvBj7_TRw"><span className="videoLink">videos</span></a> about tech or coding. I love finding new ways to motivate others to code trough the content I create.
I look for a challenge that scares me at first, that type of challenge have helped me grow faster and learn more than
I could ever expect to in such a short time.</p>
      </div>
    </div>
  );
}
