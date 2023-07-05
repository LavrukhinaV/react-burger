import { authorize, register, updateToken, logOut, getUser, updateUser } from "../../utils/Auth";
import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";
import { TAuthData, TFullUserData } from "../../utils/types";
import { AppDispatch, AppThunkAction } from "../types/types";
import {
  SET_USER_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST,
  SET_REGISTER_SUCCESS, SET_REGISTER_FAILED,
  SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_LOGOUT_FAILED
} from "../constants/auth";

export interface ISetUserSuccess {
  paylod: any;
  readonly type: typeof SET_USER_SUCCESS;
};

export interface ISetUserFailed {
  readonly type: typeof SET_USER_FAILED;
};

export interface ISetUserRequest {
  readonly type: typeof SET_USER_REQUEST;
};

export interface ISetRegisterSuccess {
  readonly type: typeof SET_REGISTER_SUCCESS;
};

export interface ISetRegisterFailed {
  readonly type: typeof SET_REGISTER_FAILED;
};

export interface ISetLogoutRequest {
  readonly type: typeof SET_LOGOUT_REQUEST;
};

export interface ISetLogoutSuccess {
  readonly type: typeof SET_LOGOUT_SUCCESS;
};

export interface ISetLogoutFailed {
  readonly type: typeof SET_LOGOUT_FAILED;
};

export type TAuthActions = 
  | ISetUserSuccess
  | ISetUserFailed
  | ISetUserRequest
  | ISetRegisterSuccess
  | ISetRegisterFailed
  | ISetLogoutRequest
  | ISetLogoutSuccess
  | ISetLogoutFailed

export const refreshToken = (): AppThunkAction => (dispatch: AppDispatch) => {
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

export const getUserData = (): AppThunkAction => (dispatch: AppDispatch) => {
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

export const updateUserData = (data: TFullUserData): AppThunkAction => (dispatch: AppDispatch) => {
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

export const signIn = (data: TAuthData): AppThunkAction => (dispatch: AppDispatch) => {
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

export const signUp = (data: TFullUserData): AppThunkAction => (dispatch: AppDispatch) => {
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

export const signOut = (): AppThunkAction => (dispatch: AppDispatch) => {
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
