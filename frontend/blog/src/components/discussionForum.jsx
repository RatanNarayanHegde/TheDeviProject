import React, { Component } from "react";
import PostCard from "./postCard";
import axios from 'axios';

class DiscussionForum extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    axios.get("http://localhost:8000/blogdisplay/",).then((response)=>{
      console.log(response)
      const data = response.data;
      this.setState({data});
    })
    
  };

  render() {
    return (
      <div>
        <h1>Discussion Forum</h1>
        {this.state.data.map((post) => (
          <PostCard
            title={post.title}
            content={post.content}
            get_username={post.get_username}
            id={post.id}
            anonymous={post.anonymous}
            key={post.id}
          />
        ))}
      </div>
    );
  }
}

export default DiscussionForum;
