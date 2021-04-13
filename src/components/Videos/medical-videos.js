import React from 'react';
import ReactPlayer from "react-player";
import "./medical-videos.css";
import Navbar from "../Navbar/navbar";

 
function Medicalvideos() {
  
  return (
    <div className="page">
      <div><Navbar/></div>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox1">
          <span className="VT">How to perform CPR!!</span>
          <ReactPlayer url='https://www.youtube.com/watch?v=hizBdM1Ob68' controls="true" height="88%" width="100%"/>
        </div>
        <div className="flexbox-item flexbox2">
          <span className="VT">How to help a Choking Adult or Child!!</span>
          <ReactPlayer url='https://www.youtube.com/watch?v=QtqLAS5rgGQ' controls="true" height="88%" width="100%"/>
        </div>
        <div className="flexbox-item flexbox3">
          <span className="VT">How to treat a Burn!!</span>
          <ReactPlayer url='https://www.youtube.com/watch?v=O1kiguGUt3o' controls="true" height="88%" width="100%"/>
        </div>
        <div className="flexbox-item flexbox4">
          <span className="VT">Symptoms and First Aid for Heart Attack!!</span>
          <ReactPlayer url='https://www.youtube.com/watch?v=5x0fVTwsrrQ' controls="true" height="88%" width="100%"/>
        </div>
        <div className="flexbox-item flexbox5">
          <span className="VT">What to do in case of Seizure!!</span>
          <ReactPlayer url='https://www.youtube.com/watch?v=jJWfHHqfSbk' controls="true" height="88%" width="100%"/>
        </div>
        <div className="flexbox-item flexbox6">
          <span className="VT">How To Treat A Fracture & Fracture Types!!</span>
          <ReactPlayer url='https://www.youtube.com/watch?v=2v8vlXgGXwE' controls="true" height="88%" width="100%"/>
        </div>
      </div>
    </div>
  );
}
 
export default Medicalvideos;   