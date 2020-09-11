import React from "react";
import EmailIcon from "../images/email-xxl.png"

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div className={"contactSection"}>
      <div className="contact-content" id={id}>
        <h1 className="contactTitle">{title}</h1>
        <p className="contactParagraph">{subtitle}</p>
        <div className="emailContainer">
        <a href="mailto:larry.simiyu@gmail.com" target="_blank" rel="noopener noreferrer" > 
        <img alt="email" src={EmailIcon} className="email"/>
        </a>

        </div>
      
        
      </div>
    </div>
  );
}
