import { applyMiddleware, createStore } from "redux";
import { usersReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
