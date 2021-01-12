import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Post = (props) => {
  const [checkSelectButton, setCheckSelectButton] = useState(false);
  return (
    <div className="post-container">
      <div
        id="select-button"
        onClick={() => setCheckSelectButton(!checkSelectButton)}
      >
        <div id="button"></div>
        {checkSelectButton && (
          <div id="select-box">
            <p onClick={() => props.openModal(props.post)}>Update</p>
            <p>Delete</p>
          </div>
        )}
      </div>
      <Link to={"/" + props.post._id}>
        <img src={props.post.selectedFile} alt={props.post.title} />

        <p>
          <span>{props.post.title}</span>
          <span id="starting"> - {props.post.starting}</span>
        </p>
        <span id="post-date">
          Create At: {moment(props.post.createAt).fromNow()}
        </span>
      </Link>
    </div>
  );
};

export default Post;
