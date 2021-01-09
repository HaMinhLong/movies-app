import * as actions from "../types/posts";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return action.payload;

    case actions.CREATE_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default postsReducer;
