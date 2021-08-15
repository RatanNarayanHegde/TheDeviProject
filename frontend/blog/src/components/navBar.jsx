import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("isFacilitator", false);
    console.log("Lougout");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Devi
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {localStorage.getItem("loggedInUser") &&
            localStorage.getItem("isFacilitator") ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/allStudents">
                    Student Details
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/allDoctors">
                    Doctor Details
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/allDoctors">
                    Log Out
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/newPost">
                    New Post
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/allDoctors">
                    Log out
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
