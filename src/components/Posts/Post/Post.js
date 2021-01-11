import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="post-container">
      <Link to={"/" + props.post._id}>
        <img src={props.post.selectedFile} alt={props.post.title} />
      </Link>
      <Link to={"/" + props.post._id}>
        <p>{props.post.title}</p>
      </Link>
    </div>
  );
};

export default Post;
