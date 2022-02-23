import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>MY LATEST PROJECTS</h2>
      <p>
        Learning the theory is good, but applying your knowledge on a project is
        AWESOME!!
      </p>
      <div className="projects-section">
        <div className="projects-part1">
          <div className="projects-subpart1">
            <div className="project1-img"></div>
            <h2>Post Man Api Call</h2>
            <a href="https://github.com/akhikumar/postman-api-fetching" target="_blank"><h3>Show Code</h3> </a>
            
            <p>Ajax and fetch-api.js</p>
          </div>
          <div className="projects-subpart1">
            <div className="project2-img"></div>
            <h2>Todos List</h2>
            <a href="https://github.com/akhikumar/iNote" target="_blank"><h3>Show Code</h3></a>
            
            <p>Using JavaScript</p>
          </div>
          <div className="projects-subpart1">
            <div className="project3-img"></div>
            <h2>Virtual AI Calculator</h2>
             <a href="https://github.com/akhikumar/Virtual-AI-Calculator"  target="_blank"><h3>Show Code</h3></a>
            <p>Using HandTracking Modules , OpenCV</p>
          </div>
        </div>

        <div className="projects-part2">
          <div className="projects-subpart2">
            <div className="project4-img"></div>
            <h2>Virtual AI Keyboard</h2>
            <a href="https://github.com/akhikumar/Virtual-AI-Keyboard" target="_blank"><h3>Show Code</h3></a> 
            <p>Using HandTracking Modules</p>
          </div>
          <div className="projects-subpart2">
            <div className="project5-img"></div>
            <h2>Virtual Finger Counting</h2>
            <a href="https://github.com/akhikumar/Virtual-Finger-Counting" target="_blank"><h3>Show Code</h3></a>
            
            
            <p>Using HandTracking Modules</p>
          </div>
          <div className="projects-subpart2">
            <div className="project6-img"></div>
            <h2>Attendence And Mask Analysis System</h2>
            <a href="https://github.com/akhikumar/Attendence-and-mask-analysis-system/tree/master" target="_blank"><h3>Show Code</h3></a>
            
            <p>Using keras API ,OpenCV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
