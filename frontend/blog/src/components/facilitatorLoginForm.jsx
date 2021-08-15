import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import axios from "axios";

class FacilitatorLoginForm extends Form {
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
    console.log("Facilitator Login Submitted");
    axios
      .post("http://localhost:8000/facilitatorlogin/", this.state.data)
      .then((response) => {
        console.log(response);
        const { message, otp } = response.data;
        if (message === "success") {
          console.log("kuch b");
          return this.props.history.push("/facilitator/otp",
            {state: { otp: otp, username: this.state.data.username },
          });
        } else {
          const errors = { ...this.state.errors };
          errors.password = "Check your credentials";
          this.setState({ errors });
        }
      })
      .catch((error) => {
        console.log(error);
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

export default FacilitatorLoginForm;
