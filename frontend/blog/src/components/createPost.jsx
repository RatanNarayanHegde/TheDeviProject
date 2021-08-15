import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import axios from "axios";

class CreatePost extends Form {
  state = {
    data: {
      title: "",
      content: "",
      anonymous: false,
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    content: Joi.string().required().label("Content"),
    anonymous: Joi.boolean(),
  };

  doSubmit = () => {
    axios
      .post("http://localhost:8000/blognewpost/", {
        title: this.state.data.title,
        content: this.state.data.content,
        anonymous: this.state.data.anonymous,
        author: localStorage.getItem("loggedInUser"),
      })
      .then((response) =>{
        console.log(response);
        return this.props.history.push("/discussionForum");
      });
  };

  handleCheckBox = (e) => {
    const data = { ...this.state.data };
    data.anonymous = e.target.checked;
    this.setState({ data });
  };

  render() {
    return (
      <div className="container w-50">
        <h1>Create a new post</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderTextArea("content", "Content")}
          <input
            checked={this.state.data.anonymous}
            onChange={this.handleCheckBox}
            type="checkbox"
            name="anonymous"
            value="anonymous"
            id="anonymous"
          />
          <label className="ml-2" htmlFor="anonymous">
            {" "}
            Post as Anonymous
          </label>
          <br></br>
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CreatePost;
