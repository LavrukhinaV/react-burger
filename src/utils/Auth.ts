import { BASE_URL, checkResponse } from "./Api";
import { TFormValue, TUserData, TFullUserData, TTokensData, TAuthData } from "./types";

type TResponse = {
  success: boolean;
  message?: string
}

export const updateToken = async(token: string): Promise<TResponse & TTokensData> => {
  const res = await fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"token": token})
  });
  return checkResponse(res);
};

export const getUser = async (token: string): Promise<TUserData>  => {
  const res = await fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return checkResponse<TUserData>(res);
};

export const updateUser = async (token: string, data: TFormValue): Promise<TResponse & {user: TUserData}> => {
  const res = await fetch(`${BASE_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
  return checkResponse(res);
};

export const register = async (data: TFullUserData): Promise<TResponse & {user: TUserData} & TTokensData> => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return checkResponse(res);
};

export const authorize = async (data: TAuthData): Promise<TResponse & {user: TUserData} & TTokensData> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return checkResponse(res);
};

export const logOut = async (token: string): Promise<TResponse>  => {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"token": token})
  });
  return checkResponse(res);
}

export const forgotPassword = async (data: TFormValue): Promise<TResponse> => {
  const res = await fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return checkResponse(res);
};

export const resetPassword = async (data: TFormValue): Promise<TResponse> => {

  const res = await fetch(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return checkResponse(res);
};