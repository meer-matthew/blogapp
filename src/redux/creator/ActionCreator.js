import { PostActions } from "../actions/PostActions";
import { UserActions } from "../actions/UserActions";

export const ActionCreator = {
  // users
  userLogin: (user) => ({ type: UserActions.USER_LOGIN, payload: { user } }),
  createUser: (user) => ({ type: UserActions.CREATE_USER, payload: { user } }),
  updateUser: (user) => ({ type: UserActions.UPDATE_USER, payload: { user } }),
  getUser: (id) => ({ type: UserActions.GET_USER, payload: { id } }),
  // posts
  createPost: (post) => ({ type: PostActions.CREATE_POST, payload: { post } }),
  showPosts: () => ({ type: PostActions.SHOW_POSTS, payload: {} }),
};
