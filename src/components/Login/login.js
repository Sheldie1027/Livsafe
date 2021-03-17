import React, { useState, Component} from "react";
import { useSpring, animated } from "react-spring";
import Intro from './intro';
import "./login.css";
import LoginForm from './loginform';
import RegisterForm from './registerform';


function Login() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, 
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500,  
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2.5px #0e3d14",  
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2.5px #0e3d14"
      : "solid 0px transparent", 
  });
  

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  

  
  return (
    <div className="login-register-container">
      <div className="login-register-wrapper" >
        <div className="nav-buttons">
          <animated.button
            onClick={loginClicked}
            id="loginBtn"
            style={loginBtnProps}
          >
            Login
          </animated.button>
          <animated.button
            onClick={registerClicked}
            id="registerBtn"
            style={registerBtnProps}
          >
            Register
          </animated.button>
        </div>
        <div><Intro/></div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <RegisterForm />
          </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
          <a herf="#">Forgot your password</a>
        </animated.div>
      </div>
    </div>
  );
}

export default Login;
 