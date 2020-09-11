import React from "react";

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div className={"contactSection"}>
      <div className="contact-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>


  );
}
