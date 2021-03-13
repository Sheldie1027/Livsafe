import React, { useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Axios from "axios";
import Form from './components/Login/form';
import HomePage from './components/Home/home';
import Medicalvideos from './components/Videos/medical-videos';
import Hospitals from './components/Emergency/hospitals';
import UserContext from './context/UserContext';


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect (() => {
    const checkLoggedIn = async () =>{
      let token = localStorage.getItem("auth-token") 
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = ""; 
      }
      const tokenResponse = await Axios.post(
        "http://localhost:4000/app/tokenIsValid",
        null,
        { headers: {"x-auth-token": token }}
      );

      if (tokenResponse.data) {
        const userResponse = await Axios.get("http://localhost:4000/app/", 
        {headers: {"x-auth-token" : token} });

        setUserData({
          token,
          user: userResponse.data,
        });
       
      }
       
    };
    

    checkLoggedIn();
  }, []);
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value = {{userData, setUserData}}>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/home" component={HomePage} />  
            <Route exact path="/medical-videos" component={Medicalvideos} />
            <Route exact path="/hospitals" component={Hospitals} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
 
export default App;


