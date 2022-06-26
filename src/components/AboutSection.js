import React from "react";
import Typical from "react-typical";

export default function AboutSection({ title, subtitle, id }) {
  return (
    <div className={"aboutSection"}>
      <div className="about-content" id={id}>
        <div className="headerContent">
          <h1 className="aboutHeader">
            Hi<span>,</span> <br></br>
            <Typical
              wrapper="b"
              loop={Infinity}
              steps={[
                `I'm Larry`,
                2000,
                `I love making videos`,
                1000,
                `I love writing`,
                1000,
                "I love running",
                1000,
                `I love coding`,
                10000,
              ]}
            />
          </h1>
        </div>
        <p className="aboutParagraph">
          I've worked as a <span>Full Stack Web</span> and{" "}
          <span>iOS Developer</span>. My days are spent either making{" "}
          <a href="https://www.youtube.com/channel/UClkieE3BBB4xXoMvBj7_TRw">
            <span className="videoLink">videos</span>
          </a>{" "}
          about tech or coding. I love finding new ways to motivate others to
          code through the content I create. I'm constantly looking for
          challenges that both scare me and excite me.
        </p>
      </div>
    </div>
  );
}
