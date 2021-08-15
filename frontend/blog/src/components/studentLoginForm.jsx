import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import axios from "axios";

class StudentLoginForm extends Form {
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
    console.log(this.state.data.username);
    axios
      .post("http://localhost:8000/studentlogin/", {
        username: this.state.data.username,
        password: this.state.data.password,
      })
      .then((response) => {
        const message = response.data.message;
        if (message === "success") {
          localStorage.setItem("loggedInUser", this.state.data.username);
          localStorage.setItem("isFacilitator", false);
          return this.props.history.replace("/student/home");
        } else {
          const errors = { ...this.state.errors };
          errors.password = "Check your credentials";
          this.setState({ errors });
        }
      });
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

export default StudentLoginForm;
