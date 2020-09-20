import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

let initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  errors: null,
};

const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuth: true,
        errors: null,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        errors: payload,
      };
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        errors: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
