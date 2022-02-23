import React from 'react'
import Navbar from "../Navbar";
import Profile from "../Profile";
// import TempIcon from "../../ContactMe/TempIcon"

import "./HomeComb.css"
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";
export default function HomeComb() {
    return (
        <>
         <div className="homeComb-container">

         
        <Navbar />
        {/* <TempIcon/> */}
        <Profile />

       
        </div>
        
        </>
    )
}
