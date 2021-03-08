import React from 'react';
import Logo from './logo';
import './login.css';
function Intro(){
    return(
        <div className='intro'>
            <div className='logo'>
                <Logo/>
            </div>
            <div className='welcome'>
                <h1 style={{fontFamily:'Reggae One'}}>Welcome to Livsafe!!!</h1>
                <h4 style={{fontFamily:'Reggae One'}}>We are devoted to your health and care</h4>
            </div>
            
        </div>
    )
}

export default Intro;