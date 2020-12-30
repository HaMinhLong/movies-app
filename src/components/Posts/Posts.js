import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="posts-container">
      <h1>More TV Shows & Movies</h1>
      <div className="posts-list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
