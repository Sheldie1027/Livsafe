import React, {useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import "./home.css";
import Navbar from "../Navbar/navbar";





 const HomePage = () => {
    const data =[
        {Symptom : "Fever", id:1},
        {Symptom : "Head-ache", id:2},
        {Symptom : "Runny-nose", id:3},
        {Symptom : "Ear-pain", id:4},
        {Symptom : "Body-pain", id:5},
        {Symptom : "Cough", id:6}
    ]
    
    const [options] = useState(data);
    
    return(
        <div className="home-container">
            <div>
                <div><Navbar/></div>
                    <div style={{width:"80%", justifyContent:"center", display:"flex"}} className="dropdown">
                        <Multiselect options={options} displayValue="Symptom" />
                        <input type="button" value="Search" className="search" />
                    </div>
            </div>
            
        </div>
     )


}
     
 

 export default HomePage;