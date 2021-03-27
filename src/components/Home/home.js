import React, {useState} from 'react';
import Select from 'react-select';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./home.css";
import Navbar from "../Navbar/navbar";
import cold from "./pictures/cold.png";
import migraine from "./pictures/migraine.png";
import accupressure from "./pictures/accupressure.png";
import conjunctivitis from "./pictures/conjunctivitis.png";
import diarrhea from "./pictures/diarrhea.png";
import covid from "./pictures/covid.png"


function HomePage() {
    
    const data =[
        {label : "Fever", value:1, category: "cat-1"},
        {label : "Congestion", value:2, category: "cat-2"},
        {label : "Runny-nose", value:3, category: "cat-1"},
        {label : "Sneezing", value:4, category: "cat-2"},
        {label : "Body-pain", value:5, category: "cat-1"},
        {label : "Cough", value:6, category: "cat-2"},
        {label : "Tiredness", value:7, category: "cat-1"},
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
        {label : "Dryness of eyes", value:19, category: "cat-1"},
        {label : "Redness of eyes", value:20, category: "cat-1"},
        {label : "Itching/Irritation/Tearing of eyes", value:21, category: "cat-1"},
        {label : "Redness of eyelids", value:22, category: "cat-1"},
        {label : "Discharge from eyes", value:23, category: "cat-1"},
        {label : "Crusting around the eyelids", value:24, category: "cat-1"},
        {label : "Puffy eyes", value:25, category: "cat-1"},
        {label : "Pain in the eyes", value:26, category: "cat-1"},
        {label : "Loose/Watery stools", value:27, category: "cat-1"},
        {label : "Abdominal cramps", value:28, category: "cat-1"},
        {label : "Frequent bowel movements", value:29, category: "cat-1"},
        {label : "Abdominal pain", value:30, category: "cat-1"},
        {label : "Blood in the stool", value:31, category: "cat-1"},
        {label : "Mucus in the stool", value:32, category: "cat-1"},
        {label : "Bloating", value:33, category: "cat-1"},
        
        
        
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
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton> Common cold </AccordionItemButton>
                            </AccordionItemHeading >
                            <AccordionItemPanel>
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
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>COVID-19 (Coronavirus)</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                <h2>COVID-19 (Coronavirus):</h2>
                                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  
                                Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

                                <br/><br/>The virus is now known as the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
                                The disease it causes is called coronavirus disease 2019 (COVID-19).
                                In March 2020, the World Health Organization (WHO) declared the COVID-19 outbreak a pandemic.

                                <br/><br/><b>Less common symptoms:</b>
                                <br/>[1]aches and pains 
                                <br/>[2]sore throat
                                <br/>[3]diarrhea
                                <br/>[4]conjunctivitis
                                <br/>[5]headache
                                <br/>[6]loss of taste or smell
                                <br/>[7]a rash on skin
                                <br/>[8]discolouration of fingers or toes

                                <br/><br/><b>Serious symptoms:</b>
                                <br/>[1]difficulty breathing or shortness of breath 
                                <br/>[2]chest pain or pressure
                                <br/>[3]loss of speech or movement
                                
                                </p>
                                <img src={covid} />
                                <p>
                                    <h5 className="note">
                                        *Please note that the following remedies are only meant to alleviate mild to moderate symptoms. 
                                        In case of serious symptoms, kindly contact your doctor immediately and maintain social-distancing*
                                    </h5>
                                    <div className="space"/>
                                    <h2>Home Remedies:</h2>
                                    <div className="space"/>
                                    
                                    <h4>Cool It Down:</h4>

                                </p>
                            </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
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

            case ("Redness of eyes,Itching/Irritation/Tearing of eyes,Discharge from eyes"):
                setDisplay(
                <div className="window">
                    <p>
                        <h2>Conjunctivitis (pink eye):</h2>
                        Conjunctivitis, or pink eye, is an irritation or inflammation of the conjunctiva, which covers the white part of the eyeball. 
                        It can be caused by allergies or a bacterial or viral infection. 
                        Conjunctivitis can be extremely contagious and is spread by contact with eye secretions from someone who is infected.Symptoms include redness, itching and tearing of the eyes. 
                        It can also lead to discharge or crusting around the eyes.

                        <br/><br/><b>Other symptoms include: </b>Dryness of eyes, Redness of eyelids, Puffy eyes, Feeling like a foreign body is in the eye(s) or an urge to rub the eye(s),
                        Congestion, Runny nose, or Sneezing.
                    </p>
                    <img src={conjunctivitis} />
                    <p>
                        <h2>Home Remedies:</h2>
                        <div className="space"/>
                        <h4>Use a cool/warm compress:</h4>
                        Pinkeye causes inflammation around the eye that can be irritating and even painful. 
                        Using a cool and damp compress will help reduce inflammation and soothe the eye.
                        <br/><br/>How to use a compress for pinkeye:
                        <br/>[1] soak a clean washcloth or hand towel in warm or cool water
                        <br/>[2] wring out any excess water
                        <br/>[3] place the damp washcloth over the eye and leave there for a few minutes
                        <br/>[4] remove the washcloth from the eye and wash your hands immediately
                        
                        <br/><br/>People should not reuse washcloths before laundering them in hot water as this can spread the infection or reinfect the eye.

                        <div className="space"/>

                        <h4>Damp cloth clean:</h4>
                        People who have bacterial pinkeye might notice a thick discharge, or pus, leaking from the eye that it is affecting. 
                        Pus dries quickly, forming a crust along the edges of the eyelids. 
                        People may have difficulty opening their eye, especially in the morning after the pus has had time to sit and harden overnight. 
                        Use a warm, damp cloth to remove pus from around the eye and lashes.

                        <div className="space"/>

                        <h4>Tea bags:</h4>
                        Placing cooled tea bags on your eyes while they’re closed can be a way to relax and unwind.
                        Some types of tea have anti-inflammatory, soothing properties. Studies have suggested that green tea, chamomile, rooibos, and black tea all have anti-inflammatory properties. 
                        Because of this, using tea bags on your eyes could be an effective way to reduce swelling.
                    </p>
                </div>
                    
                );

                break;

            case ("Loose/Watery stools,Frequent bowel movements,Abdominal pain"):
                setDisplay(
                <div className="window">
                    <p>
                    <h2>Diarrhea:</h2>
                    Diarrhea is characterized by loose, watery stools or a frequent need to have a bowel movement. 
                    It usually lasts a few days and often disappears without any treatment. Diarrhea can be acute or chronic.

                    <br/><br/>Acute diarrhea occurs when the condition lasts for one to two days. 
                    You might experience diarrhea as a result of a viral or bacterial infection. Other times, it could be due to food poisoning. 
                    Acute diarrhea is fairly common.
                    
                    <br/><br/>Chronic diarrhea refers to diarrhea that lasts for at least four weeks. 
                    It’s usually the result of an intestinal disease or disorder, such as celiac disease or Crohn’s disease.
                    </p>
                    <img src={diarrhea} />
                    <p>
                        <h2>Home Remedies:</h2>
                        <div className="space"/>
                        <h4>Rehydrating:</h4>
                        Hydrating the body is essential to recovering from diarrhea.Diarrhea causes a deficit of fluids, including water. 
                        This causes the body to lose electrolytes such as sodium and chloride.To support recovery, it is vital to restore fluids. 
                        Otherwise, a person may become dehydrated. <br/><br/>Drinking water is the first step to rehydrating. 
                        A person can also to create an oral rehydration solution by mixing 1 liter of water with half a teaspoon of salt and 6 teaspoons of sugar. 
                        Consuming sugar and salt with water helps the intestines to absorb fluids more efficiently. 
                        This solution more effectively rehydrates the body after a bout of diarrhea than water alone. 
                        Other drinks can also be beneficial. For example, drinking sports drinks can help rehydrate the body and restore potassium and sodium. 
                        Fruit juices can also help restore potassium.

                        <br/><br/>Avoid drinking anything that will further irritate the digestive tract, such as: caffeinated drinks, alcohol, 
                        carbonated beverages and very hot drinks

                        <div className="space"/>

                        <h4>BRAT diet:</h4>
                        BRAT stands for Bananas, Rice, Applesauce, and Toast. 
                        These foods are all starchy, so they can help bind foods together to make stools firmer. 
                        This may decrease the number of stools a person passes and help ease their diarrhea. 
                        As these foods are bland, they do not contain substances that irritate the stomach, throat, or intestines. 
                        <br/><br/>Therefore, this diet can soothe the tissue irritation resulting from the acids in vomit. 
                        Many of the foods in the BRAT diet are also high in nutrients such as potassium and magnesium and can replace those lost through diarrhea and vomiting.

                        <div className="space"/>

                        <h4>Coconut water:</h4>
                        Coconut water contains high levels of potassium and magnesium. These nutrients help to reduce pain, muscle spasms, and cramps. 
                        Coconut water is also useful for rehydrating and is a better option than most sports drinks as it is also low in calories, sugar, and acidity. 
                        Slowly sipping on up to 2 glasses of coconut water every 4–6 hours could ease upset stomach symptoms.

                        <div className="space"/>

                        <h4>Taking probiotics:</h4>
                        Probiotics are microorganisms that can benefit the digestive system. 
                        They can support the workings of the gut and help fight off infection. 
                        Probiotics are live bacteria and yeasts in some yogurts and other fermented foods.
                        In 2010, researchers conducted a large systematic review of 63 studies on probiotics, with over 8,000 participants. 
                        They found that probiotics significantly shortened the duration of recovery from diarrhea.

                        <br/><br/> Foods that are rich in probiotics are: Yogurt, Buttermilk, Soft and Aged Cheeses, Kimchi.
                    </p>

                </div>

                );

                break;

            case (""):
                setDisplay(
                    <div className="window">
                        
                    </div>

                );

            break;
      
            default:
                setDisplay( <div className="window">kaput</div>);
      
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