import { authorize, register, updateToken, logOut, getUser, updateUser } from "../../utils/Auth";
import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";

export const SET_REGISTER_SUCCESS = "SET_REGISTER_SUCCESS";
export const SET_REGISTER_FAILED = "SET_REGISTER_FAILED";

export const SET_LOGOUT_REQUEST = "SET_LOGOUT_REQUEST";
export const SET_LOGOUT_SUCCESS = "SET_LOGOUT_SUCCESS";
export const SET_LOGOUT_FAILED = "SET_LOGOUT_FAILED";

export const refreshToken = () => dispatch => {
  updateToken(getCookie("refreshToken")).then(res => {
    let authToken = res.accessToken.split('Bearer ')[1];
    let refreshToken = res.refreshToken;

    setCookie('authToken', authToken);
    setCookie('refreshToken', refreshToken);
    dispatch(getUserData())
  })
  .catch(e => {
    dispatch({
      type: SET_USER_FAILED,
    })
  })
};

export const getUserData = () => (dispatch) => {
  dispatch({
    type: SET_USER_REQUEST,
  })
  getUser(getCookie("authToken"))
  .then(res => {
    dispatch({
      type: SET_USER_SUCCESS,
      paylod: res,
    })
  })
  .catch((err) => {
    if (err === "jwt expired") {
      dispatch(refreshToken())
    } else {
      dispatch({
        type: SET_USER_FAILED,
      })
    }
  });
}

export const updateUserData = (data) => (dispatch) => {
  dispatch({
    type: SET_USER_REQUEST,
  })
  updateUser(getCookie("authToken"), data)
  .then(res => {
    dispatch({
      type: SET_USER_SUCCESS,
      paylod: res,
    })
  })
  .catch((err) => {
    if (err === "jwt expired") {
      dispatch(refreshToken())
    } else {
      dispatch({
        type: SET_USER_FAILED,
      })
    }
  });
}

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
  register(data).then(res => {
    dispatch({
      type: SET_REGISTER_SUCCESS,
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
    });
    
  })
  .catch((err) => {
    dispatch({
      type: SET_LOGOUT_FAILED,
    })
  })
};
