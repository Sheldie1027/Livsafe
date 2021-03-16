import React, {useState} from 'react';
import Select from 'react-select';
import "./home.css";
import Navbar from "../Navbar/navbar";

 function HomePage() {
    const data =[
        {label : "Fever", value:1},
        {label : "Head-ache", value:2},
        {label : "Runny-nose", value:3},
        {label : "Ear-pain", value:4},
        {label : "Body-pain", value:5},
        {label : "Cough", value:6}
    ];
    

    const [Value, getValue] = useState([]);
    
    const Diagnose =(e) => {
        getValue(Array.isArray(e)?e.map(x=>x.label ):[]);
    }
    return(  
        <div className="home-container">
            <div>
                <div>
                    <Navbar/>
                </div >
                <Select isMulti options={data} className="dropdown" onChange={Diagnose} placeholder="Select minimum 3 Symptoms"/>
                <div className="window">
                    <p>Symptoms selected: {Value+""}</p>
                </div>
            </div>
        </div>
     )


}
     
 

 export default HomePage;