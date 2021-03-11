import React, { useState, Component } from "react";
import { useSpring, animated } from "react-spring";
import Intro from './intro';
import "./login.css";
import Axios from 'axios';


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

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginForm = this.submituserLoginForm.bind(this);
  };

  handleChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    
    this.setState({
      fields
    });

  }

  submituserLoginForm(event) {
    event.preventDefault();
    if (this.validateLogin()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        window.open("/home", "_self")
    }

  }

  validateLogin() {
    
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }
    
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    
    if (typeof fields["password"] !== "undefined") {
      if (fields["password"].length < 6) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }
  
  render() {
    return (
      <form action="" className="form" onClick={this.submituserLoginForm} >
        <label htmlFor="username">username</label>
        <input type="text" 
        id="username" 
        placeholder="Please enter your username" 
        value={this.state.fields.username} 
        onChange={this.handleChange} />
        <div className="errormsg">{this.state.errors.username}</div>
        <label htmlFor="password">password</label>
        <input type="password" 
        id="password" 
        placeholder="Please enter your password" 
        value={this.state.fields.password} 
        onChange={this.handleChange} />
        <div className="errormsg">{this.state.errors.password}</div>
        <input type="submit" className="submit" value="Sign In" />
      </form>
   ); 
  }
}

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };
 
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
  
  handleChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(event) {
    event.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["email"] = "";
        fields["mobile"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        window.open("/", "_self")
    }
    

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }
    
    const emailv = /\S+@\S+\.\S+/;
    if (typeof fields["email"] !== "undefined") {
      if (!emailv.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobile"] !== "undefined") {
      if (!fields["mobile"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobile"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (fields["password"].length < 6) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
      
    this.setState({
      errors: errors
    });   
    Axios.post('http://localhost:4000/app/login', fields)
        .then(response => console.log(response.data));

    return formIsValid;
  }

  render(){
    return (
      <form action="" name="userRegistrationForm" className="form"  onClick={this.submituserRegistrationForm} >
        <label htmlFor="username">username</label>
        <input type="text" 
        id="username" 
        name="username" 
        placeholder="Please enter your username" 
        value={this.state.fields.username} 
        onChange={this.handleChange} />
        <div className="errormsg">{this.state.errors.username}</div>
        <label htmlFor="email">email</label>
        <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Please enter your email address" 
        value={this.state.fields.email} 
        onChange={this.handleChange}/>
        <div className="errormsg">{this.state.errors.email}</div>
        <label htmlFor="mobile">mobile</label>
        <input 
        type="text" 
        id="mobile" 
        name="mobile" 
        placeholder="Please enter your mobile number" 
        value={this.state.fields.mobile} 
        onChange={this.handleChange} />
        <div className="errormsg">{this.state.errors.mobile}</div>
        <label htmlFor="password"> password</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Please enter your password" 
        value={this.state.fields.password} 
        onChange={this.handleChange}/>
        <div className="errormsg">{this.state.errors.password}</div>
        <input type="submit" className="submit" value="Sign Up" />
      </form>
    );
  }
} 

export default Login;
 