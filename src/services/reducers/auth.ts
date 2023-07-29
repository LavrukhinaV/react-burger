import {
  SET_USER_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST,
  SET_REGISTER_SUCCESS, SET_REGISTER_FAILED,
  SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_LOGOUT_FAILED
} from "../constants/auth";

import { TAuthActions } from "../../services/actions/auth";
import { TFullUserData } from "../../utils/types";

type TUserInitialState = {
  isAuthChecked: boolean,
  isAuth: null | boolean,

  user: TFullUserData,

  registerSuccess: null | boolean,
  registerFailed: boolean,
  loginRequest: null | boolean,
  loginSuccess: null | boolean,
  loginFailed: boolean,

  getUserSuccess: null | boolean,
  getUserFailed: boolean,
  logoutRequest: null | boolean,
  logoutSuccess: null | boolean,
  logoutFailed: boolean,
}

const userInitialState: TUserInitialState = {
  isAuthChecked: false,
  isAuth: null,

  user: {
    name: "",
    email: "",
    password: ""
  },

  registerSuccess: null,
  registerFailed: false,
  loginRequest: null,
  loginSuccess: null,
  loginFailed: false,

  getUserSuccess: null,
  getUserFailed: false,
  logoutRequest: null,
  logoutSuccess: null,
  logoutFailed: false,
};

export const userReduser = (state = userInitialState, action: TAuthActions): TUserInitialState => {
  switch(action.type) {

    case SET_USER_SUCCESS: {
      return {
        ...state,
        user: action.paylod.user,
        loginRequest: true,
        loginFailed: false,
        isAuth: true
      }
    }

    case SET_USER_REQUEST: {
      return {
        ...state,
        isAuthChecked: true
      }
    }

    case SET_USER_FAILED: {
      return {
        ...state,
        loginFailed: true,
        isAuth: false
      }
    }

    case SET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerSuccess: true,
        registerFailed: false,
      }
    }

    case SET_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
      }
    }

    case SET_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
      }
    }

    case SET_LOGOUT_SUCCESS: {
      return {
        ...state,
        user: {
          name: "",
          email: "",
          password: ""
        },
        logoutRequest: true,
        logoutFailed: false,
        loginSuccess: false,
        isAuth: false
      }
    }

    case SET_LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
      }
    }
    
    default:
      return state;
  }
}