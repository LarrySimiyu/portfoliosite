import React from "react";

export default function ProjectsSettings({ title, subtitle, id }) {
  return (
    <div className={"section"}>
      <div className="projects-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
