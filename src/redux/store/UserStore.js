import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import user from "../reducers/UserReducer";
import post from "../reducers/PostReducer";

const rootReducer = combineReducers({
  user: user,
  post: post,
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
