import axios from "axios";
import React, { Component } from "react";
import Input from "./common/input";

class Comments extends Component {
  state = {
    data: {
      content: "",
    },
    comments: [],
  };

  componentDidMount = () => {
    axios
      .post("http://localhost:8000/commentpost/", {
        id: this.props.post_id,
      })
      .then((response) => {
        console.log(response);
        const comments = response.data;
        this.setState({ comments });
      });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleAddButton = () => {
    axios
      .post("http://localhost:8000/commentpost/", {
        id: this.props.post_id,
        content: this.state.data.content,
        username: localStorage.getItem("loggedInUser"),
      })
      .then((response) => {
        return window.location.reload();
      });
  };

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <Input
          name="content"
          label="New Comment"
          value={this.state.data["content"]}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddButton} className="btn btn-warning">
          Add Comment
        </button>
        {this.state.comments &&
          this.state.comments.map((comment, index) => (
            <div key={index} className="card" style={{ width: "20rem" }}>
              <div className="card-header">{comment.get_username}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{comment.content}</li>
              </ul>
            </div>
          ))}
      </div>
    );
  }
}

export default Comments;
