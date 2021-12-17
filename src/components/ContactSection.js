import React from "react";

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div className={"contactSection"}>
      <div className="contact-content" id={id}>
        <h1 className="contactTitle">{title}</h1>
        <div className="endContainer">
          <p className="contactParagraph">
            {" "}
            I'm always looking for something challenging to work on.<br></br>
            With that being said if you are interested in collaboration{" "}
            <span>or</span>
            <br></br> hiring me feel free to reach me through my{" "}
            <span>Social Media</span> or <span>Email.</span>
          </p>
        </div>
        <div className="contactLinks">
          <a
            href="mailto:larry.simiyu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            larry.simiyu@gmail.com
          </a>
          <a className="socialLink" href="https://github.com/LarrySimiyu">
            GitHub
          </a>
          <a
            className="socialLink"
            href="https://www.youtube.com/channel/UClkieE3BBB4xXoMvBj7_TRw"
          >
            YouTube
          </a>
          <a className="socialLink" href="https://twitter.com/dummycodes">
            Twitter
          </a>
          <a
            className="socialLink"
            href="https://www.instagram.com/dummycodes/"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
