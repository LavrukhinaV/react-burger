import { BASE_URL, checkResponse } from "./Api";

export const updateToken = async(token) => {
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

export const getUser = async (token) => {
  const res = await fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return checkResponse(res);
};

export const updateUser = async (token, data) => {
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

export const register = async (data) => {
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

export const authorize = async (data) => {
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

export const logOut = async (token) => {
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

export const forgotPassword = async (email) => {
  const res = await fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email)
  });
  return checkResponse(res);
};

export const resetPassword = async (data) => {

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