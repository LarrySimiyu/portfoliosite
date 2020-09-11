import React from "react";

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div className={"contactSection"}>
      <div className="contact-content" id={id}>
        <h1 className="contactTitle">{title}</h1>
        <p className="contactParagraph">{subtitle}</p>
      </div>
    </div>
  );
}
