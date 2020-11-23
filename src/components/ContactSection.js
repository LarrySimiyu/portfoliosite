import React from "react";
import EmailIcon from "../images/email-xxl.png"

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div className={"contactSection"}>
      <div className="contact-content" id={id}>
        <h1 className="contactTitle">{title}</h1>
        {/* <p className="contactParagraph">{subtitle}</p> */}
        
        <div className="contactLinks">
        <a href="mailto:larry.simiyu@gmail.com" target="_blank" rel="noopener noreferrer"  className="socialLink"> 
        larry.simiyu@gmail.com
        </a>
        <a className="socialLink" href="https://github.com/LarrySimiyu">GitHub</a>
        <a className="socialLink" href="https://www.youtube.com/channel/UClkieE3BBB4xXoMvBj7_TRw">YouTube</a>
        <a className="socialLink" href="https://twitter.com/dummycodes">Twitter</a>
        <a className="socialLink" href="https://www.instagram.com/dummycodes/">Instagram</a>
        </div>
      </div>
    </div>
  );
}
