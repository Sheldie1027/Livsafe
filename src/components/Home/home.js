import React, {useState} from 'react';
import Select from 'react-select';
import "./home.css";
import Navbar from "../Navbar/navbar";
import cold from "./cold.png";


 function HomePage() {
    
    
    const data =[
        {label : "Fever", value:1, category: "cat-1"},
        {label : "Head-ache", value:2, category: "cat-2"},
        {label : "Runny-nose", value:3, category: "cat-1"},
        {label : "Ear-pain", value:4, category: "cat-2"},
        {label : "Body-pain", value:5, category: "cat-1"},
        {label : "Cough", value:6, category: "cat-2"}
    ];
    

    const [Value, getValue] = useState([]);
    
    const Diagnose = e => {
        /*getValue(Array.isArray(e)?e.map(x=>x.label ):[], );*/
        getValue([...new Set(e.map(x => x.label))])

    }

    function Display (props){
        console.log({Value},"here");
        switch(props.value) {
           
            case ("Fever"&&"Ear-pain"&&"Runny-nose") :
      
              return (<div className="window"><p>Common cold: A common viral infection of the nose and throat.In contrast to the flu, a common cold can be caused by many different types of viruses. 
                  The condition is generally harmless and symptoms usually resolve within two weeks.</p>
                  <img src={cold} />
                  <p><h2>Home Remedies:</h2>
                  Warm bath: you can reduce a child’s fever by giving them a warm sponge bath. 
                  Warm baths can also reduce cold and flu symptoms in adults. 
                  Adding Epsom salt and baking soda to the water can reduce body aches. 
                  Adding a few drops of essential oil, such as tea tree, juniper, rosemary, thyme, orange, lavender, or eucalyptus, may also have a soothing effect.</p></div>);
            
            case 'Ear-pain':
      
              return 'malaria';
      
            default:
      
              return 'ka-put';
      
          }

    }
    return(  
        <div className="home-container">
            <div>
                <div>
                    <Navbar/>
                </div >
                <Select isMulti options={data} className="dropdown" onChange={Diagnose} placeholder="Select minimum 3 Symptoms"/>
                <div className="search">
                    <button type="button" onClick={() => Display(Value)}>Search</button>
                </div>
            </div>
        </div> 
        
     )
     


}
     
 

 export default HomePage;