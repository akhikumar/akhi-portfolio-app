import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-cotainer" id="home">
      <div className="profile-content">
        <div className="social-media-logo">
        <a
              href="https://github.com/akhikumar"
              target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-kumar-a96a01203/" target="_blank">
            <i class="fab fa-linkedin-in"></i>

            </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006924704822"
            target="_blank"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/k.akhi_19_98/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCUvxDJLAygSUn_ut_uHhMgQ"
            target="_blank"
          >
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com/home?lang=en" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="profile-detail-name">
        <div >HELLO EVERYBODY, I AM</div>
        <div id="name"> Akhilesh kumar</div>
        </div>
        <div className="profile-detail-role">
          {" "}
          <h2>
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                2000,
                "Front-End-Developer",
                2000,
                "Back-End-Developer",
                2000,
                "Hand-On-Practice-On-Several-Project",
                2000,
              ]}
            />
          </h2>
        </div>
        <div className="profile-detail-description">
          <p>
            I love to solve competitive coding and also solving problems using Machine Learning and represent Data in
            a meaningful way. Also, I like pushing myself and taking up new
            challenges.
          </p>
        </div>
        <div className="all-button">
          <div className="btn">
          <a href="#contact"><button id="button-primary">Hire Me</button></a>
            
          </div>
          <div className="btn">
          <a href="../../Assets/Home/resume.pdf" download="akhi-resume.pdf"><button id="button-secondary">Get Resume</button></a>
          </div>
           

        </div>

      </div>

      <div className="profile-picture-background">
        <div className="profile-picture">
          
        </div>
      </div>
    </div>
  );
}
