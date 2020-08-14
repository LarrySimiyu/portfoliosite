import React from "react";

export default function AboutSection({ title, subtitle, id }) {
  return (
    <div className={"section"}>
      <div className="about-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
