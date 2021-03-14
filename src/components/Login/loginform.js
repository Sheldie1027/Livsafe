import React,{ useState, Component, useContext } from "react";
import UserContext from "../../context/UserContext";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import "./login.css";


    
export default function LoginForm(){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
      
  const { setUserData } = useContext( UserContext);
  const history = useHistory();

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const loginUser = { username, password };
    const loginRes = await Axios.post("http://localhost:4000/app/loginform", loginUser);

    setUserData ({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });

    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/home");
  };

   
  return (
        <form className="form" onClick={submitLoginForm}>
          <label htmlFor="username">username</label>
          <input type="text" 
          id="username" 
          name="username"
          placeholder="Please enter your username"
          onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="password">password</label>
          <input type="password" 
          id="password" 
          name="password"
          placeholder="Please enter your password"
          onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="submit" value="Sign In" />
        </form>
     ); 
    
};
