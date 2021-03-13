import React,{ useState, Component, useContext } from "react";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import "./login.css";

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
          Axios.post("http://localhost:4000/app/loginform");
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
          name="username"
          placeholder="Please enter your username" 
          value={this.state.fields.username} 
          onChange={this.handleChange} />
          <div className="errormsg">{this.state.errors.username}</div>
          <label htmlFor="password">password</label>
          <input type="password" 
          id="password" 
          name="password"
          placeholder="Please enter your password" 
          value={this.state.fields.password} 
          onChange={this.handleChange} />
          <div className="errormsg">{this.state.errors.password}</div>
          <input type="submit" className="submit" value="Sign In" />
        </form>
     ); 
    }
  }

export default LoginForm;