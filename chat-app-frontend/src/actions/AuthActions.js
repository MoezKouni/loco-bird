import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import axios from "axios";
import setHeaderToken from "../utils/setHeaderToken";
// REGISTER
export const register = (data) => (dispatch) => {
  axios
    .post("/register", data)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      })
    );
};

// LOAD USER
export const loadUser = () => (dispatch) => {
  setHeaderToken();
  axios
    .get("/login")
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.msg,
      })
    );
};

// LOGIN
export const login = (data) => (dispatch) => {
  axios
    .post("/login", data)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      })
    );
};
