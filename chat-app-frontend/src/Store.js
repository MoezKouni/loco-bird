import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
