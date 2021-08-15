import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class FacilitateOtp extends Form {
  state = {
    data: {
      otp: "",
    },
    errors: {},
  };

  schema = {
    otp: Joi.required().label("OTP"),
  };

  doSubmit = () => {
    console.log("OTP Submitted");

    const { otp, username } = this.props.history.location.state.state;
    console.log(username);
    const enteredOtp = this.state.data.otp;
    console.log(otp);
    console.log(enteredOtp);
    if (otp === enteredOtp) {
      this.props.history.push("/facilitator/home");
      localStorage.setItem("loggedInUser", username);
      localStorage.setItem("isFacilitator", true);
    } else {
      const errors = { ...this.state.errors };
      errors.otp = "Wrong OTP";
      this.setState({ errors });
    }
  };

  render() {
    console.log("otp");
    return (
      <div className="container w-50">
        <h1>OTP sent to {this.props.number}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("otp", "OTP")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default FacilitateOtp;
