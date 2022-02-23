import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <div className="education-container " id='education'>
      <h2>MY EDUCATION</h2>
      <div className="education-section">
        <div className="education-part1">
          <div className="education-duration">
            <p>July 2014 to June 2015</p>
          </div>
          <div className="education-duration">
            <p>July 2017 to June 2018</p>
          </div>
          <div className="education-duration">
            <p>August 2018 to June 2022</p>
          </div>
          <div className="education-duration">
            <p>July 2018 to June 2021</p>
          </div>
          <div className="education-duration"></div>
        </div>
        <div className="education-part2">
          <div className="points"></div>
          <div className="points"></div>
          <div className="points"></div>
          <div className="points"></div>
        </div>
        <div className="education-part3">
            <div className="education-location">
                <h3>MATRICULATION(10TH) - (CBSE)</h3> 
                <p>DON BOSCO CONVENT SCHOOL, JHANJHARPUR</p>
            </div>
            <div className="education-location">
                 <h3>INTERMEDIATE(12TH) - (CBSE)</h3>
                 <p>KRISHNA PUBLIC SCHOOL, PATNA</p>
            </div>
            <div className="education-location">
            <h3>GRADUATION(B.TECH)</h3>
            <p>GURU NANAK DEV ENGINEERING COLLEGE, LUDHIANA</p>
            </div>
            <div className="education-location">
              <h3>NCC </h3>
                 <p>NO. 4PB AIR SQUADRON NCC LUDHIANA</p>
            </div>
        </div>
      </div>
    </div>
  );
}
