// import React from "react";
import React, { useState } from 'react';
import TempIcon from './TempIcon'
import "./Contact.css";
// import load from 'little-loader';


export default function Contact() {
    
 

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Message, setMessage] = useState("")
  
  // let sendMail = () => {
  //   window.Email.send({
  //      SecureToken: "dd8bcce2-aa0f-4f95-9f32-3bb4032cbc31",
  //      To: "akhileshk1999@gmail.com",
  //      From: "akhikumar043@gmail.com",
  //      Subject: "This is the subject",
  //      Body: "And this is the body" + "akhi"
  //   }).then(
  //      message => alert("message sent successfully"))
  //   }
    // sendMail();
  let submit = (e)=>{
    e.preventDefault();
    console.log("good to go!!")
    console.log(Name,Email,Message)

    if(!Name || !Email || !Message){
        alert("Name ,Email and Message Must required!!")
    }
    else{
      
     let Body ='Name: '+Name+'<br>Email: '+Email+'<br>Message: '+Message;
      window.Email.send({
        SecureToken:"dd8bcce2-aa0f-4f95-9f32-3bb4032cbc31",
        To : 'technicalfest50@gmail.com',
        From : 'akhikumar043@gmail.com',
        Subject : "Message form your website by - " + Name.toUpperCase(),
        Body : Body,
        }).then(
          (message) => {  
            //  props.alterFunction();
          //  let s = <TempIcon/>
          alert("Success! your data has been scuccessfully sent to server!")
          window.location.reload()
            console.log("Success!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            // alert("mail sent successfully")
          }
        );
    }
   
  }
   

  return (
    
    <div className="contact-container" id='contact'>
      
      <h2>Contact Me</h2>
      <p>Let's Keep In Touch</p>

      <div className="contact-section">
        <div className="contact-part1">
          <h2>Get in Touch <span id ="emoji1">🤝</span> </h2>

          <div className="contact-social-media-logo">
            <a
              href="https://www.facebook.com/profile.php?id=100006924704822"
              target="_blank"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
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
          <div className="contact-para">
            <p>Send your message</p>
          </div>
          <div className="contact-image">

          </div>
        </div>
        <div className="contact-part2">
          <form  onSubmit={submit}>
            <span>Name</span> <input type="text" name="name" value={Name} onChange={(e)=> setName(e.target.value) } />
            <span>Email</span> <input type="'email'" name="email" value={Email} onChange={(e)=> setEmail(e.target.value) } />
            <span>Message</span> <textarea name="message" value={Message} id="" onChange={(e)=> setMessage(e.target.value) } cols="10" rows="3"></textarea>
            <button type='submit' className="contact-button" >
              Send{" "}
              <span>
                <i class="fas fa-paper-plane"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
