import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to loin on successful register
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios.post("/api/users/login", userData)
    .then(res => {
      // Save token to localStorage - TODO: Store in httpOnly cookie to prevent XSS
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token); // Set token to Auth header
      
      const decoded = jwt_decode(token); // Decode token to get user data
      dispatch(setCurrentUser(decoded))// Set current user
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken"); // Remove token from local storage
  setAuthToken(false); // Remove auth header for future requests

  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}