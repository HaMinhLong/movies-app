import * as api from "../api/index";
import * as actions from "../types/posts";
// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actions.FETCH_POSTS, payload: data });
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: actions.CREATE_POST, payload: data });
  } catch (error) {
    console.log("Error: " + error.message);
  }
};
