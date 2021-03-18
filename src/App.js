import React, { useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
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
  
  const history = useHistory();
  
  
  useEffect (() => {
    const checkLoggedIn = async () =>{
      let token = localStorage.getItem("auth-token") 
      if(token === null) {
        localStorage.removeItem("auth-token");
        token = null;

      };
      
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
    
    checkLoggedIn ();
  }, []);
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value = {{userData, setUserData}}>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/home" component={HomePage} />  
            <Route path="/medical-videos" component={Medicalvideos} />
            <Route path="/hospitals" component={Hospitals} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
 
export default App;


