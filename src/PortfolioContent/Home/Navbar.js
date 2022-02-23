import React from 'react'
// import  { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link

//   } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {
   
    // let navbarHambarger = (e)=>{
    //     e.preventDefault();
    //     console.log("clicked on hambarder");
    //     // e.target.parentNode.classList.toggle= ("paragraphClass")
        
    //     if(e.target.parentNode.style.height = "70px"){
 
    //          e.target.parentNode.style.height ="200px"
    //      }
    //     else if(e.target.parentNode.style.height = "200px"){
    //         e.target.parentNode.syle.height = "75px"
    //         e.target.parentNode.style.color = "white"
    //     }
        
    // }

    return (
        <>
        
         <nav>
           <div className="navbar-container " id='navbarid'>
               <div id="logo">
                   <a href="#home">
                   <h3>AKHILESH</h3></a>
               </div>
              <ul>
                  {/* <a href="#"></a> */}
                  {/* <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a> */}
                  {/* <li ><a href='#' id="item1">Home</a></li> */}
                  {/* <Link to='/' id="item1"><li id="item11">Home</li></Link>
                  <Link to='#about' id="item2"><li>AboutMe</li></Link>
                  <Link to='#education' id="item3"><li>Education</li></Link>
                  <Link to='#contact' id="item4"><li>Contact Me</li></Link> */}

                  <a href='#home' id="item1"><li id="item11">Home</li></a>
                  <a href='#about' id="item2"><li>AboutMe</li></a>
                  <a href='#education' id="item3"><li>Education</li></a>
                  <a href='#projects' id="item4"><li>Projects</li></a>
                  <a href='#contact' id="item5"><li>Contact Me</li></a>
                  
                  {/* <li id="item2">AboutMe</li>
                  <li id="item3">Resume</li>
                  <li id="item4">Contact Me</li> */}
                  
                  </ul>
                  {/* <div className="hambarger" onClick={navbarHambarger}>

                  </div> */}

                  </div> 
        </nav>
        

           {/* This code is for scrolling windows navbar change */}
       { window.onscroll = function() {
            let nav = document.querySelector('#navbarid');
            // console.log("&&",nav)
            let  ul1 = document.querySelector('ul');
            // console.log("^^",ul1)
            let  a1 = document.querySelector("#item1");
            // let  li1 = document.querySelector("#item11");
            let  a2 = document.querySelector("#item2");
            let  a3 = document.querySelector("#item3");
            let  a4 = document.querySelector("#item4");
            let  a5 = document.querySelector("#item5");
            // console.log("***",li1)
            let  h31 = document.querySelector("h3");
            // console.log("***+++",h31)
            let logo1 = document.getElementById("logo");
            // console.log("%%%%",logo1)
    
    
            console.log("++",this.scrollY); 
            if(this.scrollY > 80 ){           // if scrolling in y is greater than 80 then this properties work 
                nav.classList.remove ="navbar-container"
                // nav.classList.add="navbar-container1"
                nav.className ="navbar-container1"
                // console.log("!!!!!!!",nav)
                ul1.className = "ul1"
                h31.className = "h31"
                logo1.className = "logo1"

                a1.style.listStyle ="none"
                a1.style.textDecoration ="none"
                a1.style.margin = "10px 25px"
                a1.style.color = "aqua"
                // a1.style.hoverColor ="red"
                // li1.style.setProperty("onmouseover","yellow")


                a2.style.listStyle ="none"
                a2.style.textDecoration ="none"
                a2.style.margin = "10px 25px"
                a2.style.color = "aqua"


                a3.style.listStyle ="none"
                a3.style.textDecoration ="none"
                a3.style.margin = "10px 25px"
                a3.style.color = "aqua"


                a4.style.listStyle ="none"
                a4.style.textDecoration ="none"
                a4.style.margin = "10px 25px"
                a4.style.color = "aqua"

                a5.style.listStyle ="none"
                a5.style.textDecoration ="none"
                a5.style.margin = "10px 25px"
                a5.style.color = "aqua"

                
                // li1.style.listStyle = "none"
                
                
            }
            else{  // else This earlier properties work (some bug in code)
                
                nav.className ="navbar-container"
                // li1.className = "li1"
           
            }
           
            }
        
        }

       
        
        </>
    )
}
