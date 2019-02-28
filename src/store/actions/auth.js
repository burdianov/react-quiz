import axios from "axios";
import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBV1sV9rf0WUYSdtzVgbX1IMiZ6qJbz234";

    if (isLogin) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBV1sV9rf0WUYSdtzVgbX1IMiZ6qJbz234";
    }

    const response = await axios.post(url, authData);
    const data = response.data;

    const expiryDate = new Date(new Date().getTime() + data.expiresIn * 1000);

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expiryDate", expiryDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiryDate");

  return {
    type: AUTH_LOGOUT
  };
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  };
}
