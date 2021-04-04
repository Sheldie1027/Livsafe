import React from 'react';
import Logo from './logo';
import './login.css';
function Intro(){
    return(
        <div className='intro'>
            <div className='logo'>
                <Logo/>
            </div>
            <div >
                <p className='welcome' style={{fontFamily:'Reggae One'}}>Welcome to Livsafe!!!</p>
                <p className='welcome1'style={{fontFamily:'Reggae One'}}>We are devoted to your health and care</p>
            </div>  
        </div>
    )
}

export default Intro;