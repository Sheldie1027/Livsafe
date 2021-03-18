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
          <h2 >How to perfrom CPR!!</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=hizBdM1Ob68' controls="true"/>
        </div>
        <div className="flexbox-item flexbox2">
          <h2>How to help a Choking Adult or Child!!</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=QtqLAS5rgGQ' controls="true"/>
        </div>
        <div className="flexbox-item flexbox3">
          <h2>How to treat a Burn!!</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=O1kiguGUt3o' controls="true"/>
        </div>
        <div className="flexbox-item flexbox4">
          <h2>Symptoms and First Aid for Heart Attack!!</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=5x0fVTwsrrQ' controls="true"/>
        </div>
        <div className="flexbox-item flexbox5">
          <h2>What to do in case of Seizure!!</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=jJWfHHqfSbk' controls="true"/>
        </div>
        <div className="flexbox-item flexbox6">
          <h2>How To Treat A Fracture & Fracture Types!!</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=2v8vlXgGXwE' controls="true"/>
        </div>
      </div>
    </div>
  );
}
 
export default Medicalvideos;   