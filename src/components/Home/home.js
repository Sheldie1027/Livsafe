import React, {useState} from 'react';
import Select from 'react-select';
import "./home.css";
import Navbar from "../Navbar/navbar";
import cold from "./cold.png";
import migraine from "./migraine.png";
import accupressure from "./accupressure.png";


function HomePage() {
    
    const data =[
        {label : "Fever", value:1, category: "cat-1"},
        {label : "Congestion", value:2, category: "cat-2"},
        {label : "Runny-nose", value:3, category: "cat-1"},
        {label : "Sneezing", value:4, category: "cat-2"},
        {label : "Body-pain", value:5, category: "cat-1"},
        {label : "Cough", value:6, category: "cat-2"},
        {label : "Throbbing/Frequent headache", value:7, category: "cat-1"},
        {label : "Pain on one side of the head", value:8, category: "cat-1"},
        {label : "Pain in the forehead", value:9, category: "cat-1"},
        {label : "Headache", value:10, category: "cat-1"},
        {label : "Sensitivity to light", value:11, category: "cat-1"},
        {label : "Distorted vision", value:12, category: "cat-1"},
        {label : "Dizziness", value:13, category: "cat-1"},
        {label : "Light-headedness", value:14, category: "cat-1"},
        {label : "Sensitivity to sound", value:15, category: "cat-1"},
        {label : "Nausea", value:16, category: "cat-1"},
        {label : "Vomiting", value:17, category: "cat-1"},
        {label : "Ringing sensation in your ears", value:18, category: "cat-1"},
        {label : "Body-pain", value:19, category: "cat-1"},
    ];
    

    const [Value, getValue] = useState();
    
    const Diagnose = e => {
        /*getValue(Array.isArray(e)?e.map(x=>x.label ):[], );*/
        getValue([...new Set(e.map(x => x.label))])

    }

    let [display, setDisplay] = useState();
    
    function Display (){
        var Symptom=Value.toString();
        switch(Symptom){
            case ("Fever,Runny-nose,Body-pain,Cough"): case ("Fever,Runny-nose,Cough"):
                setDisplay (
                <div className="window">
                    <p>
                        <h2>Common Cold:</h2>
                         A common viral infection of the nose and throat.In contrast to the flu, a common cold can be caused by many different types of viruses. 
                         The condition is generally harmless and symptoms usually resolve within two weeks.
                    </p>
                    <img src={cold} />
                    <p>
                        <h2>Home Remedies:</h2>
                        <div className="space"/>
                        <h4>Warm baths:</h4> You can reduce a child’s fever by giving them a warm sponge bath. 
                        Warm baths can also reduce cold and flu symptoms in adults. 
                        Adding Epsom salt and baking soda to the water can reduce body aches.
                        Adding a few drops of essential oil, such as tea tree, juniper, rosemary, thyme, orange, lavender, or eucalyptus, may also have a soothing effect.
                        
                        <div className="space"/>
                        
                        <h4>Ginger:</h4>A few slices of raw ginger root in boiling water may help soothe a cough or sore throat. 
                        Research suggests that it can also ward off the feelings of nausea that so often accompany influenza.

                        <div className="space"/>

                        <h4>Honey:</h4>Drinking honey in tea with lemon can ease sore throat pain. 
                            Research suggests that honey is an effective cough suppressant, too.

                        <div className="space"/>

                        <h4>Salt water:</h4>Gargling with salt water reduces and loosens mucus, which contains bacteria and allergens.
                         To try this remedy at home, dissolve 1 teaspoon of salt in a full glass of water.
                          Swish it around your mouth and throat. Then spit it out.
                    </p>
                </div>
                );

                break;
            
            case ("Throbbing/Frequent headache,Sensitivity to light,Nausea"):
                setDisplay( 
                <div className="window">
                    <p>
                        <h2>Migraine:</h2>
                        A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head.
                        It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.
                        Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with your daily activities.

                        <br/><br/><b>Other symptoms include: </b>Pain on one side of the head, Pain in the forehead, Headache, Distorted vision, Dizziness, Vomiting, Ringing sensation in your ears. 
                    </p>
                    <img src={migraine} />
                    <p>
                        <h2>Home Remedies:</h2>
                        <div className="space"/>
                        <h4>Cool It Down:</h4>
                        Put an ice pack on your forehead, scalp, or neck to get pain relief.
                        Experts aren't sure exactly why it works, but reducing the flow of blood might be part of it.
                        You can also try a frozen gel pack or a wash cloth that's been rinsed in cold water.

                        <div className="space"/>

                        <h4>A Dark, Quiet Room:</h4>
                        Bright light and loud noises can make your headache worse. 
                        So find a spot away from the action and pull down the shades when you've got a migraine. 
                        It can help speed up your recovery.

                        <div className="space"/>


                        <h4>Mute the Noise:</h4>
                        Migraine can be triggered by just about any of your senses, including your hearing. 
                        Just like lights, loud noise can set off your migraine. Get to a quiet space when it hits. 
                        If you can’t, carry earplugs to block out the surrounding noise on the spot.

                        <div className="space"/>

                        <h4>Acupressure:</h4>
                        <img src={accupressure} className="Accu"/>
                        <p className="text">Acupressure involves the application of pressure to specific parts of the body. 
                        Stimulating specific points of the body in this way is believed to release muscle tension and alleviate pain.
                        One popular pressure point is the LI-4 point in the space between the base of the left thumb and pointer finger.
                        Applying firm but not painful circular pressure to the LI-4 point, using the opposite hand for 5 minutes, may relieve headache pain.</p>

                    </p>
                </div>
                    );

                break;
      
            default:
                setDisplay( <div>kaput</div>);
      
        }
        return display;
    }
    
    return(  
        <div className="home-container">
            <div>
                <div>
                    <Navbar/>
                </div >
                
                <Select 
                isMulti 
                options={data} 
                className="dropdown" 
                onChange={Diagnose} 
                placeholder="Select minimum 3 Symptoms"/>
                
                <div className="search">
                    <button 
                    type="button" 
                    onClick={() => Display(Value)}>
                        
                        Search 
                    
                    </button>
                </div>
                <div >{display}</div>
            </div>
        </div> 
        
     )
     


}
     
 

 export default HomePage;