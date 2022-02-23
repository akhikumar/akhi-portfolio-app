import React from 'react'
import "./TempIcon.css"
import cross from "../../Assets/Home/cross.png"
// import react from "../../Assets/Home/cross.png"
export default function TempIcon() {
     
    let alertIcon1 = document.getElementById('alertIcon1');
        console.log(alertIcon1)
    let removeCross = (e)=>{
        e.preventDefault();
        console.log("clicked on cross button!!")
        e.target.parentNode.style.display = 'none'

    }

    return (
        <div className="tempIcon1" id="alertIcon1">
         <img src={cross} id="cross" onClick={removeCross} alt="not found!!"/>
         <p><strong>Success!</strong> <span>your data has been scuccessfully sent to server!</span> </p>
        
      </div>
    )
}
