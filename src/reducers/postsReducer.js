import * as actions from "../types/posts";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return action.payload;

    case actions.FETCH_POST:
      return action.payload;

    case actions.CREATE_POST:
      return [...state, action.payload];

    case actions.UPDATE_MOVIE:
    case actions.LIKE_MOVIE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actions.DELETE_MOVIE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};

export default postsReducer;
