import React, { Component } from "react";
import axios from "axios";
import Comments from "./comments";

class Post extends Component {
  state = {
    data: {},
  };

  componentDidMount = () => {
    axios
      .post("http://localhost:8000/postdetail/", {
        id: this.props.match.params.id,
      })
      .then((response) => {
        console.log(response);
        const data = response.data;
        this.setState({ data });
      });
  };

  render() {
    const { id, title, content, get_username, anonymous } = this.state.data;

    return (
      <div className="container w-50">
        <h2>{title}</h2>
        <small>{anonymous ? "anonymous" : get_username}</small>
        <p>{content}</p>
        <Comments post_id={this.props.match.params.id} />
      </div>
    );
  }
}

export default Post;
