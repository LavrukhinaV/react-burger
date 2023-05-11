import { authorize, register, updateToken, logOut } from "../../utils/Auth";
import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";

export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";
export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_REGISTER_FAILED = "SET_REGISTER_FAILED";
export const SET_REGISTER_SUCCESS = "SET_REGISTER_SUCCESS";
export const SET_LOGOUT_REQUEST = "SET_LOGOUT_REQUEST";
export const SET_LOGOUT_SUCCESS = "SET_LOGOUT_SUCCESS";
export const SET_LOGOUT_FAILED = "SET_LOGOUT_FAILED";

export const refreshToken = () => {
  updateToken(getCookie("refreshToken")).then(res => {
    console.log("refreshToken", res)
    let authToken = res.accessToken.split('Bearer ')[1];
    let refreshToken = res.refreshToken;

    setCookie('authToken', authToken);
    setCookie('refreshToken', refreshToken);
  })
  .catch(e => {
    console.log(e)
  })
};

export const signIn = (data) => (dispatch) => {
  dispatch({
    type: SET_USER_REQUEST,
  })

  authorize(data)
  .then(res => {
    let authToken = res.accessToken.split('Bearer ')[1];
    let refreshToken = res.refreshToken;

    setCookie('authToken', authToken);
    setCookie('refreshToken', refreshToken);

    dispatch({
      type: SET_USER_SUCCESS,
      paylod: res,
    })
  })
  .catch((err) => {
    dispatch({
      type: SET_USER_FAILED,
    })
  });
};

export const signUp = (data) => (dispatch) => {
  dispatch({
    type: SET_REGISTER_SUCCESS,
  })

  register(data).then(res => {
    dispatch({
      type: SET_USER_SUCCESS,
      paylod: res,
    })
  })
  .catch((err) => {
    dispatch({
      type: SET_REGISTER_FAILED,
    })
  });
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SET_LOGOUT_REQUEST,
  })

  logOut(getCookie("refreshToken"))
  .then(res => {
    deleteCookie('authToken');
    deleteCookie('refreshToken');
    dispatch({
      type: SET_LOGOUT_SUCCESS,
    })
  })
  .catch((err) => {
    dispatch({
      type: SET_LOGOUT_FAILED,
    })
  });
};
