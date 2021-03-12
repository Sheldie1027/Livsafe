import React, { useState, Component } from "react";
import "./login.css";
import Axios from 'axios';



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
      Axios.post('http://localhost:4000/app/registerform', fields)
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

export default RegisterForm;