import React from "react";

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div className={"section"}>
      <div className="contact-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>

    // <div>

    //     {/* social media and email links go here.
    //     user can click on a button to open their email */}

    // </div>
  );
}
