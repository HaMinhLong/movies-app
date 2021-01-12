import * as api from "../api/index";
import * as actions from "../types/posts";
// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actions.FETCH_POSTS, payload: data });
  } catch (error) {
    console.log("Error Get Posts: " + error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: actions.CREATE_POST, payload: data });
  } catch (error) {
    console.log("Error Create Post: " + error.message);
  }
};

export const updateMoviePost = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.updateMovie(id, movie);

    dispatch({ type: actions.UPDATE_MOVIE, payload: data });
  } catch (error) {
    console.log("Error Update Post: " + error.message);
  }
};

export const deleteMoviePost = (id) => async (dispatch) => {
  try {
    await await api.deleteMovie(id);

    dispatch({ type: actions.DELETE_MOVIE, payload: id });
  } catch (error) {
    console.log("Error Delete Post: " + error.message);
  }
};

export const likeMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMovie(id);
    dispatch({ type: actions.LIKE_MOVIE, payload: data });
  } catch (error) {
    console.log("Error Like Post: " + error.message);
  }
};
