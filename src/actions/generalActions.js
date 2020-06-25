import * as actionTypes from './actionTypes';
import axios from 'axios';

/* authentification USER*/
// Check token & load client
export const loadUser = (email, password) => (dispatch, getState) => {
  // User loading
  dispatch({ type: actionTypes.USER_LOADING });
  // Request body
  const body = JSON.stringify(email, password);
  axios
    .post('http://localhost:3000/api/auth/profile', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err)
    });
};

// Register User (creation)
export const register = (lastname, firstname, sexe, age, height, weight, sport, smoker, glasses, cardiac_disease, phone, email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify(lastname, firstname, sexe, age, height, weight, sport, smoker, glasses, cardiac_disease, phone, email, password);
  axios
    .post('http://localhost:3000/api/auth/signup', body, config)
    .then(res =>
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err)
    });
};

// Login User
export const login = (email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify(email, password);
  axios
    .post('http://localhost:3000/api/auth/login', body, config)
    .then(res =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data
      })

    )
    .catch(err => {
      console.log(err)
    });
};

// Logout User
export const logout = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const {token} = getState().auth;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: "Bearer " + token

    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};