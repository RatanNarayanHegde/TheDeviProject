import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import axios from 'axios';

class RegistrationForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
      age: "",
      std: "",
      school: "",
      mobileno: "",
    },
    errors: {},
  };
  options = [
    { _id: 1, name: "Army Public School" },
    { _id: 2, name: "Kendriya Vidyalaya" },
    { _id: 3, name: "Punya Murti School" },
  ];

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Student Name"),
    age: Joi.number().required().label("Age"),
    std: Joi.number().min(1).max(12).label("Standard"),
    school: Joi.string().required().label("School"),
    mobileno: Joi.number().required().label("Mobile Number"),
  };
  doSubmit = () => {
    axios.post('http://localhost:8000/studentregister/',this.state.data).then((response) => {
        console.log(response);
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
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Student Name")}
          {this.renderInput("age", "Age", "number")}
          {this.renderInput("std", "Standard", "number")}
          {this.renderSelect("school", "School", this.options)}
          {this.renderInput("mobileno", "Mobile Number", "number")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
