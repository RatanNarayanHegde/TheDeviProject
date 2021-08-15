import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import StudentLoginForm from "./components/studentLoginForm";
import RegistrationForm from "./components/registrationForm";
import FacilitatorLoginForm from "./components/facilitatorLoginForm";
import FacilitatorHome from "./components/facilitatorHome";
import StudentHomePage from "./components/StudentHomePage";
import StudentDetails from "./components/StudentDetail";
import FacilitateOtp from "./components/facilitateOtp";
import NavBar from "./components/navBar";
import Home from "./components/home";
import DiscussionForum from "./components/discussionForum";
import CreatePost from "./components/createPost";
import DoctorDetail from "./components/DoctorDetail";
import Post from "./components/post";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar className="mb-2" />
        <main className="container">
          <Switch>
            <Route
              path="/student/register"
              component={RegistrationForm}
            ></Route>
            <Route path="/discussionForum" component={DiscussionForum}></Route>
            <Route path="/student/login" component={StudentLoginForm}></Route>
            <Route path="/student/home" component={StudentHomePage}></Route>
            <Route path="/allStudents" component={StudentDetails}></Route>
            <Route path="/allDoctors" component={DoctorDetail}></Route>
            <Route path="/newPost" component={CreatePost}></Route>
            <Route path="/post/:id" component={Post}></Route>
            <Route path="/facilitator/otp" component={FacilitateOtp}></Route>
            <Route
              path="/facilitator/login"
              component={FacilitatorLoginForm}
            ></Route>
            <Route path="/facilitator/home" component={FacilitatorHome}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect from="/" exact to="/home"></Redirect>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
