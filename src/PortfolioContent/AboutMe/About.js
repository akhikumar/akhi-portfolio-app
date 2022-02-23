import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-container" id="about">
      <h2>ABOUT MYSELF</h2>
      <p>Why Choose Me ?</p>

      <div className="about-section">
        <div className="about-part1">

        </div>
        <div className="about-part2">
            <div className="about-para">
          <p>
            I'm a Final Year student pursuing degree in Computer Science and Engineering at
            Guru Nanak Dev Engineering College, Ludhiana. I am always ready to have new experiences, meet
            new people and learn new things. I find the idea of creating value
            for people and impacting the world through my work gratifying.
          </p>

            </div>

          <div className="mySkill">
            <h2>MY SKILL</h2>
            <div className="mySkill-logo">
              <a
                href="https://docs.python.org/3/"
                target="_blank"
              >
                <i class="fab fa-python"></i>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <i class="fab fa-js-square"></i>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                <i class="fab fa-html5"></i>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <i class="fab fa-css3-alt"></i>
              </a>
              <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
                <i class="fab fa-react"></i>
              </a>
              <a href="https://nodejs.org/en/docs/" target="_blank">
                <i class="fab fa-node"></i>
              </a>
              <a href="https://devdocs.io/c/" target="_blank">
                <i class="fab fa-cuttlefish"></i>
              </a>
            </div>
          </div>

          <div className="about-all-button">
            <div className="about-btn">
              <a href="#contact">
                <button id="about-button1">Hire Me</button>
              </a>
            </div>
            <div className="about-btn">
              <a href="../Assets/Home/resume.pdf" download="akhi-resume.pdf">
                <button id="about-button2">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
