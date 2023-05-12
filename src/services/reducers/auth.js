import {
  SET_USER_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST,
  SET_REGISTER_SUCCESS, SET_REGISTER_FAILED,
  SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_LOGOUT_FAILED
} from "../actions/auth";

const userInitialState = {
  isAuthChecked: false,

  user: {},

  registerSuccess: null,
  registerFailed: false,

  loginSuccess: null,
  loginFailed: false,

  getUserSuccess: null,
  getUserFailed: false,

  logoutSuccess: null,
  logoutFailed: false,
};

export const userReduser = (state = userInitialState, action) => {
  switch(action.type) {

    case SET_USER_SUCCESS: {
      return {
        ...state,
        user: action.paylod.user,
        loginRequest: true,
        loginFailed: false,
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
        user: {},
        logoutRequest: true,
        logoutFailed: false,
        loginSuccess: false,
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