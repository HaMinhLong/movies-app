import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updateMovie = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteMovie = (id) => axios.delete(`${url}/${id}`);

export const likeMovie = (id) => axios.patch(`${url}/${id}/likePost`);
export const getPost = (id) => axios.patch(`${url}/${id}`);
