import { userReduser, userInitialState } from "./auth";
import {
  SET_USER_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST,
  SET_REGISTER_SUCCESS, SET_REGISTER_FAILED,
  SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_LOGOUT_FAILED
} from "../constants/auth";

const user = {
  name: "userName",
  email: "userEmail",
}

describe('auth reduser', () => {
  it('should return the initial state', () => {
    expect(userReduser(undefined, {})).toEqual(userInitialState)
  })

  it('should hadle SET_USER_SUCCESS', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_USER_SUCCESS,
        payload: { user: user}
      })
    ).toEqual(
      {
        ...userInitialState,
        user: user,
        loginRequest: true,
        loginFailed: false,
        isAuth: true
      }
    )
  })

  it('should hadle SET_USER_REQUEST', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_USER_REQUEST,
      })
    ).toEqual(
      {
        ...userInitialState,
        isAuthChecked: true
      }
    )
  })

  it('should hadle SET_USER_FAILED', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_USER_FAILED,
      })
    ).toEqual(
      {
        ...userInitialState,
        loginFailed: true,
        isAuth: false
      }
    )
  })

  it('should hadle SET_REGISTER_SUCCESS', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_REGISTER_SUCCESS,
      })
    ).toEqual(
      {
        ...userInitialState,
        registerSuccess: true,
        registerFailed: false,
      }
    )
  })

  it('should hadle SET_REGISTER_FAILED', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_REGISTER_FAILED,
      })
    ).toEqual(
      {
        ...userInitialState,
        registerFailed: true,
      }
    )
  })

  it('should hadle SET_LOGOUT_REQUEST', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_LOGOUT_REQUEST,
      })
    ).toEqual(
      {
        ...userInitialState,
        logoutRequest: true,
      }
    )
  })

  it('should hadle SET_LOGOUT_SUCCESS', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_LOGOUT_SUCCESS,
      })
    ).toEqual(
      {
        ...userInitialState,
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
    )
  })

  it('should hadle SET_LOGOUT_FAILED', () => {
    expect(
      userReduser(userInitialState, {
        type: SET_LOGOUT_FAILED,
      })
    ).toEqual(
      {
        ...userInitialState,
        logoutFailed: true,
      }
    )
  })

})