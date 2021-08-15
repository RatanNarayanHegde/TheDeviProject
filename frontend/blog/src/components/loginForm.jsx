import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import axios from 'axios';

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    axios.post('http://localhost:8000/studentlogin',{data : {
      'username' : this.state.username,
      'password' : this.state.password
    }}).then(function(response){
      console.log(response);
    })
  };

  render() {
    return (
      <div className="container w-50">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("LogIn")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
