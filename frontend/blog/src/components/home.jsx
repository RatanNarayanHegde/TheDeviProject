import React, { Component } from "react";
import { Link } from "react-router-dom";
import hero from "../resources/hero.svg";
import "../home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-center">The Devi Project</h1>
        <div className="home-container h-100 container">
          <div className="row">
            <div className="col">
              <img className="w-100" src={hero} alt="" />
            </div>
            <div className="login col">
              <div className="w-50 text-center student-login card m-2">
                <h4>Student</h4>
                <Link to="/student/login" className="btn btn-primary m-2">
                  LogIn
                </Link>
                <Link to="/student/register" className="btn btn-secondary m-2">
                  Register
                </Link>
              </div>
              <div className="w-50 text-center facilitator-login card m-2">
                <h4>Facilitator</h4>
                <Link to="/facilitator/login" className="btn btn-primary m-2">
                  LogIn
                </Link>
                <p>
                  <small>
                    Want to register yourself as facilitator? Contact the admins
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
