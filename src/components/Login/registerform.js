import React,{ useState, Component, useContext } from "react";
import UserContext from "../../context/UserContext";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import ErrorMsg from './errormsg';
import "./login.css";


export default function RegisterForm() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { setUserData } = useContext( UserContext);
  const history = useHistory();
  
  const submitRegistrationForm = async (e) => {
    e.preventDefault();
    try{
      const newUser = { username,email,mobile, password };
      await Axios.post("http://localhost:4000/app/registerform", newUser)
      const loginRes = await Axios.post("http://localhost:4000/app/loginform",{
        username,
        password
      });
      
      setUserData ({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
    }
  
    catch(err){
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
      return (
        <form action="" name="userRegistrationForm" className="form" >
          <label htmlFor="username">username</label>
          <input type="text" 
          id="username" 
          name="username" 
          placeholder="Please enter your username" 
          onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email">email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Please enter your email address" 
          onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="mobile">mobile</label>
          <input 
          type="text" 
          id="mobile" 
          name="mobile" 
          placeholder="Please enter your mobile number" 
          onChange={(e) => setMobile(e.target.value)} />
          <label htmlFor="password"> password</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Please enter your password" 
          onChange={(e) => setPassword(e.target.value)}/>
          {error && <ErrorMsg message = {error} />}
          <button type="submit" className="submit" onClick={submitRegistrationForm}>Sign Up</button>
        </form>
      );
  
};
