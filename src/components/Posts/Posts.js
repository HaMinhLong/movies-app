import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="posts-container">
      <h1>More TV Shows & Movies</h1>
      <Fade left cascade>
        <div className="posts-list">
          {!posts.length ? (
            <p>Loading...</p>
          ) : (
            posts.map((post) => (
              <div key={post._id}>
                <Post post={post} />
              </div>
            ))
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Posts;
