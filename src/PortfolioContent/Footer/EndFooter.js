import React from "react";
import "./EndFooter.css";
export default function EndFooter() {
  return (
    <footer>
      <div className="endFooter-container">
        <div className="footer1">
            <div className="footer1-content">

          <h3>About Me</h3>
          <p>
            Do you want to be even more successful? Learn to love learning and
            growth. The more effort you put into improving your skills, the
            better you get.
          </p>
            </div>
        </div>
        <div className="footer2">
          <div className="social-media-footer-logo">
               <h3>Follow Me Here</h3>
               <div className="logo-part1">

            <a
              href="https://github.com/akhikumar"
              target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-kumar-a96a01203/">
            <i class="fab fa-linkedin-in"></i>

            </a>
            <a
              href="https://www.hackerrank.com/akhileshk1999"
              target="_blank"
            >
              <i class="fab fa-hackerrank"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCUvxDJLAygSUn_ut_uHhMgQ"
              target="_blank"
            >
              <i className="fa fa-youtube-square"></i>
            </a>
               </div>
               <div className="logo-part2">

           
            <a href="https://twitter.com/home?lang=en" target="_blank">
              <i className="fa fa-twitter"></i>
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
            <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
               </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
