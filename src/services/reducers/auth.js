import {
  SET_USER_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST,
  SET_REGISTER_SUCCESS, SET_REGISTER_FAILED,
  SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_LOGOUT_FAILED
} from "../actions/auth";

const userInitialState = {
  user: {},
  loginSuccess: false,
  loginFailed: false,
  registerSuccess: false,
  registerFailed: false,
  logoutSuccess: false,
  logoutFailed: false,
};

export const userReduser = (state = userInitialState, action) => {
  switch(action.type) {
    case SET_USER_SUCCESS: {
      return {
        ...state,
        user: action.paylod.user,
        loginSuccess: true,
        loginFailed: false,
      }
    }

    case SET_USER_REQUEST: {
      return {
        ...state,
        loginSuccess: true,
        loginFailed: false,
      }
    }

    case SET_USER_FAILED: {
      return {
        ...state,
        loginSuccess: false,
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
        registerSuccess: false,
        registerFailed: true,
      }
    }

    case SET_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutSuccess: true,
        logoutFailed: false,
      }
    }

    case SET_LOGOUT_SUCCESS: {
      return {
        ...state,
        user: {},
        logoutSuccess: true,
        logoutFailed: false,
      }
    }

    case SET_LOGOUT_FAILED: {
      return {
        ...state,
        logoutSuccess: false,
        logoutFailed: true,
      }
    }
    
    default:
      return state;
  }
}