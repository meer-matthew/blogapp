import { PostActions } from "../actions/PostActions";

const initialState = {
  post: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PostActions.CREATE_POST:
      console.log(action.payload);
      return {
        ...state,
        post: action.payload.post,
      };

    case PostActions.SHOW_POSTS:
      console.log(state);
      return {
        ...state,
        post: action.payload.post,
      };

    default:
      return state;
  }
};

export default reducer;
