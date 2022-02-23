// import logo from './logo.svg';
import HomeComb from "./PortfolioContent/Home/Home/HomeComb";
import './App.css';
import EndFooter from "./PortfolioContent/Footer/EndFooter";
import About from "./PortfolioContent/AboutMe/About";
import Contact from "./PortfolioContent/ContactMe/Contact";
import Education from "./PortfolioContent/Education/Education";

import Projects from "./PortfolioContent/Projects/Projects";


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// let alertFunction = ()=>{
       
// }
function App() {
  return (
    // <Router>
    // <div className="App">
    //   {/* <Navbar/> */}
    //   <Routes>
    //   <Route exact path="/" element={
    //          (<>
    //           <HomeComb/>
    //           <About/>
    //           <Education/>
    //           <Contact/>
    //           </>)
    //             }></Route>
    //   <Route exact path= "/about" element={
    //         (<>
    //         <Navbar/>
    //        <About/></>)
    //        }></Route>
    //   <Route exact path= "/education" element={
    //         (<><Navbar/>
    //           <Education/></>)
    //         }></Route>
    //   <Route exact path= "/contact" element={
    //     (<><Navbar/>
    //       <Contact/></>)
    //     }></Route>
      
    //   </Routes>
    //   <EndFooter/>

    // </div>
    // </Router>
    <>
    {/* <Navbar/> */}
      
    <HomeComb/>
    <About />
    <Education/>
    <Projects/>
    <Contact />
    <EndFooter/>
    </>
    
  );
}

export default App;
