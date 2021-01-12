import * as actions from "../types/posts";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return action.payload;

    case actions.CREATE_POST:
      return [...state, action.payload];

    case actions.UPDATE_MOVIE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};

export default postsReducer;
