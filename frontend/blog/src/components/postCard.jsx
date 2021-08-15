import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { title, content, get_username, id, anonymous } = props;
  return (
    <div className="card" style={{ width: "50rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <small className="card-text">
          {anonymous ? "Anonymous" : get_username}
        </small>
        <p className="card-text">{content.substring(0, 50)}</p>

        <Link to={`post/${id}`} className="btn btn-outline-primary btn-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
