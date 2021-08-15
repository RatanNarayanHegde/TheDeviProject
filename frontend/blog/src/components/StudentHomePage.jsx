import React, { Component } from "react";
import DiscussionForum from "./discussionForum";
import ChatBot from "./chatbot";

class StudentHomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <DiscussionForum />
        <ChatBot />
      </div>
    );
  }
}

export default StudentHomePage;
